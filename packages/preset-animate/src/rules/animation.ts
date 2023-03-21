import { animations } from '../animations'
import { capitalize, kekabCase } from '../utils'
import type { PresetAnimateOptions } from '../types'
import type { Rule } from '@unocss/core'

export const createAnimationRules = (options: PresetAnimateOptions) => {
  const normalizedAnimation = animations.map(animation =>
    typeof animation === 'function' ? animation(options) : animation,
  )
  const rules: Rule[] = normalizedAnimation.map(animation => [
    new RegExp(`^animation-${kekabCase(animation.name)}$`),
    () => `
    .animation-${kekabCase(animation.name)} {
      animation-name: unAnimation${capitalize(animation.name)};
      ${animation.extraStyle ?? ''}
    }
    ${animation.keyframes.replace('%ANIMATION_NAME%', `unAnimation${capitalize(animation.name)}`)}
  `,
  ])
  return rules
}
