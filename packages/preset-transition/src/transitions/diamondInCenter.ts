import type { TransitionCreator } from '../types'

export const diamondInCenter: TransitionCreator = ({ cssVar, cssVarUse }) => ({
  name: 'diamondInCenter',
  extraStyle: `
    ${cssVar('transition-duration')}: 1.5s;
  `,
  keyframes: `
    0% {
      clip-path: ${cssVarUse('diamond-center-out')};
    }
    100% {
      clip-path: ${cssVarUse('diamond-center-in')};
    }
  `,
})
