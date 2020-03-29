import { resolve } from 'path'
import { execSync } from 'child_process'

import { modifyDelete } from '@dr-js/core/module/node/file/Modify'

import { getScriptFileListFromPathList } from '@dr-js/dev/module/node/file'
import { initOutput, packOutput, verifyNoGitignore, verifyGitStatusClean, publishOutput } from '@dr-js/dev/module/output'
import { getTerserOption, minifyFileListWithTerser } from '@dr-js/dev/module/minify'
import { runMain, argvFlag } from '@dr-js/dev/module/main'

const PATH_ROOT = resolve(__dirname, '..')
const PATH_OUTPUT = resolve(__dirname, '../output-gitignore')
const fromRoot = (...args) => resolve(PATH_ROOT, ...args)
const fromOutput = (...args) => resolve(PATH_OUTPUT, ...args)
const execShell = (command) => execSync(command, { cwd: fromRoot(), stdio: argvFlag('quiet') ? [ 'ignore', 'ignore', 'inherit' ] : 'inherit' })

const buildOutput = async ({ logger }) => {
  logger.padLog('generate spec')
  execShell('npm run script-generate-spec')
  logger.padLog('generate battery-svgo')
  execShell('npm run script-generate-battery-svgo')
  logger.padLog('build library')
  execShell('npm run build-library')
}

const processOutput = async ({ logger }) => {
  const fileListLibrary = await getScriptFileListFromPathList([ 'library' ], fromOutput)
  let sizeReduce = 0
  sizeReduce += await minifyFileListWithTerser({ fileList: fileListLibrary, option: getTerserOption({ isReadable: true }), rootPath: PATH_OUTPUT, logger })
  logger.log(`size reduce: ${sizeReduce}B`)
}

const clearOutput = async ({ logger }) => {
  logger.padLog('clear output')
  const fileList = await getScriptFileListFromPathList([ '.' ], fromOutput, (path) => path.endsWith('.test.js'))
  for (const filePath of fileList) await modifyDelete(filePath)
}

runMain(async (logger) => {
  await verifyNoGitignore({ path: fromRoot('source'), logger })
  const packageJSON = await initOutput({ fromRoot, fromOutput, logger })
  if (!argvFlag('pack')) return
  await buildOutput({ logger })
  await processOutput({ logger })
  const isTest = argvFlag('test', 'publish', 'publish-dev')
  isTest && logger.padLog('lint source')
  isTest && execShell('npm run lint')
  isTest && logger.padLog('test source')
  isTest && execShell('npm run test-source')
  isTest && await processOutput({ logger }) // once more
  await clearOutput({ logger })
  isTest && await verifyGitStatusClean({ fromRoot, logger })
  isTest && await verifyGitStatusClean({ fromRoot, logger })
  const pathPackagePack = await packOutput({ fromRoot, fromOutput, logger })
  if (process.platform === 'win32' && argvFlag('publish', 'publish-dev')) throw new Error('use a *nix platform to pack `.tgz` and publish to preserve correct file permission!')
  await publishOutput({ flagList: process.argv, packageJSON, pathPackagePack, logger })
})
