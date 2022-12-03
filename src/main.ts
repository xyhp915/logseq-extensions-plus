import '@logseq/libs'
import { LSPluginBaseInfo, SettingSchemaDesc } from '@logseq/libs/dist/LSPlugin'

const Supports = {
  katexPhysics: 'katexPhysics',
}

const settingsSchema: Array<SettingSchemaDesc> = [
  {
    key: 'katexPhysics',
    type: 'boolean',
    title: 'Support katex physics extension?',
    description: 'KaTeX-physics from https://github.com/balthild/katex-physics.',
    default: true,
  },
  {
    key: 'cmSyntaxHighlights',
    type: 'enum',
    title: 'Supported syntax highlighting for code mirror editor',
    description: `Should restart app if any options changed.`,
    default: ['solidity', 'elixir'],
    enumChoices: ['solidity', 'elixir'],
    enumPicker: 'checkbox',
  },
]

function main (baseInfo: LSPluginBaseInfo) {
  const { settings } = baseInfo

  logseq.Experiments.registerExtensionsEnhancer('katex', async () => {
    if (settings.katexPhysics) {
      await logseq.Experiments.loadScripts(
        './vendors/katex.physics.js',
      )
    }
  })

  logseq.Experiments.registerExtensionsEnhancer('codemirror', async () => {
    if (settings.cmSyntaxHighlights?.includes('solidity')) {
      await logseq.Experiments.loadScripts(
        './vendors/codemirror.solidity.js',
      )
    }

    if (settings.cmSyntaxHighlights?.includes('elixir')) {
      await logseq.Experiments.loadScripts(
        './vendors/codemirror.elixir.js',
      )
    }
  })
}

// entry
logseq.useSettingsSchema(settingsSchema).ready(main).catch(console.error)
