import { kebabCase, upperFirst } from '@ntnyq/utils'
import { animations as animationMap } from '../animations'
import type { DynamicRule } from '@unocss/core'
import type { PresetAnimateOptions } from '../types'

export const createAnimationRules = (options: PresetAnimateOptions) => {
  const extendAnimations = Array.isArray(options.extendAnimations) ? options.extendAnimations : []
  const builtInAnimations = Object.values(animationMap)
  const animations = [...builtInAnimations, ...extendAnimations]
  const normalizedAnimation = animations.map(animation =>
    typeof animation === 'function' ? animation(options) : animation,
  )
  const rules = normalizedAnimation.map<DynamicRule>(animation => [
    new RegExp(`^animation-${kebabCase(animation.name)}$`),
    () => [
      `.animation-${kebabCase(animation.name)} {
         animation-name: unAnimation${upperFirst(animation.name)};
          ${animation.extraStyle ?? ''}
      }`,
      `@keyframes unAnimation${upperFirst(animation.name)} {
        ${animation.keyframes}
      }`,
    ],
    {
      autocomplete: [`animation-${kebabCase(animation.name)}`],
    },
  ])
  return rules
}
