import { doThrowAsync } from '@dr-js/core/module/common/verify.js'
import { PATH_TEST_BUFFER_GIF, PATH_TEST_BUFFER_NON_IMAGE, testBufferProcessorAsync } from './common.test/function.js'
import { configGifsicleProcessor } from './gifsicle.js'

const { describe, it } = global

describe('Battery|gifsicle', () => {
  it('gif', async () => testBufferProcessorAsync(configGifsicleProcessor, {
    TEST_TAG: 'gifsicle-gif', PATH_SOURCE_BUFFER: PATH_TEST_BUFFER_GIF
  }))

  it('non-gif', () => configGifsicleProcessor().check() && doThrowAsync(async () => testBufferProcessorAsync(configGifsicleProcessor, {
    TEST_TAG: 'gifsicle-non-gif', PATH_SOURCE_BUFFER: PATH_TEST_BUFFER_NON_IMAGE
  })))
})
