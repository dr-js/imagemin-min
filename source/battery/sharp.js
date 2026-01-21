// [REFERENCE]
// - https://sharp.pixelplumbing.com/
// - https://github.com/lovell/sharp
// - https://github.com/dr-js/min-pack/blob/master/min-pack-sharp

let _Sharp
const loadSharp = async () => {
  if (_Sharp) return _Sharp
  try {
    return (_Sharp = await loadSharpDefault())
  } catch (error) { console.warn(`failed to load default Sharp, try fallback. error: ${error}`) }
  try {
    return (_Sharp = await loadSharpFallback())
  } catch (error) { console.warn(`failed to load fallback Sharp. error: ${error}`) }
  throw new Error('failed to load Sharp')
}
const loadSharpDefault = async () => {
  try {
    return (await import('@min-pack/sharp')).default // v0.34, support x86-64-v2 and aarch64/arm64
  } catch (error) { throw new Error(`failed to load '@min-pack/sharp'. error: ${error}`) }
}
const loadSharpFallback = async () => {
  try {
    return (await import('@min-pack/sharp-x86-64-v1')).default // v0.33, only for x86-64-v1 support
  } catch (error) { throw new Error(`failed to load '@min-pack/sharp-x86-64-v1'. error: ${error}`) }
}

const SHARP_OPT = {
  limitInputPixels: 30000 * 30000 // default for v0.34 is 16383 * 16383
}

const configMinPackSharp = ({
  maxThumbW: _maxTW = 160, maxThumbH: _maxTH = 160,
  __SHARP_OVERRIDE__
} = {}) => {
  const _sharp = async () => (__SHARP_OVERRIDE__ || await loadSharp())

  const getImgMeta = async (imgBuf) => (await _sharp())(imgBuf, SHARP_OPT).metadata() // { format, pages, loop, hasAlpha, autoOrient: { width, height } } // format: png | jpeg | webp | gif | svg

  const processImg = async (imgBuf, {
    imgMeta, // = await getImgMeta(imgBuf),
    skipMain = false, skipThumb = false,
    maxThumbW = _maxTW, maxThumbH = _maxTH
  } = {}) => {
    const {
      format,
      width: _w, height: _h, autoOrient: { width, height } = { width: _w, height: _h } // TODO: patch `autoOrient` is added in sharp@0.34
    } = imgMeta || await getImgMeta(imgBuf)
    if (!_allowedFmt.has(format)) throw new Error(`[imagemin-min|sharp] bad format: ${format}`)

    const isAnimated = format === 'gif'
    const pplMain = skipMain ? undefined
      : (await _sharp())(imgBuf, { autoOrient: true, animated: isAnimated, ...SHARP_OPT }) // https://sharp.pixelplumbing.com/api-constructor#parameters
    const pplThumb = skipThumb ? undefined
      : pplMain && !isAnimated ? pplMain.clone()
        : (await _sharp())(imgBuf, { autoOrient: true, ...SHARP_OPT })
    const [ main, thumb ] = await Promise.all([
      skipMain ? undefined : format !== 'svg' ? await _toFormat(pplMain) : { data: imgBuf, info: { format, width, height } },
      skipThumb ? undefined : await _toPngThumb(pplThumb, maxThumbW, maxThumbH)
    ])
    return {
      mainBuf: main?.data, // Buffer
      mainInfo: main?.info, // { format, width, height }
      thumbBuf: thumb?.data, // Buffer
      thumbInfo: thumb?.info, // { format, width, height }
      imgBuf, imgMeta
    }
  }

  return {
    getImgMeta, processImg,
    run: async (buffer, imgMeta) => (await processImg(buffer, { imgMeta, skipThumb: true })).mainBuf
  }
}

const _allowedFmt = new Set([ 'png', 'jpeg', 'webp', 'gif', 'svg' ])

const _toFormat = (pipeline) => pipeline
  .png({ force: false, palette: true }) // comparable to `pngquant`
  .jpeg({ force: false, mozjpeg: true, quality: 75 }) // comparable to `cjpeg`
  .webp({ force: false, nearLossless: true, effort: 4 }) // comparable to 'cwebp' // sharp-0.34.5 286.41KiB (610ms) vs cwebp-1.2.1 287.26KiB (402ms)
  .gif({ force: false, reuse: true, dither: 0, effort: 6 }) // TODO: NOT-comparable to 'gifsicle' // sharp-0.34.5 3.69MiB (1125ms) vs gifsicle-1.92 2.32MiB (420ms)
  .toBuffer({ resolveWithObject: true })

const _toPngThumb = (pipeline, maxThumbW, maxThumbH) => pipeline
  .resize(maxThumbW, maxThumbH, { fit: 'inside', withoutEnlargement: true })
  .png({ force: true, palette: true }) // comparable to `pngquant`
  .toBuffer({ resolveWithObject: true })

export {
  loadSharp, loadSharpDefault, loadSharpFallback,
  configMinPackSharp
}
