import { resolveOptions } from './options'
import { createPreflights } from './preflight'
import { createBaseRules, createTransitionRules } from './rules'
import type { Preset } from '@unocss/core'
import type { PresetTransitionOptions } from './types'

export const presetTransition = (options: PresetTransitionOptions = {}): Preset => {
  const resolvedOptions = resolveOptions(options)

  return {
    name: 'unocss-preset-transition',

    rules: [...createBaseRules(resolvedOptions), ...createTransitionRules(resolvedOptions)],

    preflights: createPreflights(resolvedOptions),
  }
}

export * from './utils'
export * from './types'
export * from './rules'
export * from './options'
export * from './transitions'

export default presetTransition
