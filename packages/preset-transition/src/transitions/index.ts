/**
 * @file transitions
 *
 * @see https://github.com/argyleink/transition.css
 */

import { circleInBottomLeft } from './circleInBottomLeft'
import { circleInBottomRight } from './circleInBottomRight'
import { circleInCenter } from './circleInCenter'
import { circleInHesitate } from './circleInHesitate'
import { circleInTopLeft } from './circleInTopLeft'
import { circleInTopRight } from './circleInTopRight'
import { circleOutBottomLeft } from './circleOutBottomLeft'
import { circleOutBottomRight } from './circleOutBottomRight'
import { circleOutCenter } from './circleOutCenter'
import { circleOutHesitate } from './circleOutHesitate'
import { circleOutTopLeft } from './circleOutTopLeft'
import { circleOutTopRight } from './circleOutTopRight'
import { diamondInCenter } from './diamondInCenter'
import { diamondInDoubleScale } from './diamondInDoubleScale'
import { diamondOutCenter } from './diamondOutCenter'
import { diamondOutDoubleScale } from './diamondOutDoubleScale'
import { polygonInOpposingCorners } from './polygonInOpposingCorners'
import { polygonOutOpposingCorners } from './polygonOutOpposingCorners'
import { squareInBottomLeft } from './squareInBottomLeft'
import { squareInBottomRight } from './squareInBottomRight'
import { squareInCenter } from './squareInCenter'
import { squareInHesitate } from './squareInHesitate'
import { squareInTopLeft } from './squareInTopLeft'
import { squareInTopRight } from './squareInTopRight'
import { squareOutBottomLeft } from './squareOutBottomLeft'
import { squareOutBottomRight } from './squareOutBottomRight'
import { squareOutCenter } from './squareOutCenter'
import { squareOutHesitate } from './squareOutHesitate'
import { squareOutTopLeft } from './squareOutTopLeft'
import { squareOutTopRight } from './squareOutTopRight'
import { wipeCinematicIn } from './wipeCinematicIn'
import { wipeCinematicOut } from './wipeCinematicOut'
import { wipeInBottom } from './wipeInBottom'
import { wipeInBottomLeft } from './wipeInBottomLeft'
import { wipeInBottomRight } from './wipeInBottomRight'
import { wipeInLeft } from './wipeInLeft'
import { wipeInRight } from './wipeInRight'
import { wipeInTop } from './wipeInTop'
import { wipeInTopLeft } from './wipeInTopLeft'
import { wipeInTopRight } from './wipeInTopRight'
import { wipeOutBottom } from './wipeOutBottom'
import { wipeOutBottomLeft } from './wipeOutBottomLeft'
import { wipeOutBottomRight } from './wipeOutBottomRight'
import { wipeOutLeft } from './wipeOutLeft'
import { wipeOutRight } from './wipeOutRight'
import { wipeOutTop } from './wipeOutTop'
import { wipeOutTopLeft } from './wipeOutTopLeft'
import { wipeOutTopRight } from './wipeOutTopRight'
import type { TransitionCreator } from '../types'

export const transitions: Record<string, TransitionCreator> = {
  // circles
  circleInCenter,
  circleInHesitate,
  circleInTopLeft,
  circleInTopRight,
  circleInBottomLeft,
  circleInBottomRight,
  circleOutCenter,
  circleOutHesitate,
  circleOutTopLeft,
  circleOutTopRight,
  circleOutBottomLeft,
  circleOutBottomRight,

  // squares
  squareInCenter,
  squareInHesitate,
  squareInTopLeft,
  squareInTopRight,
  squareInBottomLeft,
  squareInBottomRight,
  squareOutCenter,
  squareOutHesitate,
  squareOutTopLeft,
  squareOutTopRight,
  squareOutBottomLeft,
  squareOutBottomRight,

  // polygons
  polygonInOpposingCorners,
  polygonOutOpposingCorners,
  diamondInCenter,
  diamondInDoubleScale,
  diamondOutCenter,
  diamondOutDoubleScale,

  // wipes
  wipeInTop,
  wipeInBottom,
  wipeInLeft,
  wipeInRight,
  wipeInTopLeft,
  wipeInTopRight,
  wipeInBottomLeft,
  wipeInBottomRight,
  wipeOutTop,
  wipeOutBottom,
  wipeOutLeft,
  wipeOutRight,
  wipeOutTopLeft,
  wipeOutTopRight,
  wipeOutBottomLeft,
  wipeOutBottomRight,
  wipeCinematicIn,
  wipeCinematicOut,
}
