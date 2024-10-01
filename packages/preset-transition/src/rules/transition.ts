import { camelCase, kebabCase } from '@ntnyq/utils'
import { transitions as transitionMap } from '../transitions'
import { createCSSVar } from '../utils'
import type { DynamicRule } from '@unocss/core'
import type { ResolvedOptions } from '../types'

export function createTransitionRules(options: ResolvedOptions) {
  const builtInTransitions = Object.values(transitionMap)
  const transitions = [...builtInTransitions]
  const normalizedTransitions = transitions.map(transition =>
    typeof transition === 'function'
      ? transition({
          cssVar: createCSSVar(options.prefix),
          cssVarUse: createCSSVar(options.prefix, { use: true }),
        })
      : transition,
  )
  const rules = normalizedTransitions.map<DynamicRule>(transition => [
    new RegExp(`^${options.prefix}${kebabCase(transition.name)}$`),
    () => {
      const animationName = camelCase(options.prefix + transition.name)
      return [
        `
        .${options.prefix}${kebabCase(transition.name)} {
          animation-name: ${animationName};
          ${transition.extraStyle ?? ''}
        }
        `,
        `
        @keyframes ${animationName} {
          ${transition.keyframes}
        }
        `,
      ]
    },
    {
      autocomplete: [options.prefix + kebabCase(transition.name)],
    },
  ])

  return rules
}
