import type { Rule } from '@unocss/core'
import type { ResolvedOptions } from '../types'

const durationShortcuts = {
  faster: 0.5,
  fast: 0.8,
  slow: 2,
  slower: 3,
}

export const createBaseRules = (options: ResolvedOptions) => {
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
      'animate-infinite',
      {
        'animation-iteration-count': 'infinite',
      },
      {
        autocomplete: ['animate-infinite'],
      },
    ],
    // Keep the misspelled selector for backwards compatibility.
    [
      'animate-infinate',
      {
        'animation-iteration-count': 'infinite',
      },
    ],
    [
      /^animate-(?<shortcut>fast|faster|slow|slower)$/u,
      ([, shortcut]) => ({
        'animation-duration': `calc(var(--${options.variablePrefix}duration) * ${
          durationShortcuts[shortcut as keyof typeof durationShortcuts]
        })`,
      }),
      {
        autocomplete: ['animate-(fast|faster|slow|slower)'],
      },
    ],
    [
      /^animate-repeat-(?<count>\d+)$/u,
      ([, n]) => ({
        'animation-iteration-count': `calc(var(--${options.variablePrefix}repeat) * ${n})`,
      }),
      {
        autocomplete: ['animate-repeat-<num>'],
      },
    ],
    [
      /^animate-delay-(?<duration>\d+(?:\.\d+)?)$/u,
      ([, n]) => ({
        'animation-delay': `calc(var(--${options.variablePrefix}delay) * ${n})`,
      }),
      {
        autocomplete: ['animate-delay-$duration'],
      },
    ],
    [
      /^animate-duration-(?<duration>\d+(?:\.\d+)?)$/u,
      ([, n]) => ({
        'animation-duration': `calc(var(--${options.variablePrefix}duration) * ${n})`,
      }),
      {
        autocomplete: ['animate-duration-$duration'],
      },
    ],
  ]
  return rules
}
