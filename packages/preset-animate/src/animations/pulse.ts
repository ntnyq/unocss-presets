import type { AnimationObject } from '../types'

export const pulse: AnimationObject = {
  name: 'pulse',
  extraStyle: 'animation-timing-function: ease-in-out;',
  keyframes: `
    from {
      transform: scale3d(1, 1, 1);
    }

    50% {
      transform: scale3d(1.05, 1.05, 1.05);
    }

    to {
      transform: scale3d(1, 1, 1);
    }
  `,
}
