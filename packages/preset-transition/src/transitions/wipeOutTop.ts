import type { TransitionCreator } from '../types'

export const wipeOutTop: TransitionCreator = ({ cssVarUse }) => ({
  name: 'wipeOutTop',
  alias: 'wipeOutUp',
  keyframes: `
    0% {
      clip-path: ${cssVarUse('wipe-in')};
    }
    100% {
      clip-path: ${cssVarUse('wipe-top')};
    }
  `,
})
