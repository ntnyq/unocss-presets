import type { PresetTransitionOptions, ResolvedOptions } from './types'

export const DEFAULT_OPTIONS: ResolvedOptions = {
  injectMediaQuery: true,
  prefix: 'st-',
  class: 'styled-transition',
}

export function resolveOptions(options: PresetTransitionOptions = {}) {
  const resolvedOptions: ResolvedOptions = {
    ...DEFAULT_OPTIONS,
    ...options,
  }

  return resolvedOptions
}
