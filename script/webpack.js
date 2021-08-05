import { compileWithWebpack, commonFlag } from '@dr-js/dev/module/webpack.js'
import { runMain, commonCombo } from '@dr-js/dev/module/main.js'

runMain(async (logger) => {
  const { fromRoot, fromOutput } = commonCombo(logger)
  const { mode, isWatch, profileOutput, getCommonWebpackConfig } = await commonFlag({ fromRoot, logger })

  const config = getCommonWebpackConfig({
    isNodeEnv: true,
    output: { path: fromOutput('library'), filename: '[name].js', libraryTarget: 'umd' },
    entry: { 'function': 'source/function' }
  })

  logger.padLog(`compile with webpack mode: ${mode}, isWatch: ${Boolean(isWatch)}`)
  await compileWithWebpack({ config, isWatch, profileOutput, logger })
}, 'webpack')
