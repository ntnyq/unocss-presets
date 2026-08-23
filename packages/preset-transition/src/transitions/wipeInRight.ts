import type { TransitionCreator } from '../types'

export const wipeInRight: TransitionCreator = ({ cssVarUse }) => ({
  name: 'wipeInRight',
  keyframes: `
    0% {
      clip-path: ${cssVarUse('wipe-left')};
    }
    100% {
      clip-path: ${cssVarUse('wipe-in')};
    }
  `,
})
