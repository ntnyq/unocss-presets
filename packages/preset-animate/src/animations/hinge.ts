import type { AnimationCreator } from '../types'

export const hinge: AnimationCreator = options => ({
  name: 'hinge',
  extraStyle: `
    transform-origin: top left;
    animation-duration: calc(var(--${options.variablePrefix}duration) * 2);
  `,
  keyframes: `@keyframes %ANIMATION_NAME% {
    0% {
      animation-timing-function: ease-in-out;
    }

    20%,
    60% {
      transform: rotate3d(0, 0, 1, 80deg);
      animation-timing-function: ease-in-out;
    }

    40%,
    80% {
      transform: rotate3d(0, 0, 1, 60deg);
      animation-timing-function: ease-in-out;
      opacity: 1;
    }

    to {
      transform: translate3d(0, 700px, 0);
      opacity: 0;
    }
  }`,
})
