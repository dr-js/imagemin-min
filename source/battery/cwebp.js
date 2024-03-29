import { createBufferProcessorAsync } from '../function.js'

// [REFERENCE]
// - https://developers.google.com/speed/webp
// - https://developers.google.com/speed/webp/docs/precompiled
// - https://github.com/imagemin/imagemin-webp/blob/main/index.js

const SELECT_MAP = {
  'linux|x64': 'cwebp-linux-x64-1.2.2',
  'linux|arm64': 'cwebp-linux-arm64-1.2.1',
  'win32|x64': 'cwebp-no-wic-win32-x64-1.2.2.exe',
  'darwin|x64': 'cwebp-darwin-x64-1.2.1' // 'cwebp-darwin-x64-1.2.2' will error with: `dyld[35361]: Library not loaded: /opt/local/lib/libjpeg.8.dylib`
}
const SELECT_PATH_ROOT = __dirname

const TEST_ARG_LIST = [ '-version' ]
const TEST_EXPECT_OUTPUT = '1.2.' // 1.2.2 (1.2.1 for darwin)

const DEFAULT_ARG_LIST = [
  '-quiet', // Do not print anything.
  '-mt', // Use multi-threading for encoding, if possible.
  '-near_lossless', '95', // Specify the level of near-lossless image preprocessing. This option adjusts pixel values to help compressibility, but has minimal impact on the visual quality. It triggers lossless compression mode automatically. The range is 0 (maximum preprocessing) to 100 (no preprocessing, the default). The typical value is around 60. Note that lossy with -q 100 can at times yield better results.
  '-o', '-', // Specify the name of the output WebP file. If omitted, cwebp will perform compression but only report statistics. Using "-" as output name will direct output to 'stdout'.
  '--', '-' // Read from stdin. Note that "-- -" must appear last on cwebp's command line. https://bugs.chromium.org/p/webp/issues/detail?id=191
]

const configBufferProcessorAsync = async (argList = DEFAULT_ARG_LIST) => createBufferProcessorAsync(
  SELECT_MAP, SELECT_PATH_ROOT,
  TEST_ARG_LIST, TEST_EXPECT_OUTPUT,
  argList
)

export {
  SELECT_MAP, SELECT_PATH_ROOT,
  TEST_ARG_LIST, TEST_EXPECT_OUTPUT,
  DEFAULT_ARG_LIST,
  configBufferProcessorAsync
}
