import { optimize } from './svgo-dist-browser.js'

// [REFERENCE]
// - https://github.com/svg/svgo/tree/v2.3.1#api-usage
// - https://github.com/imagemin/imagemin-svgo/blob/v9.0.0/index.js

const OPTION_DEFAULT = { // same default as `imagemin-svgo`
  isCommonPatch: true,
  floatPrecision: 2, // customize plugin option for `cleanupNumericValues`
  plugins: [
    'preset-default',
    'removeScriptElement' // enable builtin plugin not included in default preset
  ]
}

const configBufferProcessorAsync = async (option = OPTION_DEFAULT) => async (buffer, string = String(buffer)) => {
  let resultString = optimize(string, option).data
  if (option.isCommonPatch) {
    // NOTE: PATCH: fix the most common syntax issue
    //   - [20230117] Chrome will not render SVG with bad data url inside a <img> tag (direct open is fine)
    //     https://stackoverflow.com/questions/10737166/chrome-not-rendering-svg-referenced-via-img-element/52226069#52226069
    //     https://css-tricks.com/forums/topic/svg-css-background-image-not-showing-in-chrome/#post-244623
    resultString = resultString.replaceAll('xlink:href="data:img/png;base64,iVB', 'xlink:href="data:image/png;base64,iVB')
  }
  return Buffer.from(resultString)
}

export {
  OPTION_DEFAULT,
  configBufferProcessorAsync
}
