import type { TransitionCreator } from '../types'

export const polygonOutOpposingCorners: TransitionCreator = ({ cssVar, cssVarUse }) => ({
  name: 'polygonOutOpposingCorners',
  extraStyle: `
    ${cssVar('transition-duration')}: 1.5s;
  `,
  keyframes: `
    0% {
      clip-path: ${cssVarUse('opposing-corners-in')};
    }
    100% {
      clip-path: ${cssVarUse('opposing-corners-out')};
    }
  `,
})
