import type { TransitionCreator } from '../types'

export const squareInCenter: TransitionCreator = ({ cssVarUse }) => ({
  name: 'squareInCenter',
  keyframes: `
    0% {
      clip-path: ${cssVarUse('square-out')};
    }
    100% {
      clip-path: ${cssVarUse('square-in')};
    }
  `,
})
