/* this file contain no test, just for export common test function */

import { strictEqual } from '@dr-js/core/module/common/verify'
import { time, binary } from '@dr-js/core/module/common/format'
import { createStepper } from '@dr-js/core/module/common/time'
import { writeFileAsync } from '@dr-js/core/module/node/file/function'

const { info = console.log } = global

const testBufferProcessorAsync = async ({
  fromRoot,
  configBufferProcessorAsync, bufferProcessorAsync,
  TEST_BUFFER, OUTPUT_BUFFER_NAME,
  stepper = createStepper()
}) => {
  if (!bufferProcessorAsync) {
    bufferProcessorAsync = await configBufferProcessorAsync()
    info(`done config (+${time(stepper())})`)
  }

  const OUTPUT_BUFFER = await bufferProcessorAsync(TEST_BUFFER)
  info(`done process: ${binary(TEST_BUFFER.length)}B -> ${binary(OUTPUT_BUFFER.length)}B (+${time(stepper())})`)

  await writeFileAsync(fromRoot(OUTPUT_BUFFER_NAME), OUTPUT_BUFFER) // for inspection when error

  strictEqual(OUTPUT_BUFFER.length < TEST_BUFFER.length, true, 'output should be smaller')

  return { bufferProcessorAsync, OUTPUT_BUFFER }
}

export { writeFileAsync, testBufferProcessorAsync }
