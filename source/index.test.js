import { doThrowAsync } from '@dr-js/core/module/common/verify.js'
import { PATH_TEST_BUFFER_JPG, PATH_TEST_BUFFER_PNG, PATH_TEST_BUFFER_GIF, PATH_TEST_BUFFER_SVG, PATH_TEST_BUFFER_WEBP, PATH_TEST_BUFFER_NON_IMAGE, testBufferProcessorAsync } from './battery/common.test/function.js'
import { configImageProcessor } from './index.js'

const { describe, it } = global

describe('Index', () => {
  it('all image', async () => {
    await testBufferProcessorAsync(configImageProcessor, {
      TEST_TAG: 'all-jpg', PATH_SOURCE_BUFFER: PATH_TEST_BUFFER_JPG
    })
    await testBufferProcessorAsync(configImageProcessor, {
      TEST_TAG: 'all-png', PATH_SOURCE_BUFFER: PATH_TEST_BUFFER_PNG
    })
    await testBufferProcessorAsync(configImageProcessor, {
      TEST_TAG: 'all-gif', PATH_SOURCE_BUFFER: PATH_TEST_BUFFER_GIF
    })
    await testBufferProcessorAsync(configImageProcessor, {
      TEST_TAG: 'all-svg', PATH_SOURCE_BUFFER: PATH_TEST_BUFFER_SVG
    })
    await testBufferProcessorAsync(configImageProcessor, {
      TEST_TAG: 'all-webp', PATH_SOURCE_BUFFER: PATH_TEST_BUFFER_WEBP
    })
  })

  it('non image', () => doThrowAsync(async () => testBufferProcessorAsync(configImageProcessor, {
    TEST_TAG: 'all-non-image', PATH_SOURCE_BUFFER: PATH_TEST_BUFFER_NON_IMAGE
  })))
})
