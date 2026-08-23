import type { AnimationObject } from '../types'
import { fadeInUp } from './fadeInUp'

/** @deprecated Use `fadeInUp` instead. */
export const fadeInRightUp: AnimationObject = {
  ...fadeInUp,
  name: 'fadeInRightUp',
}
