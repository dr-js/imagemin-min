import { resolve } from 'path'
import { doThrowAsync } from '@dr-js/core/module/common/verify'
import { modifyDelete } from '@dr-js/core/module/node/file/Modify'
import { resetDirectory } from '@dr-js/dev/module/node/file'

import { TEST_BUFFER_JPG, TEST_BUFFER_SVG as TEST_BUFFER_NON_JPG } from './__resource.test'
import { writeFileAsync, testBufferProcessorAsync } from './__function.test'
import { configBufferProcessorAsync } from './cjpeg'

const { describe, it, before, after } = global

const TEST_ROOT = resolve(__dirname, './test-cjpeg-gitignore/')
const fromRoot = (...args) => resolve(TEST_ROOT, ...args)

before('prepare', async () => {
  await resetDirectory(TEST_ROOT)
  await writeFileAsync(fromRoot('TEST_BUFFER_JPG.jpg'), TEST_BUFFER_JPG)
  await writeFileAsync(fromRoot('TEST_BUFFER_NON_JPG'), TEST_BUFFER_NON_JPG)
})
after('clear', async () => {
  await modifyDelete(TEST_ROOT)
})

describe('Battery|cjpeg', () => {
  it('jpg', async () => testBufferProcessorAsync({
    fromRoot, configBufferProcessorAsync,
    TEST_BUFFER: TEST_BUFFER_JPG,
    OUTPUT_BUFFER_NAME: 'OUTPUT_BUFFER_JPG.jpg'
  }))

  it('non-jpg', () => doThrowAsync(async () => testBufferProcessorAsync({
    fromRoot, configBufferProcessorAsync,
    TEST_BUFFER: TEST_BUFFER_NON_JPG,
    OUTPUT_BUFFER_NAME: 'OUTPUT_BUFFER_NON_JPG'
  })))
})
