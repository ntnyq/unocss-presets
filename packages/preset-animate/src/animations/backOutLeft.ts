import type { Animation } from '../types'

export const backOutLeft: Animation = {
  name: 'backOutLeft',
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
      transform: translateX(-2000px) scale(0.7);
      opacity: 0.7;
    }
  }`,
}
