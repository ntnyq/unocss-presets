import type { Animation } from '../types'

export const slideOutLeft: Animation = {
  name: 'slideOutLeft',
  keyframes: `@keyframes %ANIMATION_NAME% {
    from {
      transform: translate3d(0, 0, 0);
    }

    to {
      visibility: hidden;
      transform: translate3d(-100%, 0, 0);
    }
  }`,
}
