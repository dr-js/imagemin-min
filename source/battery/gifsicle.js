import { createBufferProcessorAsync } from '../function.js'

// [REFERENCE]
// - https://github.com/kohler/gifsicle
// - https://github.com/imagemin/gifsicle-bin/tree/master/vendor
// - https://github.com/imagemin/imagemin-gifsicle/blob/master/index.js

const SELECT_MAP = {
  'linux|x64': 'gifsicle-linux-x64-1.92',
  'linux|arm64': 'gifsicle-linux-arm64-1.93',
  'win32|x64': 'gifsicle-win32-x64-1.92.exe',
  'darwin|x64': 'gifsicle-darwin-x64-1.92'
}
const SELECT_PATH_ROOT = __dirname

const TEST_ARG_LIST = [ '--version' ]
const TEST_EXPECT_OUTPUT = 'LCDF Gifsicle 1.' // LCDF Gifsicle 1.92

const DEFAULT_ARG_LIST = [
  // '--optimize=1', //                               size bloat          |  ~0.32s, 3.9MB -> 4.2MB
  // '--optimize=2', //                               same                |  ~0.49s, 3.9MB -> 3.7MB
  '--optimize=1', '--lossy', //                       same-ish            |  ~0.62s, 3.9MB -> 2.4MB
  // '--optimize=2', '--lossy', //                    same-ish            |  ~1.29s, 3.9MB -> 2.3MB
  // '--optimize=1', '--lossy', '--colors', '192', // minimal detail loss |  ~0.70s, 3.9MB -> 2.3MB
  // '--optimize=2', '--lossy', '--colors', '192', // minimal detail loss |  ~1.39s, 3.9MB -> 2.2MB
  // '--optimize=3', '--lossy', '--colors', '192', // minimal detail loss |  ~4.24s, 3.9MB -> 2.1MB
  // '--optimize=1', '--lossy', '--colors', '128', // small detail loss   |  ~0.76s, 3.9MB -> 2.0MB
  // '--optimize=2', '--lossy', '--colors', '128', // small detail loss   |  ~1.45s, 3.9MB -> 2.0MB
  // '--optimize=3', '--lossy', '--colors', '128', // small detail loss   |  ~3.99s, 3.9MB -> 1.9MB

  '--no-warnings', '--no-app-extensions'
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
