import type { TransitionCreator } from '../types'

export const squareInTopLeft: TransitionCreator = ({ cssVarUse }) => ({
  name: 'squareInTopLeft',
  keyframes: `
    0% {
      clip-path: ${cssVarUse('square-bottom-right-out')};
    }
    100% {
      clip-path: ${cssVarUse('square-in')};
    }
  `,
})
