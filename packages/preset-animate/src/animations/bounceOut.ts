import type { AnimationCreator } from '../types'

export const bounceOut: AnimationCreator = options => ({
  name: 'bounceOut',
  extraStyle: `animation-duration: calc(var(--${options.variablePrefix}duration) * 0.75);`,
  keyframes: `
    20% {
      transform: scale3d(0.9, 0.9, 0.9);
    }

    50%,
    55% {
      opacity: 1;
      transform: scale3d(1.1, 1.1, 1.1);
    }

    to {
      opacity: 0;
      transform: scale3d(0.3, 0.3, 0.3);
    }
  `,
})
