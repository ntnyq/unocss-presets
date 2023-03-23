import { minify } from '../utils'
import type { PresetAnimateOptions } from '../types'
import type { Rule } from '@unocss/core'

export const createBaseRules = (options: PresetAnimateOptions) => {
  const rules: Rule[] = [
    [
      /^animated$/,
      () => {
        return minify(`
        .animated {
          animation-duration: var(--${options.variablePrefix}duration);
          animation-fill-mode: both;
        }`)
      },
    ],
    [
      /^animate-infinate$/,
      () => {
        return minify(`
        .animate-infinate {
          animation-iteration-count: infinite;
        }`)
      },
    ],
    [
      /^animate-faster$/,
      () =>
        minify(`
        .animate-faster {
          animation-duration: calc(var(--${options.variablePrefix}duration) * 0.5);
        }`),
    ],
    [
      /^animate-fast$/,
      () =>
        minify(`
        .animate-fast {
          animation-duration: calc(var(--${options.variablePrefix}duration) * 0.8);
        }`),
    ],
    [
      /^animate-slow$/,
      () =>
        minify(`
        .animate-slow {
          animation-duration: calc(var(--${options.variablePrefix}duration) * 2);
        }`),
    ],
    [
      /^animate-slower$/,
      () =>
        minify(`
        .animate-slower {
          animation-duration: calc(var(--${options.variablePrefix}duration) * 3);
        }`),
    ],
    [
      /^animate-repeat-(.+)$/,
      ([, count]) => {
        const num = Number.parseInt(count) ?? 0

        if (!num) return ''

        return minify(`
        .animate-repeat-${num} {
          animation-iteration-count: calc(var(--${options.variablePrefix}repeat) * ${num});
        }`)
      },
    ],
    [
      /^animate-delay-(.+)$/,
      ([, count]) => {
        const num = Number.parseFloat(count) ?? 0

        if (!num) return ''

        return minify(`
        .animate-delay-${num} {
          animation-delay: calc(var(--${options.variablePrefix}delay) * ${num});
        }`)
      },
    ],
  ]
  return rules
}
