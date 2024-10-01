import type { TransitionCreator } from '../types'

export const diamondInDoubleScale: TransitionCreator = ({ cssVar, cssVarUse }) => ({
  name: 'diamondInDoubleScale',
  extraStyle: `
    ${cssVar('transition-duration')}: 1.5s;
  `,
  keyframes: `
    0% {
      clip-path: ${cssVarUse('diamond-center-out')};
    }
    40% {
      clip-path: ${cssVarUse('diamond-hesitate')};
    }
    100% {
      clip-path: ${cssVarUse('diamond-center-in')};
    }
  `,
})
