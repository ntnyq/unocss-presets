import type { TransitionCreator } from '../types'

export const wipeInBottom: TransitionCreator = ({ cssVarUse }) => ({
  name: 'wipeInBottom',
  alias: 'wipeInUp',
  keyframes: `
    0% {
      clip-path: ${cssVarUse('wipe-bottom')};
    }
    100% {
      clip-path: ${cssVarUse('wipe-in')};
    }
  `,
})
