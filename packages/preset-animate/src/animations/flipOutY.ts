import type { AnimationCreator } from '../types'

export const flipOutY: AnimationCreator = options => ({
  name: 'flipOutY',
  extraStyle: `
    animation-duration: calc(var(--${options.variablePrefix}duration) * 0.75);
    backface-visibility: visible; !important
  `,
  keyframes: `
    from {
      transform: perspective(400px);
    }

    30% {
      transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
      opacity: 1;
    }

    to {
      transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
      opacity: 0;
    }
  `,
})
