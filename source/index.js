import { configMinPackSharp } from './battery/sharp.js'
import { configBufferProcessorAsync as configBufferProcessorAsyncGifsicle } from './battery/gifsicle.js'
import { configBufferProcessorAsync as configBufferProcessorAsyncSvgo } from './battery/svgo.js'

const configBufferProcessorAsync = async ({
  onDetectFail = async (ext, buffer, string) => { throw new Error(`unknown buffer type, detected ext: ${ext}, buffer size: ${buffer.length}B`) },

  configGifsicle,
  configSvgo
} = {}) => {
  const { getImgMeta, processImg } = configMinPackSharp()
  const bufferProcessorAsyncGifsicle = await configBufferProcessorAsyncGifsicle(configGifsicle)
  const bufferProcessorAsyncSvgo = await configBufferProcessorAsyncSvgo(configSvgo)

  return async (buffer) => {
    const imgMeta = await getImgMeta(buffer)
    switch (imgMeta.format) {
      case 'png':
      case 'jpeg':
      case 'webp':
        return (await processImg(buffer, { imgMeta, skipThumb: true })).mainBuf
      case 'gif':
        return bufferProcessorAsyncGifsicle(buffer)
      case 'svg':
        return bufferProcessorAsyncSvgo(buffer)
    }

    return onDetectFail(imgMeta.format, buffer, String(buffer))
  }
}

export {
  configBufferProcessorAsyncGifsicle,
  configBufferProcessorAsyncSvgo,

  configBufferProcessorAsync
}
