import type { Animation } from '../types'

export const rotateOutDownLeft: Animation = {
  name: 'rotateOutDownLeft',
  extraStyle: 'transform-origin: left bottom;',
  keyframes: `@keyframes %ANIMATION_NAME% {
    from {
      opacity: 1;
    }

    to {
      transform: rotate3d(0, 0, 1, 45deg);
      opacity: 0;
    }
  }`,
}
