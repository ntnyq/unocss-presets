import type { TransitionCreator } from '../types'

export const squareOutTopRight: TransitionCreator = ({ cssVar, cssVarUse }) => ({
  name: 'squareOutTopRight',
  extraStyle: `
    ${cssVar('transition-duration')}: 1.5s;
  `,
  keyframes: `
    0% {
      clip-path: ${cssVarUse('square-in')};
    }
    100% {
      clip-path: ${cssVarUse('square-top-right-out')};
    }
  `,
})
