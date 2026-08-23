import type { AnimationObject } from '../types'
import { fadeInUpBig } from './fadeInUpBig'

/** @deprecated Use `fadeInUpBig` instead. */
export const fadeInRightUpBig: AnimationObject = {
  ...fadeInUpBig,
  name: 'fadeInRightUpBig',
}
