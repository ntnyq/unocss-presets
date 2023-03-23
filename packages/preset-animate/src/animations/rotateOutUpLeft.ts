import type { AnimationObject } from '../types'

export const rotateOutUpLeft: AnimationObject = {
  name: 'rotateOutUpLeft',
  extraStyle: 'transform-origin: left bottom;',
  keyframes: `
    from {
      opacity: 1;
    }

    to {
      transform: rotate3d(0, 0, 1, -45deg);
      opacity: 0;
    }
  `,
}
