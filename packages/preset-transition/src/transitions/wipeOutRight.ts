import type { TransitionCreator } from '../types'

export const wipeOutRight: TransitionCreator = ({ cssVarUse }) => ({
  name: 'wipeOutRight',
  keyframes: `
    0% {
      clip-path: ${cssVarUse('wipe-in')};
    }
    100% {
      clip-path: ${cssVarUse('wipe-right')};
    }
  `,
})
