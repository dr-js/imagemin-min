import { configBufferProcessorAsync as configBufferProcessorAsyncGifsicle } from './battery/gifsicle.js'
import { configBufferProcessorAsync as configBufferProcessorAsyncSvgo } from './battery/svgo.js'
import { fileTypeFromBuffer, isSvg } from './function.js'

const configBufferProcessorAsync = async ({
  onDetectFail = async (ext, buffer, string) => { throw new Error(`unknown buffer type, detected ext: ${ext}, buffer size: ${buffer.length}B`) },

  configGifsicle,
  configSvgo,
} = {}) => {
  const bufferProcessorAsyncGifsicle = await configBufferProcessorAsyncGifsicle(configGifsicle)
  const bufferProcessorAsyncSvgo = await configBufferProcessorAsyncSvgo(configSvgo)

  return async (buffer) => {
    const { ext } = (await fileTypeFromBuffer(buffer)) || {}
    switch (ext) {
      case 'jpg':
        return // TODO
      case 'gif':
        return bufferProcessorAsyncGifsicle(buffer)
      case 'png':
        return // TODO
      case 'webp':
        return // TODO
    }

    const string = String(buffer)
    if (isSvg(string)) return bufferProcessorAsyncSvgo(buffer, string)

    return onDetectFail(ext, buffer, string)
  }
}

export {
  configBufferProcessorAsyncGifsicle,
  configBufferProcessorAsyncSvgo,

  configBufferProcessorAsync,

  fileTypeFromBuffer,
  isSvg
}
