import { doThrowAsync } from '@dr-js/core/module/common/verify.js'
import { PATH_TEST_BUFFER_WEBP, PATH_TEST_BUFFER_NON_IMAGE, testBufferProcessorAsync } from './common.test/function.js'
import { configBufferProcessorAsync } from './cwebp.js'

const { describe, it } = global

describe('Battery|cwebp', () => {
  it('webp', async () => testBufferProcessorAsync({
    TEST_TAG: 'cwebp-webp',
    PATH_SOURCE_BUFFER: PATH_TEST_BUFFER_WEBP,
    configBufferProcessorAsync
  }))

  it('non-webp', () => doThrowAsync(async () => testBufferProcessorAsync({
    TEST_TAG: 'cwebp-non-webp',
    PATH_SOURCE_BUFFER: PATH_TEST_BUFFER_NON_IMAGE,
    configBufferProcessorAsync
  })))
})
