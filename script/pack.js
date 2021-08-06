import { getSourceJsFileListFromPathList } from '@dr-js/dev/module/node/filePreset.js'
import { initOutput, packOutput, clearOutput, verifyNoGitignore, verifyGitStatusClean, publishOutput } from '@dr-js/dev/module/output.js'
import { getTerserOption, minifyFileListWithTerser } from '@dr-js/dev/module/minify.js'
import { processFileList, fileProcessorBabel } from '@dr-js/dev/module/fileProcessor.js'
import { runMain, argvFlag, commonCombo } from '@dr-js/dev/module/main.js'

runMain(async (logger) => {
  const { RUN, fromRoot, fromOutput } = commonCombo(logger)

  const processOutput = async ({ logger }) => {
    const fileList = await getSourceJsFileListFromPathList([ 'library' ], fromOutput)
    let sizeReduce = 0
    sizeReduce += await minifyFileListWithTerser({ fileList, option: getTerserOption(), rootPath: fromOutput(), logger })
    sizeReduce += await processFileList({ fileList, processor: fileProcessorBabel, rootPath: fromOutput(), logger })
    logger.padLog(`size reduce: ${sizeReduce}B`)
  }

  await verifyNoGitignore({ path: fromRoot('source'), logger })
  const packageJSON = await initOutput({
    fromRoot, fromOutput, logger,
    copyMapPathList: [
      [ 'source-bin/min-in-place.js', 'bin/min-in-place.js' ],
      [ 'source-bin/test-boot.js', 'bin/test-boot.js' ],
      [ 'source-bin/trim-battery.js', 'bin/trim-battery.js' ]
    ]
  })
  if (!argvFlag('pack')) return

  logger.padLog('generate spec')
  RUN('npm run script-generate-spec')
  logger.padLog('generate battery-svgo')
  RUN('npm run script-generate-battery-svgo')
  logger.padLog('build library')
  RUN('npm run build-library')
  logger.padLog('build library-function')
  RUN('npm run build-library-function')

  await processOutput({ logger })
  const isTest = argvFlag('test', 'publish', 'publish-dev')
  isTest && logger.padLog('lint source')
  isTest && RUN('npm run lint')
  isTest && await processOutput({ logger }) // once more
  isTest && logger.padLog('test output')
  isTest && RUN('npm run test-output')
  await clearOutput({ fromOutput, logger })
  isTest && await verifyGitStatusClean({ fromRoot, logger })
  const pathPackagePack = await packOutput({ fromRoot, fromOutput, logger })
  if (process.platform === 'win32' && argvFlag('publish', 'publish-dev')) throw new Error('use a *nix platform to pack `.tgz` and publish to preserve correct file permission!')
  await publishOutput({ packageJSON, pathPackagePack, logger })
})
