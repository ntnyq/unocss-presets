import type { DynamicRule } from '@unocss/core'
import { camelCase, kebabCase } from 'uncase'
import { transitions as transitionMap } from '../transitions'
import type { ResolvedOptions } from '../types'
import { createCSSVar } from '../utils'

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
  const rules = normalizedTransitions.map<DynamicRule>(transition => {
    const aliases = Array.isArray(transition.alias)
      ? transition.alias
      : transition.alias
        ? [transition.alias]
        : []
    const selectors = [transition.name, ...aliases].map(
      name => options.prefix + kebabCase(name),
    )

    return [
      new RegExp(`^(?:${selectors.join('|')})$`, 'u'),
      (_match, { symbols }) => {
        const animationName = camelCase(options.prefix + transition.name)
        const animationStyle = [
          `animation-name: ${animationName};`,
          transition.extraStyle?.trim(),
        ]
          .filter(Boolean)
          .join(' ')

        return [
          {
            [symbols.body]: animationStyle,
          },
          `@keyframes ${animationName} {
${transition.keyframes.trim()}
}`,
        ]
      },
      {
        autocomplete: selectors,
      },
    ]
  })

  return rules
}
