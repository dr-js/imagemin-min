import { runKit, argvFlag } from '@dr-js/core/module/node/kit.js'

import { getSourceJsFileListFromPathList } from '@dr-js/dev/module/node/filePreset.js'
import { initOutput, packOutput, clearOutput, verifyNoGitignore, verifyGitStatusClean, verifyPackageVersionStrict, publishPackage } from '@dr-js/dev/module/output.js'
import { getTerserOption, minifyFileListWithTerser } from '@dr-js/dev/module/minify.js'
import { processFileList, fileProcessorBabel } from '@dr-js/dev/module/fileProcessor.js'

runKit(async (kit) => {
  const processOutput = async () => {
    const fileList = await getSourceJsFileListFromPathList([ 'library' ], kit.fromOutput)
    let sizeReduce = 0
    sizeReduce += await minifyFileListWithTerser({ fileList, option: getTerserOption(), kit })
    sizeReduce += await processFileList({ fileList, processor: fileProcessorBabel, kit })
    kit.padLog(`size reduce: ${sizeReduce}B`)
  }

  await verifyNoGitignore({ path: kit.fromRoot('source'), kit })
  const packageJSON = await initOutput({
    kit,
    copyMapPathList: [
      [ 'source-bin/min-in-place.js', 'bin/min-in-place.js' ],
      [ 'source-bin/test-boot.js', 'bin/test-boot.js' ],
      [ 'source-bin/trim-battery.js', 'bin/trim-battery.js' ]
    ]
  })
  if (!argvFlag('pack')) return

  const isPublish = argvFlag('publish')
  isPublish && verifyPackageVersionStrict(packageJSON.version)
  kit.padLog('generate spec')
  kit.RUN('npm run script-generate-spec')
  kit.padLog('generate battery-svgo')
  kit.RUN('npm run script-generate-battery-svgo')
  kit.padLog('build library')
  kit.RUN('npm run build-library')
  kit.padLog('build library-function')
  kit.RUN('npm run build-library-function')

  await processOutput({ kit })
  const isTest = argvFlag('test', 'publish')
  isTest && kit.padLog('lint source')
  isTest && kit.RUN('npm run lint')
  isTest && await processOutput({ kit }) // once more
  isTest && kit.padLog('test output')
  isTest && kit.RUN('npm run test-output')
  await clearOutput({ kit })
  isTest && await verifyGitStatusClean({ kit })
  const pathPackagePack = await packOutput({ kit })
  if (process.platform === 'win32' && isPublish) throw new Error('use a *nix platform to pack `.tgz` and publish to preserve correct file permission!')
  isPublish && await publishPackage({ packageJSON, pathPackagePack, kit })
})
