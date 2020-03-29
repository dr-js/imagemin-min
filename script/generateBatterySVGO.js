import { resolve } from 'path'
import { writeFileSync, readFileSync } from 'fs'
import { dependencies } from '../package-lock.json'

const PATH_ROOT = resolve(__dirname, '..')
const fromRoot = (...args) => resolve(PATH_ROOT, ...args)

const { version: VERSION_LIBSVGO } = dependencies[ 'libsvgo' ]
writeFileSync(fromRoot('./source/battery/svgo-libsvgo-webpack-SVGO.js'), [
  '/* eslint-disable */',
  `/* libsvgo@${VERSION_LIBSVGO} */`,
  String(readFileSync(fromRoot('./node_modules/libsvgo/webpack/SVGO.js')))
].join('\n'))
