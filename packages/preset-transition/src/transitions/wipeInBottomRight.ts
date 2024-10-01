import type { TransitionCreator } from '../types'

export const wipeInBottomRight: TransitionCreator = ({ cssVarUse }) => ({
  name: 'wipeInBottomRight',
  keyframes: `
    0% {
      clip-path: ${cssVarUse('wipe-top-left-out')};
    }
    100% {
      clip-path: ${cssVarUse('wipe-bottom-right-in')};
    }
  `,
})
