import { createBufferProcessorAsync } from '../function'

// [REFERENCE]
// - https://github.com/kornelski/pngquant
// - https://github.com/imagemin/pngquant-bin/tree/master/vendor
// - https://github.com/imagemin/imagemin-pngquant/blob/master/index.js

const SELECT_MAP = {
  'linux|x64': 'pngquant-linux-x64-2.10.1',
  'win32|x64': 'pngquant-win32-x64-2.12.0.exe',
  'darwin|x64': 'pngquant-darwin-x64-2.12.5'
}
const SELECT_PATH_ROOT = __dirname

const TEST_ARG_LIST = [ '--help' ]
const TEST_EXPECT_OUTPUT = 'pngquant, 2.' // pngquant, 2.#.# (MM YYYY), by Kornel Lesinski, Greg Roelofs.

const DEFAULT_ARG_LIST = [ '-', '--strip' ]

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
