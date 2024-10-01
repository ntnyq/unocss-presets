import type { TransitionCreator } from '../types'

export const squareOutHesitate: TransitionCreator = ({ cssVarUse }) => ({
  name: 'squareOutHesitate',
  keyframes: `
    0% {
      clip-path: ${cssVarUse('square-in')};
    }
    40% {
      clip-path: ${cssVarUse('square-hesitate')};
    }
    100% {
      clip-path: ${cssVarUse('square-out')};
    }
  `,
})
