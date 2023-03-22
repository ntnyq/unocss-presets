import type { Animation } from '../types'

export const rotateInDownLeft: Animation = {
  name: 'rotateInDownLeft',
  extraStyle: 'transform-origin: left bottom;',
  keyframes: `@keyframes %ANIMATION_NAME% {
    from {
      transform: rotate3d(0, 0, 1, -45deg);
      opacity: 0;
    }

    to {
      transform: translate3d(0, 0, 0);
      opacity: 1;
    }
  }`,
}
