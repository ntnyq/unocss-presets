import type { AnimationObject } from '../types'

export const rotateOut: AnimationObject = {
  name: 'rotateOut',
  extraStyle: 'transform-origin: center;',
  keyframes: `@keyframes %ANIMATION_NAME% {
    from {
      opacity: 1;
    }

    to {
      transform: rotate3d(0, 0, 1, 200deg);
      opacity: 0;
    }
  }`,
}
