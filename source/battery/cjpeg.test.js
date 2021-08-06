import { doThrowAsync } from '@dr-js/core/module/common/verify.js'
import { PATH_TEST_BUFFER_JPG, PATH_TEST_BUFFER_NON_IMAGE, testBufferProcessorAsync } from './common.test/function.js'
import { configBufferProcessorAsync } from './cjpeg.js'

const { describe, it } = global

describe('Battery|cjpeg', () => {
  it('jpg', async () => testBufferProcessorAsync({
    TEST_TAG: 'cjpeg-jpg',
    PATH_SOURCE_BUFFER: PATH_TEST_BUFFER_JPG,
    configBufferProcessorAsync
  }))

  it('non-jpg', () => doThrowAsync(async () => testBufferProcessorAsync({
    TEST_TAG: 'cjpeg-non-jpg',
    PATH_SOURCE_BUFFER: PATH_TEST_BUFFER_NON_IMAGE,
    configBufferProcessorAsync
  })))
})
