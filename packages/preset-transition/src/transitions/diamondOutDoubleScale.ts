import type { TransitionCreator } from '../types'

export const diamondOutDoubleScale: TransitionCreator = ({
  cssVar,
  cssVarUse,
}) => ({
  name: 'diamondOutDoubleScale',
  extraStyle: `
    ${cssVar('transition-duration')}: 1.5s;
  `,
  keyframes: `
    0% {
      clip-path: ${cssVarUse('diamond-center-in')};
    }
    40% {
      clip-path: ${cssVarUse('diamond-hesitate')};
    }
    100% {
      clip-path: ${cssVarUse('diamond-center-out')};
    }
  `,
})
