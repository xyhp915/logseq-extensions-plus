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
]

function main (baseInfo: LSPluginBaseInfo) {
  const { settings } = baseInfo

  if (settings.katexPhysics) {
    logseq.Experiments.registerExtensionsEnhancer('katex', async () => {
      await logseq.Experiments.loadScripts(
        './vendors/katex.physics.js',
      )
    })
  }

  logseq.Experiments.registerExtensionsEnhancer('codemirror', async () => {
    await logseq.Experiments.loadScripts(
      './vendors/codemirror.solidity.js'
    )
  })
}

// entry
logseq.useSettingsSchema(settingsSchema).ready(main).catch(console.error)
