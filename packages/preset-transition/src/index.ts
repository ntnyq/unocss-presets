import { definePreset } from '@unocss/core'
import { resolveOptions } from './options'
import { createPreflights } from './preflight'
import { createBaseRules, createTransitionRules } from './rules'
import type { PresetTransitionOptions } from './types'

export const presetTransition = definePreset<PresetTransitionOptions>(
  (options = {}) => {
    const resolvedOptions = resolveOptions(options)

    return {
      name: 'unocss-preset-transition',

      rules: [
        ...createBaseRules(resolvedOptions),
        ...createTransitionRules(resolvedOptions),
      ],

      preflights: createPreflights(resolvedOptions),
    }
  },
)

export * from './rules'
export * from './types'
export * from './utils'
export * from './options'
export * from './transitions'

export default presetTransition
