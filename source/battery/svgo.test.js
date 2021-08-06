import { doThrowAsync } from '@dr-js/core/module/common/verify.js'
import { PATH_TEST_BUFFER_SVG, PATH_TEST_BUFFER_NON_IMAGE, testBufferProcessorAsync } from './common.test/function.js'
import { configBufferProcessorAsync } from './svgo.js'

const { describe, it } = global

describe('Battery|svgo', () => {
  it('svg', async () => testBufferProcessorAsync({
    TEST_TAG: 'svgo-svg',
    PATH_SOURCE_BUFFER: PATH_TEST_BUFFER_SVG,
    configBufferProcessorAsync
  }))

  it('non-svg', () => doThrowAsync(async () => testBufferProcessorAsync({
    TEST_TAG: 'svgo-non-svg',
    PATH_SOURCE_BUFFER: PATH_TEST_BUFFER_NON_IMAGE,
    configBufferProcessorAsync
  })))
})
