import type { TransitionCreator } from '../types'

export const wipeOutTopLeft: TransitionCreator = ({ cssVarUse }) => ({
  name: 'wipeOutTopLeft',
  keyframes: `
    0% {
      clip-path: ${cssVarUse('wipe-bottom-right-in')};
    }
    100% {
      clip-path: ${cssVarUse('wipe-top-left-out')};
    }
  `,
})
