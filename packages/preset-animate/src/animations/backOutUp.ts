import type { AnimationObject } from '../types'

export const backOutUp: AnimationObject = {
  name: 'backOutUp',
  keyframes: `@keyframes %ANIMATION_NAME% {
    0% {
      transform: scale(1);
      opacity: 1;
    }

    20% {
      transform: translateY(0px) scale(0.7);
      opacity: 0.7;
    }

    100% {
      transform: translateY(-700px) scale(0.7);
      opacity: 0.7;
    }
  }`,
}
