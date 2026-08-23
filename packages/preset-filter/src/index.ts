import { definePreset } from '@unocss/core'
import { resolveOptions } from './options'
import { createFilterRules } from './rules'
import type { PresetFilterOptions } from './types'

export const presetFilter = definePreset<PresetFilterOptions>(
  (options = {}) => {
    const resolvedOptions = resolveOptions(options)
    return {
      name: 'unocss-preset-filter',
      rules: [...createFilterRules(resolvedOptions)],
    }
  },
)

export * from './types'
export * from './filters'
export * from './options'

export default presetFilter
