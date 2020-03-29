import { SVGO_LITE, PLUGINS_DEFAULT_LIST } from './svgo-libsvgo-webpack-SVGO'

// [REFERENCE]
// - https://github.com/svg/svgo
// - https://github.com/dr-js/libsvgo
// - https://github.com/imagemin/imagemin-svgo/blob/master/index.js

const OPTION_DEFAULT = { // same default as `imagemin-svgo`
  plugins: PLUGINS_DEFAULT_LIST,
  multipass: true
}

const configBufferProcessorAsync = async (option = OPTION_DEFAULT) => async (buffer, string = String(buffer)) => {
  const { data } = await (
    new SVGO_LITE(option)
      .optimize(string)
  )
  return Buffer.from(data)
}

export {
  SVGO_LITE,
  PLUGINS_DEFAULT_LIST,

  configBufferProcessorAsync
}
