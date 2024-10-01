import type { TransitionCreator } from '../types'

export const wipeCinematicOut: TransitionCreator = ({ cssVarUse }) => ({
  name: 'wipeCinematicOut',
  keyframes: `
    0% {
      clip-path: ${cssVarUse('wipe-in')};
    }
    30%,
    70% {
      clip-path: ${cssVarUse('wipe-cinematic-mid')};
    }
    100% {
      clip-path: ${cssVarUse('wipe-cinematic-out')};
    }
  `,
})
