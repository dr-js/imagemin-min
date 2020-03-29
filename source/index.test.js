import { resolve } from 'path'
import { doThrowAsync } from '@dr-js/core/module/common/verify'
import { modifyDelete } from '@dr-js/core/module/node/file/Modify'
import { resetDirectory } from '@dr-js/dev/module/node/file'

import {
  TEST_BUFFER_JPG,
  TEST_BUFFER_PNG,
  TEST_BUFFER_GIF,
  TEST_BUFFER_SVG
} from './battery/__resource.test'
import { writeFileAsync, testBufferProcessorAsync } from './battery/__function.test'
import { configBufferProcessorAsync } from './index'

const { describe, it, before, after } = global

const TEST_ROOT = resolve(__dirname, './test-index-gitignore/')
const fromRoot = (...args) => resolve(TEST_ROOT, ...args)

const TEST_BUFFER_NON_IMAGE = Buffer.from('1234567890')

before('prepare', async () => {
  await resetDirectory(TEST_ROOT)
  await writeFileAsync(fromRoot('TEST_BUFFER_JPG.jpg'), TEST_BUFFER_JPG)
  await writeFileAsync(fromRoot('TEST_BUFFER_PNG.png'), TEST_BUFFER_PNG)
  await writeFileAsync(fromRoot('TEST_BUFFER_GIF.gif'), TEST_BUFFER_GIF)
  await writeFileAsync(fromRoot('TEST_BUFFER_SVG.svg'), TEST_BUFFER_SVG)
  await writeFileAsync(fromRoot('TEST_BUFFER_NON_IMAGE'), TEST_BUFFER_NON_IMAGE)
})
after('clear', async () => {
  await modifyDelete(TEST_ROOT)
})

describe('Index', () => {
  it('all image', async () => {
    const { bufferProcessorAsync } = await testBufferProcessorAsync({
      fromRoot, configBufferProcessorAsync,
      TEST_BUFFER: TEST_BUFFER_JPG,
      OUTPUT_BUFFER_NAME: 'OUTPUT_BUFFER_JPG.jpg'
    })
    await testBufferProcessorAsync({
      fromRoot, configBufferProcessorAsync, bufferProcessorAsync,
      TEST_BUFFER: TEST_BUFFER_PNG,
      OUTPUT_BUFFER_NAME: 'OUTPUT_BUFFER_PNG.png'
    })
    await testBufferProcessorAsync({
      fromRoot, configBufferProcessorAsync, bufferProcessorAsync,
      TEST_BUFFER: TEST_BUFFER_GIF,
      OUTPUT_BUFFER_NAME: 'OUTPUT_BUFFER_GIF.gif'
    })
    await testBufferProcessorAsync({
      fromRoot, configBufferProcessorAsync, bufferProcessorAsync,
      TEST_BUFFER: TEST_BUFFER_SVG,
      OUTPUT_BUFFER_NAME: 'OUTPUT_BUFFER_SVG.svg'
    })
  })

  it('non image', () => doThrowAsync(async () => testBufferProcessorAsync({
    fromRoot, configBufferProcessorAsync,
    TEST_BUFFER: TEST_BUFFER_NON_IMAGE,
    OUTPUT_BUFFER_NAME: 'OUTPUT_BUFFER_NON_IMAGE'
  })))
})
