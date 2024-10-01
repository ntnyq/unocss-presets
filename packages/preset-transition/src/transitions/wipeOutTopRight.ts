import type { TransitionCreator } from '../types'

export const wipeOutTopRight: TransitionCreator = ({ cssVarUse }) => ({
  name: 'wipeOutTopRight',
  keyframes: `
    0% {
      clip-path: ${cssVarUse('wipe-top-left-out')};
    }
    100% {
      clip-path: ${cssVarUse('wipe-bottom-right-in')};
    }
  `,
})
