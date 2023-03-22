import type { Animation } from '../types'

export const slideOutRight: Animation = {
  name: 'slideOutRight',
  keyframes: `@keyframes %ANIMATION_NAME% {
    from {
      transform: translate3d(0, 0, 0);
    }

    to {
      visibility: hidden;
      transform: translate3d(100%, 0, 0);
    }
  }`,
}
