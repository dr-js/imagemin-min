const { runKit } = require('@dr-js/core/library/node/kit.js')
const { writeTextSync } = require('@dr-js/core/library/node/fs/File.js')

const { collectSourceJsRouteMap } = require('@dr-js/dev/library/node/export/parsePreset.js')
const { generateExportInfo } = require('@dr-js/dev/library/node/export/generate.js')
const { renderMarkdownAutoAppendHeaderLink, renderMarkdownExportPath } = require('@dr-js/dev/library/node/export/renderMarkdown.js')

runKit(async (kit) => {
  kit.padLog('generate exportInfoMap')
  const sourceRouteMap = await collectSourceJsRouteMap({ pathRootList: [ kit.fromRoot('source') ], kit })
  const exportInfoMap = generateExportInfo({ sourceRouteMap })

  kit.padLog('output: SPEC.md')
  writeTextSync(kit.fromRoot('SPEC.md'), [
    '# Specification',
    '',
    ...renderMarkdownAutoAppendHeaderLink(
      '#### Export Path',
      ...renderMarkdownExportPath({ exportInfoMap, rootPath: kit.fromRoot() })
    ),
    ''
  ].join('\n'))
}, 'generate-spec')
