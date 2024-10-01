import type { TransitionCreator } from '../types'

export const squareInBottomRight: TransitionCreator = ({ cssVarUse }) => ({
  name: 'squareInBottomRight',
  keyframes: `
    0% {
      clip-path: ${cssVarUse('square-top-left-out')};
    }
    100% {
      clip-path: ${cssVarUse('square-in')};
    }
  `,
})
