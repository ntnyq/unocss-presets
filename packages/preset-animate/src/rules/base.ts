import type { PresetAnimateOptions } from '../types'
import type { Rule } from '@unocss/core'

const durationShortcuts = {
  faster: 0.5,
  fast: 0.8,
  slow: 2,
  slower: 3,
}

export const createBaseRules = (options: PresetAnimateOptions) => {
  const rules: Rule[] = [
    [
      'animated',
      {
        'animation-duration': `var(--${options.variablePrefix}duration)`,
        'animation-fill-mode': 'both',
      },
      {
        autocomplete: ['animated'],
      },
    ],
    [
      'animate-infinate',
      {
        'animation-iteration-count': 'infinite',
      },
      {
        autocomplete: ['animate-infinate'],
      },
    ],
    [
      /^animate-(fast|faster|slow|slower)$/,
      ([, shortcut]) => {
        return {
          'animation-duration': `calc(var(--${options.variablePrefix}duration) * ${
            durationShortcuts[shortcut as keyof typeof durationShortcuts]
          })`,
        }
      },
      {
        autocomplete: ['animate-(fast|faster|slow|slower)'],
      },
    ],
    [
      /^animate-repeat-(\d+)$/,
      ([, n]) => {
        return {
          'animation-iteration-count': `calc(var(--${options.variablePrefix}repeat) * ${n})`,
        }
      },
      {
        autocomplete: ['animated-repeat-<num>'],
      },
    ],
    [
      /^animate-delay-(\d+(\.\d+)?)$/,
      ([, n]) => {
        return {
          'animation-delay': `calc(var(--${options.variablePrefix}delay) * ${n})`,
        }
      },
      {
        autocomplete: ['animated-delay-$duration'],
      },
    ],
    [
      /^animate-duration-(\d+(\.\d+)?)$/,
      ([, n]) => {
        return {
          'animation-duration': `calc(var(--${options.variablePrefix}duration) * ${n})`,
        }
      },
      {
        autocomplete: ['animated-duration-$duration'],
      },
    ],
  ]
  return rules
}
