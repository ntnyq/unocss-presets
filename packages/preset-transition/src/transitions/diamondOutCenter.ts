import type { TransitionCreator } from '../types'

export const diamondOutCenter: TransitionCreator = ({ cssVar, cssVarUse }) => ({
  name: 'diamondOutCenter',
  extraStyle: `
    ${cssVar('transition-duration')}: 1.5s;
  `,
  keyframes: `
    0% {
      clip-path: ${cssVarUse('diamond-center-in')};
    }
    100% {
      clip-path: ${cssVarUse('diamond-center-out')};
    }
  `,
})
