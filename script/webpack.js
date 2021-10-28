import { runKit } from '@dr-js/core/module/node/kit.js'
import { compileWithWebpack, commonFlag } from '@dr-js/dev/module/webpack.js'

runKit(async (kit) => {
  const { mode, isWatch, profileOutput, getCommonWebpackConfig } = await commonFlag({ kit })

  const config = getCommonWebpackConfig({
    isNodeEnv: true,
    output: { path: kit.fromOutput('library'), filename: '[name].js', libraryTarget: 'umd' },
    entry: { 'function': 'source/function' }
  })

  kit.padLog(`compile with webpack mode: ${mode}, isWatch: ${Boolean(isWatch)}`)
  await compileWithWebpack({ config, isWatch, profileOutput, kit })
}, 'webpack')
