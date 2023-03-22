import type { AnimationObject } from '../types'

export const fadeInTopLeft: AnimationObject = {
  name: 'fadeInTopLeft',
  keyframes: `@keyframes %ANIMATION_NAME% {
    from {
      opacity: 0;
      transform: translate3d(-100%, -100%, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }`,
}
