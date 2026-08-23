import type { DynamicRule } from '@unocss/core'
import { kebabCase, pascalCase } from 'uncase'
import { animations as animationMap } from '../animations'
import type { ResolvedOptions } from '../types'

export const createAnimationRules = (options: ResolvedOptions) => {
  const extendAnimations = Array.isArray(options.extendAnimations)
    ? options.extendAnimations
    : []
  const builtInAnimations = Object.values(animationMap)
  const animations = [...builtInAnimations, ...extendAnimations]
  const normalizedAnimations = animations.map(animation =>
    typeof animation === 'function' ? animation(options) : animation,
  )
  const rules = normalizedAnimations.map<DynamicRule>(animation => {
    const selector = `animation-${kebabCase(animation.name)}`

    return [
      new RegExp(`^${selector}$`, 'u'),
      (_match, { symbols }) => {
        const animationName = `unAnimation${pascalCase(animation.name)}`
        const animationStyle = [
          `animation-name: ${animationName};`,
          animation.extraStyle?.trim(),
        ]
          .filter(Boolean)
          .join(' ')

        return [
          {
            [symbols.body]: animationStyle,
          },
          `@keyframes ${animationName} {
${animation.keyframes.trim()}
}`,
        ]
      },
      {
        autocomplete: [selector],
      },
    ]
  })
  return rules
}
