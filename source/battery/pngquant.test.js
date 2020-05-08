import { doThrowAsync } from '@dr-js/core/module/common/verify'
import { PATH_TEST_BUFFER_PNG, PATH_TEST_BUFFER_NON_IMAGE, testBufferProcessorAsync } from './common.test/function'
import { configBufferProcessorAsync } from './pngquant'

const { describe, it } = global

describe('Battery|pngquant', () => {
  it('png', async () => testBufferProcessorAsync({
    TEST_TAG: 'pngquant-png',
    PATH_SOURCE_BUFFER: PATH_TEST_BUFFER_PNG,
    configBufferProcessorAsync
  }))

  it('non-png', () => doThrowAsync(async () => testBufferProcessorAsync({
    TEST_TAG: 'pngquant-non-png',
    PATH_SOURCE_BUFFER: PATH_TEST_BUFFER_NON_IMAGE,
    configBufferProcessorAsync
  })))
})
