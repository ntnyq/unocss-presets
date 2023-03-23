import type { AnimationObject } from '../types'

export const fadeIn: AnimationObject = {
  name: 'fadeIn',
  keyframes: `
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  `,
}
