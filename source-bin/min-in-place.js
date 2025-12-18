#!/usr/bin/env node

const { readFileSync, writeFileSync } = require('node:fs')
const { configImageProcessor } = require('../library/index.js') // NOTE: compiled output
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

const run = (asyncFunc, title) => {
  asyncFunc()
    .then(
      () => console.log(title, 'done'),
      (error) => {
        console.error(title, error)
        process.exitCode = 1
      }
    )
}

const minInPlace = async () => {
  const { run } = configImageProcessor()
  console.log(`[min-in-place] min ${fileList.length} file...`)
  for (const file of fileList) {
    const buffer = readFileSync(file)
    console.log(`- ${buffer.length}B - file ${file}`)
    const bufferMin = await run(buffer)
    if (buffer.length <= bufferMin.length) console.log(`  ! ${bufferMin.length}B - skip bloat`)
    else {
      writeFileSync(file, bufferMin)
      console.log(`  - ${bufferMin.length}B`)
    }
  }
}

require.main === module && run(minInPlace, '[min-in-place]')
module.exports = { testBoot: () => run(async () => configImageProcessor(), '[test-boot]') }
