import { createCSSVar } from '../utils'
import type { Rule } from '@unocss/core'
import type { ResolvedOptions } from '../types'

export function createBaseRules(options: ResolvedOptions) {
  const cssVar = createCSSVar(options.prefix, { use: true })
  const rules: Rule[] = [
    [
      options.class,
      {
        'animation-delay': cssVar('transition-delay', '0'),
        'animation-duration': cssVar('transition-duration', '2.5s'),
        'animation-timing-function': cssVar('transition-easing', 'cubic-bezier(0.25, 1, 0.3, 1)'),
        'animation-fill-mode': 'both',
        'will-change': 'clip-path',
      },
      {
        autocomplete: [options.class],
      },
    ],
  ]

  return rules
}
