import type { AnimationObject } from '../types'

export const slideOutUp: AnimationObject = {
  name: 'slideOutUp',
  keyframes: `@keyframes %ANIMATION_NAME% {
    from {
      transform: translate3d(0, 0, 0);
    }

    to {
      visibility: hidden;
      transform: translate3d(0, -100%, 0);
    }
  }`,
}
