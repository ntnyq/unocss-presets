import type { DynamicRule } from '@unocss/core'
import { kebabCase, pascalCase } from 'uncase'
import { animations as animationMap } from '../animations'
import type { PresetAnimateOptions } from '../types'

export const createAnimationRules = (options: PresetAnimateOptions) => {
  const extendAnimations = Array.isArray(options.extendAnimations)
    ? options.extendAnimations
    : [],
   builtInAnimations = Object.values(animationMap),
   animations = [...builtInAnimations, ...extendAnimations],
   normalizedAnimations = animations.map(animation =>
    typeof animation === 'function' ? animation(options) : animation,
  ),
   rules = normalizedAnimations.map<DynamicRule>(animation => [
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
