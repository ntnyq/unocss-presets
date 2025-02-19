import type { PresetShapeOptions } from './types'

export const DEFAULT_OPTIONS: Required<PresetShapeOptions> = {
  prefix: 'shape-',
}

export function resolveOptions(
  options: PresetShapeOptions = {},
): Required<PresetShapeOptions> {
  return {
    ...DEFAULT_OPTIONS,
    ...options,
  }
}
