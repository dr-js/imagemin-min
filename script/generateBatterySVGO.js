const { runKit } = require('@dr-js/core/library/node/kit.js')
const { editText } = require('@dr-js/core/library/node/fs/File.js')

runKit(async (kit) => {
  const VERSION_SVGO = require(kit.fromRoot('package-lock.json'))[ 'packages' ][ 'node_modules/svgo' ][ 'version' ]
  await editText(
    (string) => [ '/* eslint-disable */', `/* svgo@${VERSION_SVGO} */`, string ].join('\n'),
    kit.fromRoot('./node_modules/svgo/dist/svgo.browser.js'),
    kit.fromRoot('./source/battery/svgo-dist-browser.js')
  )
}, 'generate-battery-svgo')
