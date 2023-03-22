import type { Animation } from '../types'

export const rotateOutUpRight: Animation = {
  name: 'rotateOutUpRight',
  extraStyle: 'transform-origin: right bottom;',
  keyframes: `@keyframes %ANIMATION_NAME% {
    from {
      opacity: 1;
    }

    to {
      transform: rotate3d(0, 0, 1, 90deg);
      opacity: 0;
    }
  }`,
}
