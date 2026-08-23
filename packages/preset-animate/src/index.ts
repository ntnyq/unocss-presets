import { definePreset } from '@unocss/core'
import { resolveOptions } from './options'
import { createPreflights } from './preflight'
import { createAnimationRules, createBaseRules } from './rules'
import type { PresetAnimateOptions } from './types'

export const presetAnimate = definePreset<PresetAnimateOptions>(
  (options = {}) => {
    const resolvedOptions = resolveOptions(options)

    return {
      name: 'unocss-preset-animate',

      rules: [
        ...createBaseRules(resolvedOptions),
        ...createAnimationRules(resolvedOptions),
      ],

      preflights: resolvedOptions.preflight
        ? createPreflights(resolvedOptions)
        : [],
    }
  },
)

export * from './types'
export * from './animations'
export * from './options'

export default presetAnimate
