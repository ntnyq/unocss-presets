import type { TransitionCreator } from '../types'

export const circleInBottomLeft: TransitionCreator = ({ cssVarUse }) => ({
  name: 'circleInBottomLeft',
  keyframes: `
    0% {
      clip-path: ${cssVarUse('circle-center-center-out')};
    }
    100% {
      clip-path: ${cssVarUse('circle-bottom-left-in')};
    }
  `,
})
