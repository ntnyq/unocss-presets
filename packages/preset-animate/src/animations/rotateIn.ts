import type { AnimationObject } from '../types'

export const rotateIn: AnimationObject = {
  name: 'rotateIn',
  extraStyle: 'transform-origin: center;',
  keyframes: `
    from {
      transform: rotate3d(0, 0, 1, -200deg);
      opacity: 0;
    }

    to {
      transform: translate3d(0, 0, 0);
      opacity: 1;
    }
  `,
}
