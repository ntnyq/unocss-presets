import type { AnimationObject } from '../types'

export const bounceOutLeft: AnimationObject = {
  name: 'bounceOutLeft',
  keyframes: `@keyframes %ANIMATION_NAME% {
    20% {
      opacity: 1;
      transform: translate3d(20px, 0, 0) scaleX(0.9);
    }

    to {
      opacity: 0;
      transform: translate3d(-2000px, 0, 0) scaleX(2);
    }
  }`,
}
