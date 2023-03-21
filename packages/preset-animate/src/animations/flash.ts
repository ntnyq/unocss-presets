import type { Animation } from '../types'

export const flash: Animation = {
  name: 'flash',
  keyframes: `@keyframes %ANIMATION_NAME% {
    from,
    50%,
    to {
      opacity: 1;
    }

    25%,
    75% {
      opacity: 0;
    }
  }`,
}
