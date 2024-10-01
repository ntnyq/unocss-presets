import type { TransitionCreator } from '../types'

export const wipeInLeft: TransitionCreator = ({ cssVarUse }) => ({
  name: 'wipeInLeft',
  keyframes: `
    0% {
      clip-path: ${cssVarUse('wipe-left')};
    }
    100% {
      clip-path: ${cssVarUse('wipe-in')};
    }
  `,
})
