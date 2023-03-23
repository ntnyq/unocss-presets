import type { AnimationObject } from '../types'

export const fadeInRight: AnimationObject = {
  name: 'fadeInRight',
  keyframes: `
    from {
      opacity: 0;
      transform: translate3d(100%, 0, 0);
    }

    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  `,
}
