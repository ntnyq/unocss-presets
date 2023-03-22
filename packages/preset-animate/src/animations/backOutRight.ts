import type { AnimationObject } from '../types'

export const backOutRight: AnimationObject = {
  name: 'backOutRight',
  keyframes: `@keyframes %ANIMATION_NAME% {
    0% {
      transform: scale(1);
      opacity: 1;
    }

    20% {
      transform: translateX(0px) scale(0.7);
      opacity: 0.7;
    }

    100% {
      transform: translateX(2000px) scale(0.7);
      opacity: 0.7;
    }
  }`,
}
