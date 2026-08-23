import type { AnimationObject } from '../types'

export const fadeInUpBig: AnimationObject = {
  name: 'fadeInUpBig',
  keyframes: `
    from {
      opacity: 0;
      transform: translate3d(0, 2000px, 0);
    }

    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  `,
}
