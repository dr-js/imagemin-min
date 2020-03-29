import { join } from 'path'
import { run } from '@dr-js/core/module/node/system/Run'
import { setupStreamPipe, waitStreamStopAsync, bufferToReadableStream } from '@dr-js/core/module/node/data/Stream'

const selectExecutable = (selectMap = {}, relativeToPath = '.') => {
  const platformArchTagCurrent = `${process.platform}|${process.arch}`
  for (const [ platformArchTag, executablePath ] of Object.entries(selectMap)) {
    if (platformArchTagCurrent.startsWith(platformArchTag)) return join(relativeToPath, executablePath)
  }
  throw new Error(`unsupported env ${platformArchTagCurrent}`)
}

const quickRunAsync = async (command, argList, inputBuffer = null) => {
  const { subProcess, promise, stdoutPromise, stderrPromise } = run({
    command,
    argList,
    option: inputBuffer ? { stdio: 'pipe' } : {},
    quiet: true
  })
  try {
    inputBuffer
      ? await Promise.all([
        waitStreamStopAsync(setupStreamPipe(bufferToReadableStream(inputBuffer), subProcess.stdin)),
        promise
      ])
      : await promise
    return [ await stdoutPromise, await stderrPromise ] // result in buffer
  } catch (error) {
    // console.error('[STDOUT]', String(await stdoutPromise))
    // console.error('[STDERR]', String(await stderrPromise))
    throw Object.assign(error, {
      inputBuffer,
      command,
      argList,
      stdoutBuffer: await stdoutPromise,
      stderrBuffer: await stderrPromise
    })
  }
}

const createBufferProcessorAsync = async (
  SELECT_MAP, SELECT_PATH_ROOT,
  TEST_ARG_LIST, TEST_EXPECT_OUTPUT,
  ARG_LIST
) => {
  const command = selectExecutable(SELECT_MAP, SELECT_PATH_ROOT)

  // sanity test
  const [ stdoutBuffer, stderrBuffer ] = await quickRunAsync(command, TEST_ARG_LIST)

  if (
    !String(stdoutBuffer).includes(TEST_EXPECT_OUTPUT) &&
    !String(stderrBuffer).includes(TEST_EXPECT_OUTPUT)
  ) throw new Error(`expect test run output: "${TEST_EXPECT_OUTPUT}", but get: [STDOUT] ${String(stdoutBuffer)}\n[STDERR] ${String(stderrBuffer)}`)

  return async (buffer) => {
    const [ stdoutBuffer ] = await quickRunAsync(command, ARG_LIST, buffer)
    return stdoutBuffer
  }
}

export {
  selectExecutable,
  createBufferProcessorAsync
}
