import { configBufferProcessorAsync as configBufferProcessorAsyncCjpeg } from './battery/cjpeg'
import { configBufferProcessorAsync as configBufferProcessorAsyncGifsicle } from './battery/gifsicle'
import { configBufferProcessorAsync as configBufferProcessorAsyncPngquant } from './battery/pngquant'
import { configBufferProcessorAsync as configBufferProcessorAsyncSvgo } from './battery/svgo'
import { fileTypeFromBuffer, isSvg } from './function'

const configBufferProcessorAsync = async ({
  onDetectFail = async (ext, buffer, string) => { throw new Error(`unknown buffer type, detected ext: ${ext}, buffer size: ${buffer.length}B`) },

  configCjpeg,
  configGifsicle,
  configPngquant,
  configSvgo
} = {}) => {
  const bufferProcessorAsyncCjpeg = await configBufferProcessorAsyncCjpeg(configCjpeg)
  const bufferProcessorAsyncGifsicle = await configBufferProcessorAsyncGifsicle(configGifsicle)
  const bufferProcessorAsyncPngquant = await configBufferProcessorAsyncPngquant(configPngquant)
  const bufferProcessorAsyncSvgo = await configBufferProcessorAsyncSvgo(configSvgo)

  return async (buffer) => {
    const { ext } = (await fileTypeFromBuffer(buffer)) || {}
    switch (ext) {
      case 'jpg':
        return bufferProcessorAsyncCjpeg(buffer)
      case 'gif':
        return bufferProcessorAsyncGifsicle(buffer)
      case 'png':
        return bufferProcessorAsyncPngquant(buffer)
    }

    const string = String(buffer)
    if (isSvg(string)) return bufferProcessorAsyncSvgo(buffer, string)

    return onDetectFail(ext, buffer, string)
  }
}

export {
  configBufferProcessorAsyncCjpeg,
  configBufferProcessorAsyncGifsicle,
  configBufferProcessorAsyncPngquant,
  configBufferProcessorAsyncSvgo,

  configBufferProcessorAsync,

  fileTypeFromBuffer,
  isSvg
}
