import { createPreflights } from './preflight'
import { createAnimationRules, createBaseRules } from './rules'
import type { PresetAnimateOptions } from './types'
import type { Preset } from '@unocss/core'

export const presetAnimate = (options: PresetAnimateOptions = {}): Preset => {
  options.preflight = options.preflight ?? true
  options.injectMediaQuery = options.injectMediaQuery ?? true
  options.variablePrefix = options.variablePrefix ?? 'un-animate-'

  return {
    name: 'unocss-preset-animate',

    rules: [...createBaseRules(options), ...createAnimationRules(options)],

    prefix: options.prefix,

    preflights: options.preflight ? createPreflights(options) : [],

    postprocess(util) {
      util.entries.forEach(([, val]) => {
        if (typeof val === 'string') {
          //
        }
      })
    },
  }
}

export default presetAnimate
