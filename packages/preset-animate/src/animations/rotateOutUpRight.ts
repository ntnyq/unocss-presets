import type { AnimationObject } from '../types'

export const rotateOutUpRight: AnimationObject = {
  name: 'rotateOutUpRight',
  extraStyle: 'transform-origin: right bottom;',
  keyframes: `
    from {
      opacity: 1;
    }

    to {
      transform: rotate3d(0, 0, 1, 90deg);
      opacity: 0;
    }
  `,
}
