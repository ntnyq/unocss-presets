/**
 * @borrows https://github.com/yui540/palette/blob/master/src/easing.ts
 */

/**
 * ease-in
 */
export const inSine = 'cubic-bezier(0.47, 0, 0.745, 0.715)'

export const inCubic = 'cubic-bezier(0.55, 0.055, 0.675, 0.19)'

export const inQuint = 'cubic-bezier(0.755, 0.05, 0.855, 0.06)'

export const inCirc = 'cubic-bezier(0.6, 0.04, 0.98, 0.335)'

export const inQuad = 'cubic-bezier(0.55, 0.085, 0.68, 0.53)'

export const inQuart = 'cubic-bezier(0.895, 0.03, 0.685, 0.22)'

export const inExpo = 'cubic-bezier(0.95, 0.05, 0.795, 0.035)'

export const inBack = 'cubic-bezier(0.6, -0.28, 0.735, 0.045)'

/**
 * ease-out
 */
export const outSine = 'cubic-bezier(0.39, 0.575, 0.565, 1)'

export const outCubic = 'cubic-bezier(0.215, 0.61, 0.355, 1)'

export const outQuint = 'cubic-bezier(0.23, 1, 0.32, 1)'

export const outCirc = 'cubic-bezier(0.075, 0.82, 0.165, 1)'

export const outQuad = 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'

export const outExpo = 'cubic-bezier(0.19, 1, 0.22, 1)'

export const outBack = 'cubic-bezier(0.175, 0.885, 0.32, 1.275)'

/**
 * ease-in-out
 */
export const inOutSine = 'cubic-bezier(0.445, 0.05, 0.55, 0.95)'

export const inOutCubic = 'cubic-bezier(0.645, 0.045, 0.355, 1)'

export const inOutQuint = 'cubic-bezier(0.86, 0, 0.07, 1)'

export const inOutCirc = 'cubic-bezier(0.785, 0.135, 0.15, 0.86)'

export const inOutQuad = 'cubic-bezier(0.455, 0.03, 0.515, 0.955)'

export const inOutQuart = 'cubic-bezier(0.77, 0, 0.175, 1)'

export const inOutExpo = 'cubic-bezier(1, 0, 0, 1)'

export const inOutBack = 'cubic-bezier(0.68, -0.55, 0.265, 1.55)'

/**
 * export
 */
export const easings = {
  // ease-in
  inSine,
  inCubic,
  inQuint,
  inCirc,
  inQuad,
  inQuart,
  inExpo,
  inBack,

  // ease-out
  outSine,
  outCubic,
  outQuint,
  outCirc,
  outQuad,
  // outQuart,
  outExpo,
  outBack,

  // ease-in-out
  inOutSine,
  inOutCubic,
  inOutQuint,
  inOutCirc,
  inOutQuad,
  inOutQuart,
  inOutExpo,
  inOutBack,
}
