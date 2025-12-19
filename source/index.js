import { configMinPackSharp } from './battery/sharp.js'
import { configGifsicleProcessor } from './battery/gifsicle.js'
import { configSvgoProcessor } from './battery/svgo.js'

const configImageProcessor = ({
  configSharp,
  configGifsicle,
  configSvgo
} = {}) => {
  const pSharp = configMinPackSharp(configSharp)
  const pGifsicle = configGifsicleProcessor(configGifsicle)
  const pSvgo = configSvgoProcessor(configSvgo)

  const run = async (buffer) => {
    const imgMeta = await pSharp.getImgMeta(buffer)
    switch (imgMeta.format) {
      case 'png':
      case 'jpeg':
      case 'webp':
        return pSharp.run(buffer, imgMeta)
      case 'gif':
        return pGifsicle.check() ? pGifsicle.run(buffer) : pSharp.run(buffer, imgMeta)
      case 'svg':
        return pSvgo.run(buffer)
    }
    throw new Error(`unsupported image format, detected: ${imgMeta.format}, buffer size: ${buffer.byteLength}B`)
  }

  return { run }
}

export {
  configMinPackSharp,
  configGifsicleProcessor,
  configSvgoProcessor,

  configImageProcessor
}
