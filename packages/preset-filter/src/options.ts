import type { PresetFilterOptions } from './types'

export const DEFAULT_OPTIONS: Required<PresetFilterOptions> = {
  prefix: 'filter-',
}

export function resolveOptions(
  options: PresetFilterOptions = {},
): Required<PresetFilterOptions> {
  return {
    ...DEFAULT_OPTIONS,
    ...options,
  }
}
