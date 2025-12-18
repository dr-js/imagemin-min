#!/usr/bin/env node

const { join } = require('node:path')
const { unlinkSync, existsSync } = require('node:fs')
const BatteryGifsicle = require('../library/battery/gifsicle.js') // NOTE: compiled output

const platformArchTagCurrent = `${process.platform}|${process.arch}`
const trimExecutable = (selectMap = {}, relativeToPath = '.') => {
  for (const [ platformArchTag, executablePath ] of Object.entries(selectMap)) {
    if (platformArchTagCurrent.startsWith(platformArchTag)) continue
    const path = join(relativeToPath, executablePath)
    if (existsSync(path)) {
      console.log('- trim:', path)
      unlinkSync(path)
    } else console.log('- already trimmed:', path)
  }
}

trimExecutable(BatteryGifsicle.SELECT_MAP, BatteryGifsicle.SELECT_PATH_ROOT)
console.log('[trim-battery] done')
