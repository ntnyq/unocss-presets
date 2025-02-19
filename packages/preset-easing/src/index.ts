import { definePreset } from '@unocss/core'
import { camelCase, kebabCase } from 'uncase'
import { easings } from './easings'
import type { PresetEasingOptions } from './types'

export const presetEasing = definePreset<PresetEasingOptions>(
  (options = {}) => {
    const { prefix = 'easing-' } = options
    const selectorPattern = `${prefix}(${Object.keys(easings)
      .map(name => kebabCase(name))
      .join('|')})`

    return {
      name: 'unocss-preset-easing',

      rules: [
        [
          new RegExp(`^${selectorPattern}$`),
          ([, name]) => ({
            'transition-timing-function':
              easings[camelCase(name) as keyof typeof easings],
          }),
          {
            autocomplete: [selectorPattern],
          },
        ],
      ],
    }
  },
)

export * from './types'
export * from './easings'

export default presetEasing
