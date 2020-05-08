import { doThrowAsync } from '@dr-js/core/module/common/verify'
import { PATH_TEST_BUFFER_GIF, PATH_TEST_BUFFER_NON_IMAGE, testBufferProcessorAsync } from './common.test/function'
import { configBufferProcessorAsync } from './gifsicle'

const { describe, it } = global

describe('Battery|gifsicle', () => {
  it('gif', async () => testBufferProcessorAsync({
    TEST_TAG: 'gifsicle-gif',
    PATH_SOURCE_BUFFER: PATH_TEST_BUFFER_GIF,
    configBufferProcessorAsync
  }))

  it('non-gif', () => doThrowAsync(async () => testBufferProcessorAsync({
    TEST_TAG: 'gifsicle-non-gif',
    PATH_SOURCE_BUFFER: PATH_TEST_BUFFER_NON_IMAGE,
    configBufferProcessorAsync
  })))
})
