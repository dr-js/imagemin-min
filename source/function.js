import { join } from 'node:path'
import { run } from '@dr-js/core/module/node/run.js'
import { bufferToReadableStream, quickRunletFromStream } from '@dr-js/core/module/node/data/Stream.js'

// TODO: HACK: NOTE: only do package import here, and later this will be webpack-ed to cut dependency

const platformArchTagCurrent = `${process.platform}|${process.arch}`
const selectExecutable = (selectMap = {}, relativeToPath = '.') => {
  for (const [ platformArchTag, executablePath ] of Object.entries(selectMap)) {
    if (platformArchTagCurrent.startsWith(platformArchTag)) return join(relativeToPath, executablePath)
  }
  throw new Error(`unsupported env ${platformArchTagCurrent}`)
}

const quickRunAsync = async (argList, inputBuffer = null) => {
  const { subProcess, promise, stdoutPromise, stderrPromise } = run(argList, {
    quiet: true,
    describeError: false,
    ...(inputBuffer && { stdio: 'pipe' })
  })
  inputBuffer
    ? await Promise.all([
      quickRunletFromStream(bufferToReadableStream(inputBuffer), subProcess.stdin),
      promise
    ])
    : await promise
  return [ await stdoutPromise, await stderrPromise ] // result in buffer
}

const createBufferProcessorAsync = async (
  SELECT_MAP, SELECT_PATH_ROOT,
  TEST_ARG_LIST, TEST_EXPECT_OUTPUT,
  ARG_LIST
) => {
  const command = selectExecutable(SELECT_MAP, SELECT_PATH_ROOT)

  // sanity test
  const [ stdoutBuffer, stderrBuffer ] = await quickRunAsync([ command, ...TEST_ARG_LIST ])
  if (
    !String(stdoutBuffer).includes(TEST_EXPECT_OUTPUT) &&
    !String(stderrBuffer).includes(TEST_EXPECT_OUTPUT)
  ) throw new Error(`expect test run output: "${TEST_EXPECT_OUTPUT}", but get: [STDOUT] ${String(stdoutBuffer)}\n[STDERR] ${String(stderrBuffer)}`)

  return async (buffer) => {
    const [ stdoutBuffer ] = await quickRunAsync([ command, ...ARG_LIST ], buffer)
    return stdoutBuffer
  }
}

export {
  createBufferProcessorAsync
}
