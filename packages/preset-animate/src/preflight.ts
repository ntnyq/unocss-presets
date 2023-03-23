import type { PresetAnimateOptions } from './types'
import type { Preflight } from '@unocss/core'

export const createPreflights = (options: PresetAnimateOptions): Preflight[] => {
  const preflights: Preflight[] = [
    {
      getCSS: () =>
        `:root { --${options.variablePrefix}duration: 1s; --${options.variablePrefix}delay: 1s; --${options.variablePrefix}repeat: 1; }`,
    },
  ]

  if (options.injectMediaQuery) {
    preflights.push({
      getCSS: () => `@media print, (prefers-reduced-motion: reduce) {
        .animated { animation-duration: 1ms !important; transition-duration: 1ms !important; animation-iteration-count: 1 !important; }
        .animated[class*='out'] { opacity: 0; }
      }`,
    })
  }

  return preflights
}
