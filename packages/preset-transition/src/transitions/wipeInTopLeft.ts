import type { TransitionCreator } from '../types'

export const wipeInTopLeft: TransitionCreator = ({ cssVarUse }) => ({
  name: 'wipeInTopLeft',
  keyframes: `
    0% {
      clip-path: ${cssVarUse('wipe-bottom-right-out')};
    }
    100% {
      clip-path: ${cssVarUse('wipe-top-left-in')};
    }
  `,
})
