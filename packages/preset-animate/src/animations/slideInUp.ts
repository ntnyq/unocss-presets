import type { AnimationObject } from '../types'

export const slideInUp: AnimationObject = {
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
