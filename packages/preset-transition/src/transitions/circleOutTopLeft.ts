import type { TransitionCreator } from '../types'

export const circleOutTopLeft: TransitionCreator = ({ cssVar, cssVarUse }) => ({
  name: 'circleOutTopLeft',
  extraStyle: `
    ${cssVar('transition-duration')}: 1.5s;
  `,
  keyframes: `
    0% {
      clip-path: ${cssVarUse('circle-center-center-in')};
    }
    100% {
      clip-path: ${cssVarUse('circle-top-left-out')};
    }
  `,
})
