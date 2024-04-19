export interface AnimationObject {
  /**
   * animationName
   */
  name: string

  /**
   * extra animation style e.g. `transform-origin`
   */
  extraStyle?: string

  /**
   * keyframes content
   */
  keyframes: string
}

export type AnimationCreator = (options: PresetAnimateOptions) => AnimationObject

export type Animation = AnimationObject | AnimationCreator

export interface PresetAnimateOptions {
  /**
   * css variables prefix
   *
   * @default 'un-animate-'
   */
  variablePrefix?: string

  /**
   * use builtin css variables, provide manually if set to `false`
   *
   * @default true
   */
  preflight?: boolean

  /**
   * inject media query rule to disable animation for print and `prefers-reduced-motion`
   *
   * @default true
   */
  injectMediaQuery?: boolean

  /**
   * user custom animations
   *
   * @default []
   */
  extendAnimations?: Animation[]
}
