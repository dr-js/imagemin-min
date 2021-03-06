const { resolve } = require('path')
const { release, arch } = require('os')
const { run } = require('@dr-js/core/library/node/system/Run')

console.log(`[ci-patch] system: ${process.platform}-${release()}[${arch()}]`)
console.log(`[ci-patch] node: ${process.version}`)
console.log(`[ci-patch] with @dr-js/core@${require('@dr-js/core/package.json').version}`)

const PATH_ROOT = resolve(__dirname, '../')
console.log(`[ci-patch] PATH_ROOT: ${PATH_ROOT}`)

const quickRun = async (argListOrString) => { // accept string list of very basic command do not need extra quote
  const argList = Array.isArray(argListOrString) ? argListOrString : argListOrString.split(' ').filter(Boolean)
  const command = argList.shift()
  console.log(`[ci-patch] run: "${command} ${argList.join(' ')}"`)
  await run({ command, argList, option: { cwd: PATH_ROOT }, describeError: true }).promise
}

const main = async () => {
  const IS_WIN32 = process.platform === 'win32'

  // Patch git
  //   fix win32 CI cause `something to commit` test error: https://github.com/actions/checkout/issues/135#issuecomment-602171132
  IS_WIN32 && await quickRun('git config core.autocrlf false')
  IS_WIN32 && await quickRun('git config core.eol lf')
  IS_WIN32 && await quickRun('git rm --cached -r .') // reset Git index, `rm .git/index` also work, check: https://stackoverflow.com/questions/5787937/git-status-shows-files-as-changed-even-though-contents-are-the-same/41041699#41041699
  IS_WIN32 && await quickRun('git reset --hard')
}

main().then(
  () => console.log('[ci-patch] done'),
  (error) => {
    console.error('[ci-patch] error:', error)
    process.exitCode = 1
  }
)
