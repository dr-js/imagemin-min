const BABEL_ENV = process.env.BABEL_ENV || ''
const isDev = BABEL_ENV.includes('dev')

module.exports = {
  presets: [
    [ '@babel/env', { targets: { node: '10' }, modules: 'commonjs' } ]
  ],
  plugins: [
    [ 'minify-replace', { replacements: [ { identifierName: '__DEV__', replacement: { type: 'booleanLiteral', value: isDev } } ] } ],
    [ 'module-resolver', { root: [ './' ], alias: { '^@dr-js/([\\w-]+)/module/(.+)': '@dr-js/\\1/library/\\2' } } ]
  ],
  comments: false
}
