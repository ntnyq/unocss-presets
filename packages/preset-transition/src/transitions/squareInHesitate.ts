import type { TransitionCreator } from '../types'

export const squareInHesitate: TransitionCreator = ({ cssVarUse }) => ({
  name: 'squareInHesitate',
  keyframes: `
    0% {
      clip-path: ${cssVarUse('square-out')};
    }
    40% {
      clip-path: ${cssVarUse('square-hesitate')};
    }
    100% {
      clip-path: ${cssVarUse('square-in')};
    }
  `,
})
