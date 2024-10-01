import type { TransitionCreator } from '../types'

export const circleInBottomRight: TransitionCreator = ({ cssVarUse }) => ({
  name: 'circleInBottomRight',
  keyframes: `
    0% {
      clip-path: ${cssVarUse('circle-center-center-out')};
    }
    100% {
      clip-path: ${cssVarUse('circle-bottom-right-in')};
    }
  `,
})
