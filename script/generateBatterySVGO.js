import { editText } from '@dr-js/core/module/node/fs/File.js'
import { runMain, commonCombo } from '@dr-js/dev/module/main.js'

import { dependencies } from '../package-lock.json'

runMain(async (logger) => {
  const { fromRoot } = commonCombo(logger)

  const { version: VERSION_SVGO } = dependencies[ 'svgo' ]
  await editText(
    (string) => [ '/* eslint-disable */', `/* svgo@${VERSION_SVGO} */`, string ].join('\n'),
    fromRoot('./node_modules/svgo/dist/svgo.browser.js'),
    fromRoot('./source/battery/svgo-dist-browser.js')
  )
}, 'generate-battery-svgo')
