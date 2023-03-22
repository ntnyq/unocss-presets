import type { Animation } from '../types'

export const slideOutDown: Animation = {
  name: 'slideOutDown',
  keyframes: `@keyframes %ANIMATION_NAME% {
    from {
      transform: translate3d(0, 0, 0);
    }

    to {
      visibility: hidden;
      transform: translate3d(0, 100%, 0);
    }
  }`,
}
