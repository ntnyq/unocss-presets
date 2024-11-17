import type { Preflight } from '@unocss/core'
import type { PresetFilterOptions } from './types'

export const createPreflights = (options: Required<PresetFilterOptions>): Preflight[] => [
  {
    getCSS: () => `
      [class^="${options.prefix}"] {
        position: relative;
      }
      [class^="${options.prefix}"]:before {
        display: block;
        height: 100%;
        left: 0;
        position: absolute;
        top: 0;
        width: 100%;
        z-index: 1;
      }
      `,
  },
]
