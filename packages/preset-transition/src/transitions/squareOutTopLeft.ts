import type { TransitionCreator } from '../types'

export const squareOutTopLeft: TransitionCreator = ({ cssVar, cssVarUse }) => ({
  name: 'squareOutTopLeft',
  extraStyle: `
    ${cssVar('transition-duration')}: 1.5s;
  `,
  keyframes: `
    0% {
      clip-path: ${cssVarUse('square-in')};
    }
    100% {
      clip-path: ${cssVarUse('square-top-left-out')};
    }
  `,
})
