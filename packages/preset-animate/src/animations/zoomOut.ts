import type { AnimationObject } from '../types'

export const zoomOut: AnimationObject = {
  name: 'zoomOut',
  keyframes: `@keyframes %ANIMATION_NAME% {
    from {
      opacity: 1;
    }

    50% {
      opacity: 0;
      transform: scale3d(0.3, 0.3, 0.3);
    }

    to {
      opacity: 0;
    }
  }`,
}
