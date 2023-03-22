import type { Animation } from '../types'

export const slideInUp: Animation = {
  name: 'slideInUp',
  keyframes: `@keyframes %ANIMATION_NAME% {
    from {
      transform: translate3d(0, 100%, 0);
      visibility: visible;
    }

    to {
      transform: translate3d(0, 0, 0);
    }
  }`,
}
