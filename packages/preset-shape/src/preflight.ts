import { createCSSVar } from '../utils'
import type { Preflight } from '@unocss/core'
import type { PresetShapeOptions } from './types'

export const createPreflights = (options: Required<PresetShapeOptions>): Preflight[] => {
  const cssVar = createCSSVar(options.prefix)
  const cssVarUse = createCSSVar(options.prefix, { use: true })
  return [
    {
      getCSS: () =>
        `:root {
${[
  `${cssVar('star-clip-path')}: polygon(50% 0,79% 90%,2% 35%,98% 35%,21% 90%);`,
  `${cssVar('triangle-clip-path')}: polygon(50% 0,100% 100%,0 100%);`,
  `${cssVar('rhombus-clip-path')}: polygon(50% 0,100% 50%,50% 100%,0 50%);`,
  `${cssVar('hexagon-clip-path')}: polygon(50% -50%,100% 50%,50% 150%,0 50%);`,

  `${cssVar('octagon-angle')}: calc(50% * tan(-22.5deg));`,
  `${cssVar('octagon-clip-path')}: polygon(${cssVarUse('octagon-angle')} 50%, 50% ${cssVarUse('octagon-angle')}, calc(100% - ${cssVarUse('octagon-angle')}) 50%, 50% calc(100% - ${cssVarUse('octagon-angle')}));`,

  `${cssVar('heart-gradient-mask')}: radial-gradient(#000 69%,#0000 70%) 84.5%/50%;`,
  `${cssVar('heart-clip-path')}: polygon(-41% 0,50% 91%, 141% 0);`,

  `${cssVar('parallelogram-skew')}: 30%;`,
  `${cssVar('parallelogram-clip-path')}: polygon(${cssVarUse('parallelogram-skew')} 0,100% 0,calc(100% - ${cssVarUse('parallelogram-skew')}) 100%,0 100%);`,
].join('\n')}
}`.trim(),
    },
  ]
}
