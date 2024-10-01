import type { TransitionCreator } from '../types'

export const squareOutBottomLeft: TransitionCreator = ({ cssVar, cssVarUse }) => ({
  name: 'squareOutBottomLeft',
  extraStyle: `
    ${cssVar('transition-duration')}: 1.5s;
  `,
  keyframes: `
    0% {
      clip-path: ${cssVarUse('square-in')};
    }
    100% {
      clip-path: ${cssVarUse('square-bottom-left-out')};
    }
  `,
})
