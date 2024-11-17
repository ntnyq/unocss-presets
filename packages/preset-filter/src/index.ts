import { definePreset } from '@unocss/core'
import { resolveOptions } from './options'
import { createPreflights } from './preflight'
import { createFilterRules } from './rules'
import type { PresetFilterOptions } from './types'

export const presetFilter = definePreset<PresetFilterOptions>((options = {}) => {
  const resolvedOptions = resolveOptions(options)
  return {
    name: 'unocss-preset-filter',
    rules: [...createFilterRules(resolvedOptions)],
    preflights: createPreflights(resolvedOptions),
  }
})

export * from './types'
export * from './options'
export * from './filters'

export default presetFilter
