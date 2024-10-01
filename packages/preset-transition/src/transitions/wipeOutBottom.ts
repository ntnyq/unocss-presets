import type { TransitionCreator } from '../types'

export const wipeOutBottom: TransitionCreator = ({ cssVarUse }) => ({
  name: 'wipeOutBottom',
  alias: 'wipeOutDown',
  keyframes: `
    0% {
      clip-path: ${cssVarUse('wipe-in')};
    }
    100% {
      clip-path: ${cssVarUse('wipe-bottom')};
    }
  `,
})
