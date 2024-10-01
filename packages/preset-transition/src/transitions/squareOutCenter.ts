import type { TransitionCreator } from '../types'

export const squareOutCenter: TransitionCreator = ({ cssVarUse }) => ({
  name: 'squareOutCenter',
  keyframes: `
    0% {
      clip-path: ${cssVarUse('square-in')};
    }
    100% {
      clip-path: ${cssVarUse('square-out')};
    }
  `,
})
