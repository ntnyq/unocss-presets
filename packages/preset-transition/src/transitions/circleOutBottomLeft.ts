import type { TransitionCreator } from '../types'

export const circleOutBottomLeft: TransitionCreator = ({
  cssVar,
  cssVarUse,
}) => ({
  name: 'circleOutBottomLeft',
  extraStyle: `
    ${cssVar('transition-duration')}: 1.5s;
  `,
  keyframes: `
    0% {
      clip-path: ${cssVarUse('circle-center-center-in')};
    }
    100% {
      clip-path: ${cssVarUse('circle-bottom-left-out')};
    }
  `,
})
