import type { TransitionCreator } from '../types'

export const circleInHesitate: TransitionCreator = ({ cssVarUse }) => ({
  name: 'circleInHesitate',
  keyframes: `
    0% {
      clip-path: ${cssVarUse('circle-center-center-out')};
    }
    40% {
      clip-path: ${cssVarUse('circle-hesitate')};
    }
    100% {
      clip-path: ${cssVarUse('circle-center-center-in')};
    }
  `,
})
