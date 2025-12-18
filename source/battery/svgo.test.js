import { doThrowAsync } from '@dr-js/core/module/common/verify.js'
import { PATH_TEST_BUFFER_SVG, PATH_TEST_BUFFER_NON_IMAGE, testBufferProcessorAsync } from './common.test/function.js'
import { configSvgoProcessor } from './svgo.js'

const { describe, it } = global

describe('Battery|svgo', () => {
  it('svg', async () => testBufferProcessorAsync(configSvgoProcessor, {
    TEST_TAG: 'svgo-svg', PATH_SOURCE_BUFFER: PATH_TEST_BUFFER_SVG
  }))

  it('non-svg', () => doThrowAsync(async () => testBufferProcessorAsync(configSvgoProcessor, {
    TEST_TAG: 'svgo-non-svg', PATH_SOURCE_BUFFER: PATH_TEST_BUFFER_NON_IMAGE
  })))
})
