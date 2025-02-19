import type { TransitionCreator } from '../types'

export const circleOutTopRight: TransitionCreator = ({
  cssVar,
  cssVarUse,
}) => ({
  name: 'circleOutTopRight',
  extraStyle: `
    ${cssVar('transition-duration')}: 1.5s;
  `,
  keyframes: `
    0% {
      clip-path: ${cssVarUse('circle-center-center-in')};
    }
    100% {
      clip-path: ${cssVarUse('circle-top-right-out')};
    }
  `,
})
