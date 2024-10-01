import type { TransitionCreator } from '../types'

export const wipeInTopRight: TransitionCreator = ({ cssVarUse }) => ({
  name: 'wipeInTopRight',
  keyframes: `
    0% {
      clip-path: ${cssVarUse('wipe-bottom-left-out')};
    }
    100% {
      clip-path: ${cssVarUse('wipe-top-right-in')};
    }
  `,
})
