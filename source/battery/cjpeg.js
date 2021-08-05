import { createBufferProcessorAsync } from '../function.js'

// [REFERENCE]
// - https://github.com/mozilla/mozjpeg
// - https://github.com/imagemin/mozjpeg-bin/tree/master/vendor
// - https://github.com/imagemin/imagemin-mozjpeg/blob/master/index.js

const SELECT_MAP = {
  'linux|x64': 'cjpeg-linux-x64-3.3.1',
  'win32': 'cjpeg-win32-x86-3.1.exe',
  'darwin|x64': 'cjpeg-darwin-x64-3.3.1'
}
const SELECT_PATH_ROOT = __dirname

const TEST_ARG_LIST = [ '-version' ]
const TEST_EXPECT_OUTPUT = 'mozjpeg version 3.' // mozjpeg version 3.# (build YYYYMMDD)

const DEFAULT_ARG_LIST = []

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
