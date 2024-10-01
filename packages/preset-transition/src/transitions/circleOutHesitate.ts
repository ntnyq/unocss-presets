import type { TransitionCreator } from '../types'

export const circleOutHesitate: TransitionCreator = ({ cssVarUse }) => ({
  name: 'circleOutHesitate',
  keyframes: `
    0% {
      clip-path: ${cssVarUse('circle-center-center-in')};
    }
    40% {
      clip-path: ${cssVarUse('circle-hesitate')};
    }
    100% {
      clip-path: ${cssVarUse('circle-center-center-out')};
    }
  `,
})
