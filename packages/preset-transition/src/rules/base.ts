import type { Rule } from '@unocss/core'
import type { ResolvedOptions } from '../types'
import { createCSSVar } from '../utils'

export function createBaseRules(options: ResolvedOptions) {
  const cssVar = createCSSVar(options.prefix, { use: true })
  const rules: Rule[] = [
    [
      options.class,
      {
        'animation-delay': cssVar('transition-delay', '0'),
        'animation-duration': cssVar('transition-duration', '2.5s'),
        'animation-fill-mode': 'both',
        'animation-timing-function': cssVar(
          'transition-easing',
          'cubic-bezier(0.25, 1, 0.3, 1)',
        ),
        'will-change': 'clip-path',
      },
      {
        autocomplete: [options.class],
      },
    ],
  ]

  return rules
}
