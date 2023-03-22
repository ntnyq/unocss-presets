import type { Animation } from '../types'

export const fadeInTopRight: Animation = {
  name: 'fadeInTopRight',
  keyframes: `@keyframes %ANIMATION_NAME% {
    from {
      opacity: 0;
      transform: translate3d(100%, -100%, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }`,
}
