import { kebabCase, pascalCase } from 'uncase'
import { animations as animationMap } from '../animations'
import type { DynamicRule } from '@unocss/core'
import type { PresetAnimateOptions } from '../types'

export const createAnimationRules = (options: PresetAnimateOptions) => {
  const extendAnimations = Array.isArray(options.extendAnimations)
    ? options.extendAnimations
    : []
  const builtInAnimations = Object.values(animationMap)
  const animations = [...builtInAnimations, ...extendAnimations]
  const normalizedAnimations = animations.map(animation =>
    typeof animation === 'function' ? animation(options) : animation,
  )
  const rules = normalizedAnimations.map<DynamicRule>(animation => [
    new RegExp(`^animation-${kebabCase(animation.name)}$`),
    () => {
      const animationName = `unAnimation${pascalCase(animation.name)}`
      return [
        `
        .animation-${kebabCase(animation.name)} {
          animation-name: ${animationName};
          ${animation.extraStyle ?? ''}
        }
        `,
        `
        @keyframes ${animationName} {
          ${animation.keyframes}
        }
        `,
      ]
    },
    {
      autocomplete: [`animation-${kebabCase(animation.name)}`],
    },
  ])
  return rules
}
