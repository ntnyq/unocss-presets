/**
 * Animation creator
 */
export type Animation = AnimationCreator | AnimationObject

export type AnimationCreator = (options: PresetAnimateOptions) => AnimationObject
export interface AnimationObject {
  /**
   * keyframes content
   */
  keyframes: string

  /**
   * animationName
   */
  name: string

  /**
   * extra animation style e.g. `transform-origin`
   */
  extraStyle?: string
}
export interface PresetAnimateOptions {
  /**
   * user custom animations
   *
   * @default []
   */
  extendAnimations?: Animation[]

  /**
   * inject media query rule to disable animation for print and `prefers-reduced-motion`
   *
   * @default true
   */
  injectMediaQuery?: boolean

  /**
   * use builtin css variables, provide manually if set to `false`
   *
   * @default true
   */
  preflight?: boolean

  /**
   * css variables prefix
   *
   * @default 'un-animate-'
   */
  variablePrefix?: string
}
