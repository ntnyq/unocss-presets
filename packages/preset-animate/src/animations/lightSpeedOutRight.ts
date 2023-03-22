import type { AnimationObject } from '../types'

export const lightSpeedOutRight: AnimationObject = {
  name: 'lightSpeedOutRight',
  extraStyle: 'animation-timing-function: ease-in;',
  keyframes: `@keyframes %ANIMATION_NAME% {
    from {
      opacity: 1;
    }

    to {
      transform: translate3d(100%, 0, 0) skewX(30deg);
      opacity: 0;
    }
  }`,
}
