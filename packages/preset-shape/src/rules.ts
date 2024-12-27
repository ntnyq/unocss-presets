import { createCSSVar } from '../utils'
import type { Rule } from '@unocss/core'
import type { PresetShapeOptions } from './types'

export const createShapeRules = (options: Required<PresetShapeOptions>) => {
  const cssVarUse = createCSSVar(options.prefix, { use: true })
  const rules: Rule[] = [
    [
      new RegExp(`^${options.prefix}star-?(.+)$`),
      ([_, s]) => ({
        width: s,
        'aspect-ratio': 1,
        'clip-path': cssVarUse('star-clip-path'),
      }),
      {
        autocomplete: `${options.prefix}star-$size`,
      },
    ],

    [
      new RegExp(`^${options.prefix}triangle-?(.+)$`),
      ([_, s]) => ({
        width: s,
        'aspect-ratio': '1/cos(30deg)',
        'clip-path': cssVarUse('triangle-clip-path'),
      }),
      {
        autocomplete: `${options.prefix}triangle-$size`,
      },
    ],

    [
      new RegExp(`^${options.prefix}rhombus-?(.+)$`),
      ([_, s]) => ({
        height: s,
        'aspect-ratio': 1,
        'clip-path': cssVarUse('rhombus-clip-path'),
      }),
      {
        autocomplete: `${options.prefix}rhombus-$size`,
      },
    ],
  ]
  return rules
}
