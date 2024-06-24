import type { PresetFilterOptions } from './types'

export const DEFAULT_OPTIONS: PresetFilterOptions = {
  prefix: 'filter-',
}

export function resolveOptions(options: Partial<PresetFilterOptions> = {}): PresetFilterOptions {
  return {
    ...DEFAULT_OPTIONS,
    ...options,
  }
}
