import type { Animation } from '../types'

export const rotateInUpRight: Animation = {
  name: 'rotateInUpRight',
  extraStyle: 'transform-origin: right bottom;',
  keyframes: `@keyframes %ANIMATION_NAME% {
    from {
      transform: rotate3d(0, 0, 1, -90deg);
      opacity: 0;
    }

    to {
      transform: translate3d(0, 0, 0);
      opacity: 1;
    }
  }`,
}
