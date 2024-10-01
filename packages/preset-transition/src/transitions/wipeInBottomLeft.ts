import type { TransitionCreator } from '../types'

export const wipeInBottomLeft: TransitionCreator = ({ cssVarUse }) => ({
  name: 'wipeInBottomLeft',
  keyframes: `
    0% {
      clip-path: ${cssVarUse('wipe-top-right-out')};
    }
    100% {
      clip-path: ${cssVarUse('wipe-bottom-left-in')};
    }
  `,
})
