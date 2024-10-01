import { createCSSVar } from './utils'
import type { Preflight } from '@unocss/core'
import type { ResolvedOptions } from './types'

export const createPreflights = (options: ResolvedOptions): Preflight[] => {
  const cssVar = createCSSVar(options.prefix)
  const preflights: Preflight[] = [
    {
      getCSS: () => `:root {
        ${cssVar('circle-center-center-out')}: circle(0%);
        ${cssVar('circle-center-center-in')}: circle(125%);
        ${cssVar('circle-hesitate')}: circle(40%);
        ${cssVar('circle-top-left-out')}: circle(0% at top left);
        ${cssVar('circle-top-right-out')}: circle(0% at top right);
        ${cssVar('circle-bottom-right-out')}: circle(0% at bottom right);
        ${cssVar('circle-bottom-left-out')}: circle(0% at bottom left);
        ${cssVar('circle-top-left-in')}: circle(150% at top left);
        ${cssVar('circle-top-right-in')}: circle(150% at top right);
        ${cssVar('circle-bottom-right-in')}: circle(150% at bottom right);
        ${cssVar('circle-bottom-left-in')}: circle(150% at bottom left);
        ${cssVar('wipe-in')}: inset(0 0 0 0);
        ${cssVar('wipe-bottom')}: inset(100% 0 0 0);
        ${cssVar('wipe-left')}: inset(0 100% 0 0);
        ${cssVar('wipe-top')}: inset(0 0 100% 0);
        ${cssVar('wipe-right')}: inset(0 0 0 100%);
        ${cssVar('wipe-top-left-in')}: polygon(50% -50%, 150% 50%, 50% 150%, -50% 50%);
        ${cssVar('wipe-top-right-in')}: polygon(50% -50%, 150% 50%, 50% 150%, -50% 50%);
        ${cssVar('wipe-bottom-left-in')}: polygon(50% -50%, 150% 50%, 50% 150%, -50% 50%);
        ${cssVar('wipe-bottom-right-in')}: polygon(-50% 0%, 200% 0, 0 200%, 0 -50%);
        ${cssVar('wipe-top-left-out')}: polygon(0 0, 0 0, 0 0, 0 50%);
        ${cssVar('wipe-top-right-out')}: polygon(50% -50%, 150% 50%, 150% 50%, 50% -50%);
        ${cssVar('wipe-bottom-left-out')}: polygon(-50% 50%, 50% 150%, 50% 150%, -50% 50%);
        ${cssVar('wipe-bottom-right-out')}: polygon(150% 50%, 150% 50%, 50% 150%, 50% 150%);
        ${cssVar('wipe-cinematic-out')}: inset(100% 0 100% 0);
        ${cssVar('wipe-cinematic-mid')}: inset(10% 0 10% 0);
        ${cssVar('square-hesitate')}: inset(33% 33% 33% 33%);
        ${cssVar('square-out')}: inset(100% 100% 100% 100%);
        ${cssVar('square-in')}: var(${cssVar('wipe-in')});
        ${cssVar('square-top-left-out')}: inset(0 100% 100% 0);
        ${cssVar('square-top-right-out')}: inset(0 0 100% 100%);
        ${cssVar('square-bottom-left-out')}: inset(100% 100% 0 0);
        ${cssVar('square-bottom-right-out')}: inset(100% 0 0 100%);
        ${cssVar('diamond-center-in')}: polygon(-50% 50%, 50% -50%, 150% 50%, 50% 150%);
        ${cssVar('diamond-center-out')}: polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%);
        ${cssVar('diamond-hesitate')}: polygon(45% 50%, 50% 25%, 55% 50%, 50% 75%);
        ${cssVar('opposing-corners-in')}: polygon(0 0, 0 100%, 100% 100%, 100% 0);
        ${cssVar('opposing-corners-out')}: polygon(0 0, 50% 50%, 100% 100%, 50% 50%);
      }`,
    },
  ]

  if (options.injectMediaQuery) {
    preflights.push({
      getCSS: () => `@media (prefers-reduced-motion: reduce), print {
        .${options.class} {
          animation-duration: 1ms !important;
          transition-duration: 1ms !important;
          animation-iteration-count: 1 !important;
        }
      }`,
    })
  }

  return preflights
}
