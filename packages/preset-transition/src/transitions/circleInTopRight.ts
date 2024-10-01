import type { TransitionCreator } from '../types'

export const circleInTopRight: TransitionCreator = ({ cssVarUse }) => ({
  name: 'circleInTopRight',
  keyframes: `
    0% {
      clip-path: ${cssVarUse('circle-center-center-out')};
    }
    100% {
      clip-path: ${cssVarUse('circle-top-right-in')};
    }
  `,
})
