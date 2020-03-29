import { resolve } from 'path'
import { doThrowAsync } from '@dr-js/core/module/common/verify'
import { modifyDelete } from '@dr-js/core/module/node/file/Modify'
import { resetDirectory } from '@dr-js/dev/module/node/file'

import { TEST_BUFFER_SVG, TEST_BUFFER_JPG as TEST_BUFFER_NON_SVG } from './__resource.test'
import { writeFileAsync, testBufferProcessorAsync } from './__function.test'
import { configBufferProcessorAsync } from './svgo'

const { describe, it, before, after } = global

const TEST_ROOT = resolve(__dirname, './test-svgo-gitignore/')
const fromRoot = (...args) => resolve(TEST_ROOT, ...args)

before('prepare', async () => {
  await resetDirectory(TEST_ROOT)
  await writeFileAsync(fromRoot('TEST_BUFFER_SVG.svg'), TEST_BUFFER_SVG)
  await writeFileAsync(fromRoot('TEST_BUFFER_NON_SVG'), TEST_BUFFER_NON_SVG)
})
after('clear', async () => {
  await modifyDelete(TEST_ROOT)
})

describe('Battery|svgo', () => {
  it('svg', async () => testBufferProcessorAsync({
    fromRoot, configBufferProcessorAsync,
    TEST_BUFFER: TEST_BUFFER_SVG,
    OUTPUT_BUFFER_NAME: 'OUTPUT_BUFFER_SVG.svg'
  }))

  it('non-svg', () => doThrowAsync(async () => testBufferProcessorAsync({
    fromRoot, configBufferProcessorAsync,
    TEST_BUFFER: TEST_BUFFER_NON_SVG,
    OUTPUT_BUFFER_NAME: 'OUTPUT_BUFFER_NON_SVG'
  })))
})
