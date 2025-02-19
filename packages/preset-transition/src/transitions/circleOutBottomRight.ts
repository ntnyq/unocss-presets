import type { TransitionCreator } from '../types'

export const circleOutBottomRight: TransitionCreator = ({
  cssVar,
  cssVarUse,
}) => ({
  name: 'circleOutBottomRight',
  extraStyle: `
    ${cssVar('transition-duration')}: 1.5s;
  `,
  keyframes: `
    0% {
      clip-path: ${cssVarUse('circle-center-center-in')};
    }
    100% {
      clip-path: ${cssVarUse('circle-bottom-right-out')};
    }
  `,
})
