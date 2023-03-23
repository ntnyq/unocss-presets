import type { AnimationObject } from '../types'

export const rotateInDownLeft: AnimationObject = {
  name: 'rotateInDownLeft',
  extraStyle: 'transform-origin: left bottom;',
  keyframes: `
    from {
      transform: rotate3d(0, 0, 1, -45deg);
      opacity: 0;
    }

    to {
      transform: translate3d(0, 0, 0);
      opacity: 1;
    }
  `,
}
