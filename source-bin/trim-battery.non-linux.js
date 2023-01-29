#!/usr/bin/env node

const { join } = require('node:path')
const { unlinkSync, existsSync } = require('node:fs')
const BatteryCjpeg = require('../library/battery/cjpeg.js') // NOTE: compiled output
const BatteryGifsicle = require('../library/battery/gifsicle.js') // NOTE: compiled output
const BatteryPngquant = require('../library/battery/pngquant.js') // NOTE: compiled output
const BatteryCwebp = require('../library/battery/cwebp.js') // NOTE: compiled output

const trimExecutable = (selectMap = {}, relativeToPath = '.') => {
  for (const [ platformArchTag, executablePath ] of Object.entries(selectMap)) {
    if (platformArchTag.startsWith('linux')) continue
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
trimExecutable(BatteryCwebp.SELECT_MAP, BatteryCwebp.SELECT_PATH_ROOT)
console.log('[trim-battery|non-linux] done')
