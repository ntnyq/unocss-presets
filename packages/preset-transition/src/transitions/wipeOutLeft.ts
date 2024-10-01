import type { TransitionCreator } from '../types'

export const wipeOutLeft: TransitionCreator = ({ cssVarUse }) => ({
  name: 'wipeOutLeft',
  keyframes: `
    0% {
      clip-path: ${cssVarUse('wipe-in')};
    }
    100% {
      clip-path: ${cssVarUse('wipe-left')};
    }
  `,
})
