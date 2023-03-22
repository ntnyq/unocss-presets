import type { Animation } from '../types'

export const fadeOutDown: Animation = {
  name: 'fadeOutDown',
  keyframes: `@keyframes %ANIMATION_NAME% {
    from {
      opacity: 1;
    }

    to {
      opacity: 0;
      transform: translate3d(0, 100%, 0);
    }
  }`,
}
