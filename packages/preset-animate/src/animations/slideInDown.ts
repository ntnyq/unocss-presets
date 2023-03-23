import type { AnimationObject } from '../types'

export const slideInDown: AnimationObject = {
  name: 'slideInDown',
  keyframes: `
    from {
      transform: translate3d(0, -100%, 0);
      visibility: visible;
    }

    to {
      transform: translate3d(0, 0, 0);
    }
  `,
}
