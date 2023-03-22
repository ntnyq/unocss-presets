import type { AnimationObject } from '../types'

export const fadeIn: AnimationObject = {
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
