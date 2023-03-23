import type { AnimationObject } from '../types'

export const fadeOutBottomRight: AnimationObject = {
  name: 'fadeOutBottomRight',
  keyframes: `
    from {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
    to {
      opacity: 0;
      transform: translate3d(100%, 100%, 0);
    }
  `,
}
