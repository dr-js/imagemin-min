#!/usr/bin/env node

const { join } = require('path')
const { unlinkSync, existsSync } = require('fs')
const BatteryCjpeg = require('../library/battery/cjpeg.js')
const BatteryGifsicle = require('../library/battery/gifsicle.js')
const BatteryPngquant = require('../library/battery/pngquant.js')

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

trimExecutable(BatteryCjpeg.SELECT_MAP, BatteryCjpeg.SELECT_PATH_ROOT)
trimExecutable(BatteryGifsicle.SELECT_MAP, BatteryGifsicle.SELECT_PATH_ROOT)
trimExecutable(BatteryPngquant.SELECT_MAP, BatteryPngquant.SELECT_PATH_ROOT)
console.log('[trim-battery] done')
