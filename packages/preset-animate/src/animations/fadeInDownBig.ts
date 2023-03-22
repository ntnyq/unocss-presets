import type { Animation } from '../types'

export const fadeInDownBig: Animation = {
  name: 'fadeInDownBig',
  keyframes: `@keyframes %ANIMATION_NAME% {
    from {
      opacity: 0;
      transform: translate3d(0, -2000px, 0);
    }

    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }`,
}
