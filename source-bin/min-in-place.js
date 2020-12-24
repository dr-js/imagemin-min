#!/usr/bin/env node

const { readFileSync, writeFileSync } = require('fs')
const { configBufferProcessorAsync } = require('../library/index.js')

const [
  , // node
  , // script.js
  ...fileList
] = process.argv

configBufferProcessorAsync()
  .then(async (bufferProcessorAsync) => {
    console.log(`[min-in-place] min ${fileList.length} file...`)
    for (const file of fileList) {
      const buffer = readFileSync(file)
      console.log(`- ${buffer.length}B - file ${file}`)
      const bufferMin = await bufferProcessorAsync(buffer)
      if (buffer.length <= bufferMin.length) console.log(`  ! ${bufferMin.length}B - skip bloat`)
      else {
        writeFileSync(file, bufferMin)
        console.log(`  - ${bufferMin.length}B`)
      }
    }
  })
  .catch((error) => {
    console.error('[min-in-place]', error)
    process.exitCode = 1
  })
