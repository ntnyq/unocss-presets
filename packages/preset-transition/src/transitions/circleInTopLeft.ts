import type { TransitionCreator } from '../types'

export const circleInTopLeft: TransitionCreator = ({ cssVarUse }) => ({
  name: 'circleInTopLeft',
  keyframes: `
    0% {
      clip-path: ${cssVarUse('circle-center-center-out')};
    }
    100% {
      clip-path: ${cssVarUse('circle-top-left-in')};
    }
  `,
})
