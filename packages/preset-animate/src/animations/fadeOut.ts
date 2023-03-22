import type { AnimationObject } from '../types'

export const fadeOut: AnimationObject = {
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
