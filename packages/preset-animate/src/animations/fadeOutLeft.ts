import type { Animation } from '../types'

export const fadeOutLeft: Animation = {
  name: 'fadeOutLeft',
  keyframes: `@keyframes %ANIMATION_NAME% {
    from {
      opacity: 1;
    }

    to {
      opacity: 0;
      transform: translate3d(-100%, 0, 0);
    }
  }`,
}
