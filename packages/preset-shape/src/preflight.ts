import { createCSSVar } from '../utils'
import type { Preflight } from '@unocss/core'
import type { PresetShapeOptions } from './types'

export const createPreflights = (options: Required<PresetShapeOptions>): Preflight[] => {
  const cssVar = createCSSVar(options.prefix)
  return [
    {
      getCSS: () =>
        `:root {
${[
  `${cssVar('star-clip-path')}: polygon(50% 0,79% 90%,2% 35%,98% 35%,21% 90%);`,
  `${cssVar('triangle-clip-path')}: polygon(50% 0,100% 100%,0 100%);`,
  `${cssVar('rhombus-clip-path')}: polygon(50% 0,100% 50%,50% 100%,0 50%);`,
].join('\n')}
}`.trim(),
    },
  ]
}
