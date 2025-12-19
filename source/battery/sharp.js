import { tryRequire } from '@dr-js/core/module/env/tryRequire.js'

// [REFERENCE]
// - https://sharp.pixelplumbing.com/
// - https://github.com/lovell/sharp
// - https://github.com/dr-js/min-pack/blob/master/min-pack-sharp

const configMinPackSharp = ({
  maxThumbW: _maxTW = 160, maxThumbH: _maxTH = 160
} = {}) => {
  const Sharp = tryRequire('@min-pack/sharp') // console.log(Sharp.versions)
  if (!Sharp) throw new Error('[imagemin-min|sharp] expect package "@min-pack/sharp"')

  const getImgMeta = async (imgBuf) => Sharp(imgBuf).metadata() // { format, pages, loop, hasAlpha, autoOrient: { width, height } } // format: png | jpeg | webp | gif | svg

  const processImg = async (imgBuf, {
    imgMeta, // = await getImgMeta(imgBuf),
    skipMain = false, skipThumb = false,
    maxThumbW = _maxTW, maxThumbH = _maxTH
  } = {}) => {
    const { format, autoOrient: { width, height } } = imgMeta || await getImgMeta(imgBuf)
    if (!_allowedFmt.has(format)) throw new Error(`[imagemin-min|sharp] bad format: ${format}`)

    const isAnimated = format === 'gif'
    const pplMain = skipMain ? undefined
      : Sharp(imgBuf, { autoOrient: true, animated: isAnimated }) // https://sharp.pixelplumbing.com/api-constructor#parameters
    const pplThumb = skipThumb ? undefined
      : pplMain && !isAnimated ? pplMain.clone()
        : Sharp(imgBuf, { autoOrient: true })
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
    Sharp, getImgMeta, processImg,
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

export { configMinPackSharp }
