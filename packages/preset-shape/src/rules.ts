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

    [
      new RegExp(`^${options.prefix}hexagon-?(.+)$`),
      ([_, s]) => ({
        height: s,
        'aspect-ratio': '1/cos(30deg)',
        'clip-path': cssVarUse('hexagon-clip-path'),
      }),
      {
        autocomplete: `${options.prefix}hexagon-$size`,
      },
    ],

    [
      new RegExp(`^${options.prefix}octagon-?(.+)$`),
      ([_, s]) => ({
        width: s,
        'aspect-ratio': 1,
        'clip-path': cssVarUse('octagon-clip-path'),
      }),
      {
        autocomplete: `${options.prefix}octagon-$size`,
      },
    ],

    [
      new RegExp(`^${options.prefix}heart-?(.+)$`),
      ([_, s]) => ({
        height: s,
        'aspect-ratio': 1,
        '-webkit-mask-box-image': cssVarUse('heart-gradient-mask'),
        'mask-border': cssVarUse('heart-gradient-mask'),
        'clip-path': cssVarUse('heart-clip-path'),
      }),
      {
        autocomplete: `${options.prefix}heart-$size`,
      },
    ],

    [
      new RegExp(`^${options.prefix}parallelogram-?(.+)$`),
      ([_, s]) => ({
        height: s,
        'aspect-ratio': '3/2',
        'clip-path': cssVarUse('parallelogram-clip-path'),
      }),
      {
        autocomplete: `${options.prefix}parallelogram-$size`,
      },
    ],
  ]
  return rules
}
