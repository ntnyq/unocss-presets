import type { TransitionCreator } from '../types'

export const wipeOutTopRight: TransitionCreator = ({ cssVarUse }) => ({
  name: 'wipeOutTopRight',
  keyframes: `
    0% {
      clip-path: ${cssVarUse('wipe-bottom-left-in')};
    }
    100% {
      clip-path: ${cssVarUse('wipe-top-right-out')};
    }
  `,
})
