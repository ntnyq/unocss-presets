import type { TransitionCreator } from '../types'

export const squareOutBottomRight: TransitionCreator = ({ cssVar, cssVarUse }) => ({
  name: 'squareOutBottomRight',
  extraStyle: `
    ${cssVar('transition-duration')}: 1.5s;
  `,
  keyframes: `
    0% {
      clip-path: ${cssVarUse('square-in')};
    }
    100% {
      clip-path: ${cssVarUse('square-bottom-right-out')};
    }
  `,
})
