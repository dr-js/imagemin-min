import { run } from '@dr-js/core/module/node/run.js'
import { probeSync, createArgListPack } from '@dr-js/core/module/node/module/function.js'
import { bufferToReadableStream, setupStreamPipe, waitStreamStopAsync } from '@dr-js/core/module/node/data/Stream.js'

// TODO: HACK: NOTE: only do package import here, and later this will be webpack-ed to cut dependency

const quickRunAsync = async (argList, inputBuffer = null) => {
  const { subProcess, promise, stdoutPromise, stderrPromise } = run(argList, {
    quiet: true,
    describeError: false,
    ...(inputBuffer && { stdio: 'pipe' })
  })
  await Promise.all([
    inputBuffer && waitStreamStopAsync(setupStreamPipe(bufferToReadableStream(inputBuffer), subProcess.stdin)),
    promise
  ])
  return Promise.all([ stdoutPromise, stderrPromise ]) // result in buffer
}

export {
  probeSync, createArgListPack,
  quickRunAsync
}
