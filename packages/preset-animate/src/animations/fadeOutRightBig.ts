import type { AnimationObject } from '../types'

export const fadeOutRightBig: AnimationObject = {
  name: 'fadeOutRightBig',
  keyframes: `@keyframes %ANIMATION_NAME% {
    from {
      opacity: 1;
    }

    to {
      opacity: 0;
      transform: translate3d(2000px, 0, 0);
    }
  }`,
}
