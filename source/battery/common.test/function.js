/* this file contain no test, just for export common test function */

import { resolve } from 'path'
import { promises as fsAsync } from 'fs'
import { strictEqual } from '@dr-js/core/module/common/verify.js'
import { time, binary } from '@dr-js/core/module/common/format.js'
import { createStepper } from '@dr-js/core/module/common/time.js'
import { createDirectory } from '@dr-js/core/module/node/fs/Directory.js'

const { info = console.log } = global

const PATH_TEST_BUFFER_JPG = resolve(__dirname, 'TEST_BUFFER_JPG')
const PATH_TEST_BUFFER_PNG = resolve(__dirname, 'TEST_BUFFER_PNG')
const PATH_TEST_BUFFER_GIF = resolve(__dirname, 'TEST_BUFFER_GIF')
const PATH_TEST_BUFFER_SVG = resolve(__dirname, 'TEST_BUFFER_SVG')
const PATH_TEST_BUFFER_NON_IMAGE = resolve(__dirname, 'TEST_BUFFER_NON_IMAGE')

const testBufferProcessorAsync = async ({
  TEST_TAG,
  SOURCE_BUFFER, PATH_SOURCE_BUFFER,
  configBufferProcessorAsync, bufferProcessorAsync,
  stepper = createStepper()
}) => {
  if (!SOURCE_BUFFER) SOURCE_BUFFER = await fsAsync.readFile(PATH_SOURCE_BUFFER)
  if (!bufferProcessorAsync) bufferProcessorAsync = await configBufferProcessorAsync()
  info(`[${TEST_TAG}] done prepare (+${time(stepper())})`)

  const OUTPUT_BUFFER = await bufferProcessorAsync(SOURCE_BUFFER)
  info(`[${TEST_TAG}] done process: ${binary(SOURCE_BUFFER.length)}B -> ${binary(OUTPUT_BUFFER.length)}B (+${time(stepper())})`)

  // for inspection when error
  __DEV__ && await createDirectory(resolve(__dirname, 'test-gitignore'))
  __DEV__ && await fsAsync.writeFile(resolve(__dirname, 'test-gitignore', `[${TEST_TAG}]OUTPUT_BUFFER`), OUTPUT_BUFFER)

  strictEqual(OUTPUT_BUFFER.length < SOURCE_BUFFER.length, true, `[${TEST_TAG}] output should be smaller than source`)

  return { bufferProcessorAsync, OUTPUT_BUFFER }
}

export {
  PATH_TEST_BUFFER_JPG, PATH_TEST_BUFFER_PNG, PATH_TEST_BUFFER_GIF, PATH_TEST_BUFFER_SVG, PATH_TEST_BUFFER_NON_IMAGE,
  testBufferProcessorAsync
}
