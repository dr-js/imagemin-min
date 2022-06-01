import { optimize } from './svgo-dist-browser.js'

// [REFERENCE]
// - https://github.com/svg/svgo/tree/v2.3.1#api-usage
// - https://github.com/imagemin/imagemin-svgo/blob/v9.0.0/index.js

const OPTION_DEFAULT = { // same default as `imagemin-svgo`
  floatPrecision: 2, // customize plugin option for `cleanupNumericValues`
  plugins: [
    'preset-default',
    'removeScriptElement' // enable builtin plugin not included in default preset
  ]
}

const configBufferProcessorAsync = async (option = OPTION_DEFAULT) => async (buffer, string = String(buffer)) => {
  const { data } = optimize(string, option)
  return Buffer.from(data)
}

export {
  OPTION_DEFAULT,
  configBufferProcessorAsync
}
