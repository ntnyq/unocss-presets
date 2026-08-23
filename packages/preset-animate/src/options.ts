import type { PresetAnimateOptions, ResolvedOptions } from './types'

export const DEFAULT_OPTIONS: ResolvedOptions = {
  extendAnimations: [],
  injectMediaQuery: true,
  preflight: true,
  variablePrefix: 'un-animate-',
}

export function resolveOptions(
  options: PresetAnimateOptions = {},
): ResolvedOptions {
  return {
    extendAnimations:
      options.extendAnimations ?? DEFAULT_OPTIONS.extendAnimations,
    injectMediaQuery:
      options.injectMediaQuery ?? DEFAULT_OPTIONS.injectMediaQuery,
    preflight: options.preflight ?? DEFAULT_OPTIONS.preflight,
    variablePrefix: options.variablePrefix ?? DEFAULT_OPTIONS.variablePrefix,
  }
}
