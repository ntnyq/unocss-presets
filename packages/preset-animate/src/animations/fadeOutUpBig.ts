import type { AnimationObject } from '../types'

export const fadeOutUpBig: AnimationObject = {
  name: 'fadeOutUpBig',
  keyframes: `
    from {
      opacity: 1;
    }

    to {
      opacity: 0;
      transform: translate3d(0, -2000px, 0);
    }
  `,
}
