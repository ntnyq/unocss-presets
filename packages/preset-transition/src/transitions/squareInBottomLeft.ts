import type { TransitionCreator } from '../types'

export const squareInBottomLeft: TransitionCreator = ({ cssVarUse }) => ({
  name: 'squareInBottomLeft',
  keyframes: `
    0% {
      clip-path: ${cssVarUse('square-top-right-out')};
    }
    100% {
      clip-path: ${cssVarUse('square-in')};
    }
  `,
})
