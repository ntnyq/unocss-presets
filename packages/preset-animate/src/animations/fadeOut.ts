import type { Animation } from '../types'

export const fadeOut: Animation = {
  name: 'fadeOut',
  keyframes: `@keyframes %ANIMATION_NAME% {
    from {
      opacity: 1;
    }

    to {
      opacity: 0;
    }
  }`,
}
