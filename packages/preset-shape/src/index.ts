import { definePreset } from '@unocss/core'
import { resolveOptions } from './options'
import { createPreflights } from './preflight'
import { createShapeRules } from './rules'
import type { PresetShapeOptions } from './types'

export const presetShape = definePreset<PresetShapeOptions>((options = {}) => {
  const resolvedOptions = resolveOptions(options)
  return {
    name: 'unocss-preset-shape',
    rules: createShapeRules(resolvedOptions),
    preflights: createPreflights(resolvedOptions),
  }
})

export * from './types'
export * from './options'

export default presetShape
