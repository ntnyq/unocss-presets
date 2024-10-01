import type { TransitionCreator } from '../types'

export const wipeInTop: TransitionCreator = ({ cssVarUse }) => ({
  name: 'wipeInTop',
  alias: 'wipeInUp',
  keyframes: `
    0% {
      clip-path: ${cssVarUse('wipe-top')};
    }
    100% {
      clip-path: ${cssVarUse('wipe-in')};
    }
  `,
})
