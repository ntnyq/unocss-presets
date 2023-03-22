import type { AnimationObject } from '../types'

export const rotateInUpLeft: AnimationObject = {
  name: 'rotateInUpLeft',
  extraStyle: 'transform-origin: left bottom;',
  keyframes: `@keyframes %ANIMATION_NAME% {
    from {
      transform: rotate3d(0, 0, 1, 45deg);
      opacity: 0;
    }

    to {
      transform: translate3d(0, 0, 0);
      opacity: 1;
    }
  }`,
}
