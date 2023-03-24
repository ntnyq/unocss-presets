import { createPreflights } from './preflight'
import { createAnimationRules, createBaseRules } from './rules'
import type { PresetAnimateOptions } from './types'
import type { Preset } from '@unocss/core'

export const presetAnimate = (options: PresetAnimateOptions = {}): Preset => {
  options.preflight = options.preflight ?? true
  options.injectMediaQuery = options.injectMediaQuery ?? true
  options.variablePrefix = options.variablePrefix ?? 'un-animate-'
  options.extendAnimations = options.extendAnimations ?? []

  return {
    name: 'unocss-preset-animate',

    rules: [...createBaseRules(options), ...createAnimationRules(options)],

    preflights: options.preflight ? createPreflights(options) : [],
  }
}

export * from './types'

export default presetAnimate
