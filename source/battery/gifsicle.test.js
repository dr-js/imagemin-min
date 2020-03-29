import { resolve } from 'path'
import { doThrowAsync } from '@dr-js/core/module/common/verify'
import { modifyDelete } from '@dr-js/core/module/node/file/Modify'
import { resetDirectory } from '@dr-js/dev/module/node/file'

import { TEST_BUFFER_GIF, TEST_BUFFER_SVG as TEST_BUFFER_NON_GIF } from './__resource.test'
import { writeFileAsync, testBufferProcessorAsync } from './__function.test'
import { configBufferProcessorAsync } from './gifsicle'

const { describe, it, before, after } = global

const TEST_ROOT = resolve(__dirname, './test-gifsicle-gitignore/')
const fromRoot = (...args) => resolve(TEST_ROOT, ...args)

before('prepare', async () => {
  await resetDirectory(TEST_ROOT)
  await writeFileAsync(fromRoot('TEST_BUFFER_GIF.gif'), TEST_BUFFER_GIF)
  await writeFileAsync(fromRoot('TEST_BUFFER_NON_GIF'), TEST_BUFFER_NON_GIF)
})
after('clear', async () => {
  await modifyDelete(TEST_ROOT)
})

describe('Battery|gifsicle', () => {
  it('gif', async () => testBufferProcessorAsync({
    fromRoot, configBufferProcessorAsync,
    TEST_BUFFER: TEST_BUFFER_GIF,
    OUTPUT_BUFFER_NAME: 'OUTPUT_BUFFER_GIF.gif'
  }))

  it('non-gif', () => doThrowAsync(async () => testBufferProcessorAsync({
    fromRoot, configBufferProcessorAsync,
    TEST_BUFFER: TEST_BUFFER_NON_GIF,
    OUTPUT_BUFFER_NAME: 'OUTPUT_BUFFER_NON_GIF'
  })))
})
