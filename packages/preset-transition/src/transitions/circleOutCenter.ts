import type { TransitionCreator } from '../types'

export const circleOutCenter: TransitionCreator = ({ cssVarUse }) => ({
  name: 'circleOutCenter',
  keyframes: `
    0% {
      clip-path: ${cssVarUse('circle-center-center-in')};
    }
    100% {
      clip-path: ${cssVarUse('circle-center-center-out')};
    }
  `,
})
