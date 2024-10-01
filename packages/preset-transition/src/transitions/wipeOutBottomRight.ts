import type { TransitionCreator } from '../types'

export const wipeOutBottomRight: TransitionCreator = ({ cssVarUse }) => ({
  name: 'wipeOutBottomRight',
  keyframes: `
    0% {
      clip-path: ${cssVarUse('wipe-top-left-in')};
    }
    100% {
      clip-path: ${cssVarUse('wipe-bottom-right-out')};
    }
  `,
})
