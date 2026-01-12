import { doThrowAsync } from '@dr-js/core/module/common/verify.js'
import { PATH_TEST_BUFFER_JPG, PATH_TEST_BUFFER_PNG, PATH_TEST_BUFFER_GIF, PATH_TEST_BUFFER_SVG, PATH_TEST_BUFFER_WEBP, PATH_TEST_BUFFER_NON_IMAGE } from './common.test/function.js'

import { configMinPackSharp, loadSharpDefault, loadSharpFallback } from './sharp.js'
import { createStepper } from '@dr-js/core/module/common/time'
import { readBufferSync } from '@dr-js/core/module/node/fs/File'
import { binary, time } from '@dr-js/core/module/common/format'

const { describe, it, info = console.log } = global

const testSharpAsync = async ({
  TEST_TAG,
  SOURCE_BUFFER, PATH_SOURCE_BUFFER,
  LOAD_SHARP,
  stepper = createStepper()
}) => {
  if (!SOURCE_BUFFER) SOURCE_BUFFER = readBufferSync(PATH_SOURCE_BUFFER)
  const { getImgMeta, processImg } = configMinPackSharp({ __SHARP_OVERRIDE__: await LOAD_SHARP() })
  info(`[${TEST_TAG}] done prepare (+${time(stepper())})`)

  const imgMeta = await getImgMeta(SOURCE_BUFFER)
  info(`[${TEST_TAG}] done getImgMeta: ${imgMeta.format} ${JSON.stringify(imgMeta.autoOrient)} (+${time(stepper())})`)

  const logOut = (msg = '', { mainBuf, thumbBuf }) => info(`[${TEST_TAG.padStart(10)}|${msg}] done: ${binary(SOURCE_BUFFER.byteLength).padStart(8)}B -> main: ${(mainBuf ? binary(mainBuf.byteLength) : '-').padStart(8)}B, thumb: ${(thumbBuf ? binary(thumbBuf.byteLength) : '-').padStart(8)}B (+${time(stepper())})`)
  logOut('main+thumb', await processImg(SOURCE_BUFFER, { imgMeta }))
  logOut('----+thumb', await processImg(SOURCE_BUFFER, { imgMeta, skipMain: true }))
  logOut('main+-----', await processImg(SOURCE_BUFFER, { imgMeta, skipThumb: true }))
  logOut('----+-----', await processImg(SOURCE_BUFFER, { imgMeta, skipMain: true, skipThumb: true }))
}

describe('Battery|sharp', () => {
  it('png', async () => testSharpAsync({ TEST_TAG: 'sharp-png', PATH_SOURCE_BUFFER: PATH_TEST_BUFFER_PNG, LOAD_SHARP: loadSharpDefault }))
  it('jpg', async () => testSharpAsync({ TEST_TAG: 'sharp-jpg', PATH_SOURCE_BUFFER: PATH_TEST_BUFFER_JPG, LOAD_SHARP: loadSharpDefault }))
  it('webp', async () => testSharpAsync({ TEST_TAG: 'sharp-webp', PATH_SOURCE_BUFFER: PATH_TEST_BUFFER_WEBP, LOAD_SHARP: loadSharpDefault }))
  it('gif', async () => testSharpAsync({ TEST_TAG: 'sharp-gif', PATH_SOURCE_BUFFER: PATH_TEST_BUFFER_GIF, LOAD_SHARP: loadSharpDefault }))
  it('svg', async () => testSharpAsync({ TEST_TAG: 'sharp-svg', PATH_SOURCE_BUFFER: PATH_TEST_BUFFER_SVG, LOAD_SHARP: loadSharpDefault }))
  // it('non-img', () => testSharpAsync({ TEST_TAG: 'sharp-non-img', PATH_SOURCE_BUFFER: PATH_TEST_BUFFER_NON_IMAGE, LOAD_SHARP: loadSharpDefault }))
  it('non-img', () => doThrowAsync(async () => testSharpAsync({ TEST_TAG: 'sharp-non-img', PATH_SOURCE_BUFFER: PATH_TEST_BUFFER_NON_IMAGE, LOAD_SHARP: loadSharpDefault })))
})

process.arch === 'x64' && describe('Battery|sharp(x86-64-v1)', () => {
  it('png', async () => testSharpAsync({ TEST_TAG: 'sharp-png', PATH_SOURCE_BUFFER: PATH_TEST_BUFFER_PNG, LOAD_SHARP: loadSharpFallback }))
  it('jpg', async () => testSharpAsync({ TEST_TAG: 'sharp-jpg', PATH_SOURCE_BUFFER: PATH_TEST_BUFFER_JPG, LOAD_SHARP: loadSharpFallback }))
  it('webp', async () => testSharpAsync({ TEST_TAG: 'sharp-webp', PATH_SOURCE_BUFFER: PATH_TEST_BUFFER_WEBP, LOAD_SHARP: loadSharpFallback }))
  it('gif', async () => testSharpAsync({ TEST_TAG: 'sharp-gif', PATH_SOURCE_BUFFER: PATH_TEST_BUFFER_GIF, LOAD_SHARP: loadSharpFallback }))
  it('svg', async () => testSharpAsync({ TEST_TAG: 'sharp-svg', PATH_SOURCE_BUFFER: PATH_TEST_BUFFER_SVG, LOAD_SHARP: loadSharpFallback }))
  // it('non-img', () => testSharpAsync({ TEST_TAG: 'sharp-non-img', PATH_SOURCE_BUFFER: PATH_TEST_BUFFER_NON_IMAGE, LOAD_SHARP: loadSharpFallback }))
  it('non-img', () => doThrowAsync(async () => testSharpAsync({ TEST_TAG: 'sharp-non-img', PATH_SOURCE_BUFFER: PATH_TEST_BUFFER_NON_IMAGE, LOAD_SHARP: loadSharpFallback })))
})
