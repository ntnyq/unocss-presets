import type { AnimationObject } from '../types'

export const rotateOutDownRight: AnimationObject = {
  name: 'rotateOutDownRight',
  extraStyle: 'transform-origin: right bottom;',
  keyframes: `@keyframes %ANIMATION_NAME% {
    from {
      opacity: 1;
    }

    to {
      transform: rotate3d(0, 0, 1, -45deg);
      opacity: 0;
    }
  }`,
}
