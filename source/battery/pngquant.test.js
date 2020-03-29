import { resolve } from 'path'
import { doThrowAsync } from '@dr-js/core/module/common/verify'
import { modifyDelete } from '@dr-js/core/module/node/file/Modify'
import { resetDirectory } from '@dr-js/dev/module/node/file'

import { TEST_BUFFER_PNG, TEST_BUFFER_SVG as TEST_BUFFER_NON_PNG } from './__resource.test'
import { writeFileAsync, testBufferProcessorAsync } from './__function.test'
import { configBufferProcessorAsync } from './pngquant'

const { describe, it, before, after } = global

const TEST_ROOT = resolve(__dirname, './test-pngquant-gitignore/')
const fromRoot = (...args) => resolve(TEST_ROOT, ...args)

before('prepare', async () => {
  await resetDirectory(TEST_ROOT)
  await writeFileAsync(fromRoot('TEST_BUFFER_PNG.png'), TEST_BUFFER_PNG)
  await writeFileAsync(fromRoot('TEST_BUFFER_NON_PNG'), TEST_BUFFER_NON_PNG)
})
after('clear', async () => {
  await modifyDelete(TEST_ROOT)
})

describe('Battery|pngquant', () => {
  it('png', async () => testBufferProcessorAsync({
    fromRoot, configBufferProcessorAsync,
    TEST_BUFFER: TEST_BUFFER_PNG,
    OUTPUT_BUFFER_NAME: 'OUTPUT_BUFFER_PNG.png'
  }))

  it('non-png', () => doThrowAsync(async () => testBufferProcessorAsync({
    fromRoot, configBufferProcessorAsync,
    TEST_BUFFER: TEST_BUFFER_NON_PNG,
    OUTPUT_BUFFER_NAME: 'OUTPUT_BUFFER_NON_PNG'
  })))
})
