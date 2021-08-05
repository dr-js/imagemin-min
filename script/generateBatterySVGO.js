import { resolve } from 'path'
import { writeFileSync, readFileSync } from 'fs'
import { dependencies } from '../package-lock.json'

const PATH_ROOT = resolve(__dirname, '..')
const fromRoot = (...args) => resolve(PATH_ROOT, ...args)

const { version: VERSION_SVGO } = dependencies[ 'svgo' ]
writeFileSync(fromRoot('./source/battery/svgo-dist-browser.js'), [
  '/* eslint-disable */',
  `/* svgo@${VERSION_SVGO} */`,
  String(readFileSync(fromRoot('./node_modules/svgo/dist/svgo.browser.js')))
].join('\n'))
