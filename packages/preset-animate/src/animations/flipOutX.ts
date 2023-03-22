import type { AnimationCreator } from '../types'

export const flipOutX: AnimationCreator = options => ({
  name: 'flipOutX',
  extraStyle: `
    animation-duration: calc(var(--${options.variablePrefix}duration) * 0.75);
    backface-visibility: visible; !important
  `,
  keyframes: `@keyframes %ANIMATION_NAME% {
    from {
      transform: perspective(400px);
    }

    30% {
      transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
      opacity: 1;
    }

    to {
      transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
      opacity: 0;
    }
  }`,
})
