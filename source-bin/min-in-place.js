#!/usr/bin/env node

const { readFileSync, writeFileSync } = require('node:fs')
const { configBufferProcessorAsync } = require('../library/index.js') // NOTE: compiled output
const { name: packageName, version: packageVersion } = require('../package.json')

const [
  , // node
  , // script.js
  ...fileList
] = process.argv

!fileList.length && console.log(`[min-in-place|${packageName}@${packageVersion}] process each image file in-place
USAGE:
  imagemin-min-in-place file.png file.svg file.webp ...
  imagemin-min file.png file.svg file.webp ...
`)

fileList.length && configBufferProcessorAsync()
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
