import { runKit } from '@dr-js/core/module/node/kit.js'
import { editText } from '@dr-js/core/module/node/fs/File.js'

import { dependencies } from '../package-lock.json'

runKit(async (kit) => {
  const { version: VERSION_SVGO } = dependencies[ 'svgo' ]
  await editText(
    (string) => [ '/* eslint-disable */', `/* svgo@${VERSION_SVGO} */`, string ].join('\n'),
    kit.fromRoot('./node_modules/svgo/dist/svgo.browser.js'),
    kit.fromRoot('./source/battery/svgo-dist-browser.js')
  )
}, 'generate-battery-svgo')
