import type { AnimationObject } from '../types'

export const fadeInUp: AnimationObject = {
  name: 'fadeInUp',
  keyframes: `
    from {
      opacity: 0;
      transform: translate3d(0, 100%, 0);
    }

    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  `,
}
