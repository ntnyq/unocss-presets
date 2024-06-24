import { resolveOptions } from './options'
import { createFilterRules } from './rules'
import { createPreflights } from './preflight'
import type { Preset } from '@unocss/core'
import type { PresetFilterOptions } from './types'

export const presetFilter = (options: Partial<PresetFilterOptions> = {}): Preset => {
  const resolvedOptions = resolveOptions(options)
  return {
    name: 'unocss-preset-filter',
    rules: [...createFilterRules(resolvedOptions)],
    preflights: createPreflights(resolvedOptions),
  }
}

export * from './types'
export * from './options'
export * from './filters'

export default presetFilter
