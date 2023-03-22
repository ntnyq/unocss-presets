/**
 * @file animations
 *
 * @see https://github.com/animate-css/animate.css/blob/main/source/animate.css
 */

import { backInDown } from './backInDown'
import { backInLeft } from './backInLeft'
import { backInRight } from './backInRight'
import { backInUp } from './backInUp'
import { backOutDown } from './backOutDown'
import { backOutLeft } from './backOutLeft'
import { backOutRight } from './backOutRight'
import { backOutUp } from './backOutUp'
import { bounce } from './bounce'
import { bounceIn } from './bounceIn'
import { bounceInDown } from './bounceInDown'
import { bounceInLeft } from './bounceInLeft'
import { bounceInRight } from './bounceInRight'
import { bounceInUp } from './bounceInUp'
import { bounceOut } from './bounceOut'
import { bounceOutDown } from './bounceOutDown'
import { bounceOutLeft } from './bounceOutLeft'
import { bounceOutUp } from './bounceOutUp'
import { fadeIn } from './fadeIn'
import { fadeInBottomLeft } from './fadeInBottomLeft'
import { fadeInBottomRight } from './fadeInBottomRight'
import { fadeInDown } from './fadeInDown'
import { fadeInDownBig } from './fadeInDownBig'
import { fadeInLeft } from './fadeInLeft'
import { fadeInLeftBig } from './fadeInLeftBig'
import { fadeInRight } from './fadeInRight'
import { fadeInRightBig } from './fadeInRightBig'
import { fadeInRightUp } from './fadeInRightUp'
import { fadeInRightUpBig } from './fadeInRightUpBig'
import { fadeInTopLeft } from './fadeInTopLeft'
import { fadeInTopRight } from './fadeInTopRight'
import { fadeOut } from './fadeOut'
import { fadeOutBottomLeft } from './fadeOutBottomLeft'
import { fadeOutBottomRight } from './fadeOutBottomRight'
import { fadeOutDown } from './fadeOutDown'
import { fadeOutDownBig } from './fadeOutDownBig'
import { fadeOutLeft } from './fadeOutLeft'
import { fadeOutLeftBig } from './fadeOutLeftBig'
import { fadeOutRight } from './fadeOutRight'
import { fadeOutRightBig } from './fadeOutRightBig'
import { fadeOutTopLeft } from './fadeOutTopLeft'
import { fadeOutTopRight } from './fadeOutTopRight'
import { fadeOutUp } from './fadeOutUp'
import { fadeOutUpBig } from './fadeOutUpBig'
import { flash } from './flash'
import { flip } from './flip'
import { flipInX } from './flipInX'
import { flipInY } from './flipInY'
import { flipOutX } from './flipOutX'
import { flipOutY } from './flipOutY'
import { headShake } from './headShake'
import { heartBeat } from './heartBeat'
import { hinge } from './hinge'
import { jackInTheBox } from './jackInTheBox'
import { jello } from './jello'
import { lightSpeedInLeft } from './lightSpeedInLeft'
import { lightSpeedInRight } from './lightSpeedInRight'
import { lightSpeedOutLeft } from './lightSpeedOutLeft'
import { lightSpeedOutRight } from './lightSpeedOutRight'
import { pulse } from './pulse'
import { rollIn } from './rollIn'
import { rollOut } from './rollOut'
import { rotateIn } from './rotateIn'
import { rotateInDownLeft } from './rotateInDownLeft'
import { rotateInDownRight } from './rotateInDownRight'
import { rotateInUpLeft } from './rotateInUpLeft'
import { rotateInUpRight } from './rotateInUpRight'
import { rotateOut } from './rotateOut'
import { rotateOutDownLeft } from './rotateOutDownLeft'
import { rotateOutDownRight } from './rotateOutDownRight'
import { rotateOutUpLeft } from './rotateOutUpLeft'
import { rotateOutUpRight } from './rotateOutUpRight'
import { rubberBand } from './rubberBand'
import { shake } from './shake'
import { shakeX } from './shakeX'
import { shakeY } from './shakeY'
import { slideInDown } from './slideInDown'
import { slideInLeft } from './slideInLeft'
import { slideInRight } from './slideInRight'
import { slideInUp } from './slideInUp'
import { slideOutDown } from './slideOutDown'
import { slideOutLeft } from './slideOutLeft'
import { slideOutRight } from './slideOutRight'
import { slideOutUp } from './slideOutUp'
import { swing } from './swing'
import { tada } from './tada'
import { wobble } from './wobble'
import { zoomIn } from './zoomIn'
import { zoomInDown } from './zoomInDown'
import { zoomInLeft } from './zoomInLeft'
import { zoomInRight } from './zoomInRight'
import { zoomInUp } from './zoomInUp'
import { zoomOut } from './zoomOut'
import { zoomOutDown } from './zoomOutDown'
import { zoomOutLeft } from './zoomOutLeft'
import { zoomOutRight } from './zoomOutRight'
import { zoomOutUp } from './zoomOutUp'

export const animations = [
  // Attention_seekers
  bounce,
  flash,
  headShake,
  heartBeat,
  jello,
  pulse,
  rubberBand,
  shake,
  shakeX,
  shakeY,
  swing,
  tada,
  wobble,

  // Back entrances
  backInDown,
  backInLeft,
  backInRight,
  backInUp,

  // Back exits
  backOutDown,
  backOutLeft,
  backOutRight,
  backOutUp,

  // Bouncing entrances
  bounceIn,
  bounceInDown,
  bounceInLeft,
  bounceInRight,
  bounceInUp,

  // Bouncing exits
  bounceOut,
  bounceOutDown,
  bounceOutLeft,
  bounceInRight,
  bounceOutUp,

  // Fading entrances
  fadeIn,
  fadeInDown,
  fadeInDownBig,
  fadeInLeft,
  fadeInLeftBig,
  fadeInRight,
  fadeInRightBig,
  fadeInRightUp,
  fadeInRightUpBig,
  fadeInTopLeft,
  fadeInTopRight,
  fadeInBottomLeft,
  fadeInBottomRight,

  // Fading exits
  fadeOut,
  fadeOutDown,
  fadeOutDownBig,
  fadeOutLeft,
  fadeOutLeftBig,
  fadeOutRight,
  fadeOutRightBig,
  fadeOutUp,
  fadeOutUpBig,
  fadeOutTopLeft,
  fadeOutTopRight,
  fadeOutBottomLeft,
  fadeOutBottomRight,

  // Flippers
  flip,
  flipInX,
  flipInY,
  flipOutX,
  flipOutY,

  // Lightspeed
  lightSpeedInLeft,
  lightSpeedInRight,
  lightSpeedOutLeft,
  lightSpeedOutRight,

  // Rotating entrances
  rotateIn,
  rotateInDownLeft,
  rotateInDownRight,
  rotateInUpLeft,
  rotateInUpRight,

  // Rotating exits
  rotateOut,
  rotateOutDownLeft,
  rotateOutDownRight,
  rotateOutUpLeft,
  rotateOutUpRight,

  // Specials
  hinge,
  jackInTheBox,
  rollIn,
  rollOut,

  // Zooming entrances
  zoomIn,
  zoomInDown,
  zoomInLeft,
  zoomInRight,
  zoomInUp,

  // Zooming exits
  zoomOut,
  zoomOutDown,
  zoomOutLeft,
  zoomOutRight,
  zoomOutUp,

  // Sliding entrances
  slideInDown,
  slideInLeft,
  slideInRight,
  slideInUp,

  // Sliding exits
  slideOutDown,
  slideOutLeft,
  slideOutRight,
  slideOutUp,
]
