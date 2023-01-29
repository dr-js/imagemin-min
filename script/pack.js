const { runKit, argvFlag } = require('@dr-js/core/library/node/kit.js')

const { getSourceJsFileListFromPathList } = require('@dr-js/dev/library/node/filePreset.js')
const { initOutput, packOutput, clearOutput, verifyNoGitignore, verifyGitStatusClean, verifyPackageVersionStrict, publishPackage } = require('@dr-js/dev/library/output.js')
const { getTerserOption, minifyFileListWithTerser } = require('@dr-js/dev/library/minify.js')
const { processFileList, fileProcessorBabel } = require('@dr-js/dev/library/fileProcessor.js')

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
    copyMapPathList: [ [ 'source-bin/', 'bin/' ] ]
  })
  if (!argvFlag('pack')) return

  const isPublish = argvFlag('publish')
  const isTest = isPublish || argvFlag('test')
  isPublish && verifyPackageVersionStrict(packageJSON.version)

  kit.RUN('npm run script-generate-spec')
  kit.RUN('npm run script-generate-battery-svgo')
  kit.RUN('npm run build-library')
  kit.RUN('npm run build-library-function')

  await processOutput({ kit })
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
