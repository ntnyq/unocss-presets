import type { AnimationObject } from '../types'

export const lightSpeedInLeft: AnimationObject = {
  name: 'lightSpeedInLeft',
  extraStyle: 'animation-timing-function: ease-out;',
  keyframes: `
    from {
      transform: translate3d(-100%, 0, 0) skewX(30deg);
      opacity: 0;
    }

    60% {
      transform: skewX(-20deg);
      opacity: 1;
    }

    80% {
      transform: skewX(5deg);
    }

    to {
      transform: translate3d(0, 0, 0);
    }
  `,
}
