import type { TransitionCreator } from '../types'

export const circleInCenter: TransitionCreator = ({ cssVarUse }) => ({
  name: 'circleInCenter',
  keyframes: `
    0% {
      clip-path: ${cssVarUse('circle-center-center-out')};
    }
    100% {
      clip-path: ${cssVarUse('circle-center-center-in')};
    }
  `,
})
