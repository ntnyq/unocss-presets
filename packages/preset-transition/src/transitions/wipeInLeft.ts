import type { TransitionCreator } from '../types'

export const wipeInLeft: TransitionCreator = ({ cssVarUse }) => ({
  name: 'wipeInLeft',
  keyframes: `
    0% {
      clip-path: ${cssVarUse('wipe-right')};
    }
    100% {
      clip-path: ${cssVarUse('wipe-in')};
    }
  `,
})
