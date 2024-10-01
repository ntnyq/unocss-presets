import type { TransitionCreator } from '../types'

export const wipeCinematicIn: TransitionCreator = ({ cssVarUse }) => ({
  name: 'wipeCinematicIn',
  keyframes: `
    0% {
      clip-path: ${cssVarUse('wipe-cinematic-out')};
    }
    30%,
    70% {
      clip-path: ${cssVarUse('wipe-cinematic-mid')};
    }
    100% {
      clip-path: ${cssVarUse('wipe-in')};
    }
  `,
})
