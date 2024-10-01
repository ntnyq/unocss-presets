import type { TransitionCreator } from '../types'

export const squareInTopRight: TransitionCreator = ({ cssVarUse }) => ({
  name: 'squareInTopRight',
  keyframes: `
    0% {
      clip-path: ${cssVarUse('square-bottom-left-out')};
    }
    100% {
      clip-path: ${cssVarUse('square-in')};
    }
  `,
})
