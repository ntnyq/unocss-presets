import type { Animation } from '../types'

export const fadeIn: Animation = {
  name: 'fadeIn',
  keyframes: `@keyframes %ANIMATION_NAME% {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }`,
}
