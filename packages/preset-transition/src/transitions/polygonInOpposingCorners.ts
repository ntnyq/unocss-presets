import type { TransitionCreator } from '../types'

export const polygonInOpposingCorners: TransitionCreator = ({
  cssVar,
  cssVarUse,
}) => ({
  name: 'polygonInOpposingCorners',
  extraStyle: `
    ${cssVar('transition-duration')}: 1.5s;
  `,
  keyframes: `
    0% {
      clip-path: ${cssVarUse('opposing-corners-out')};
    }
    100% {
      clip-path: ${cssVarUse('opposing-corners-in')};
    }
  `,
})
