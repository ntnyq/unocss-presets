import type { AnimationObject } from '../types'

export const fadeInLeftBig: AnimationObject = {
  name: 'fadeInLeftBig',
  keyframes: `
    from {
      opacity: 0;
      transform: translate3d(-2000px, 0, 0);
    }

    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  `,
}
