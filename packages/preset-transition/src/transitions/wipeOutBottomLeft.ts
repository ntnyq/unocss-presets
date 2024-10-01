import type { TransitionCreator } from '../types'

export const wipeOutBottomLeft: TransitionCreator = ({ cssVarUse }) => ({
  name: 'wipeOutBottomLeft',
  keyframes: `
    0% {
      clip-path: ${cssVarUse('wipe-top-right-in')};
    }
    100% {
      clip-path: ${cssVarUse('wipe-bottom-left-out')};
    }
  `,
})
