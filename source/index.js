import { configMinPackSharp } from './battery/sharp.js'
import { configGifsicleProcessor } from './battery/gifsicle.js'
import { configSvgoProcessor } from './battery/svgo.js'

const configImageProcessor = ({
  configGifsicle,
  configSvgo
} = {}) => {
  const mpSharp = configMinPackSharp()
  const pGifsicle = configGifsicleProcessor(configGifsicle)
  const pSvgo = configSvgoProcessor(configSvgo)

  const run = async (buffer) => {
    const imgMeta = await mpSharp.getImgMeta(buffer)
    switch (imgMeta.format) {
      case 'png':
      case 'jpeg':
      case 'webp':
        return (await mpSharp.processImg(buffer, { imgMeta, skipThumb: true })).mainBuf
      case 'gif':
        return pGifsicle.check() ? pGifsicle.run(buffer) : (await mpSharp.processImg(buffer, { imgMeta, skipThumb: true })).mainBuf
      case 'svg':
        return pSvgo.run(buffer)
    }
    throw new Error(`unsupported image format, detected: ${imgMeta.format}, buffer size: ${buffer.length}B`)
  }

  return { run }
}

export {
  configGifsicleProcessor,
  configSvgoProcessor,

  configImageProcessor
}
