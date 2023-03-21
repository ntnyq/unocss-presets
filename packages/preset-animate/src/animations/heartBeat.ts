import type { AnimationCreator, PresetAnimateOptions } from '../types'

export const heartBeat: AnimationCreator = (options: PresetAnimateOptions) => ({
  name: 'heartBeat',
  extraStyle: `
    animation-timing-function: ease-in-out;
    animation-duration: calc(var(--${options.variablePrefix}duration) * 1.3);
  `,
  keyframes: `@keyframes %ANIMATION_NAME% {
    0% {
      transform: scale(1);
    }

    14% {
      transform: scale(1.3);
    }

    28% {
      transform: scale(1);
    }

    42% {
      transform: scale(1.3);
    }

    70% {
      transform: scale(1);
    }
  }`,
})
