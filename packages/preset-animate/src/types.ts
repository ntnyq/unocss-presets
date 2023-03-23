export interface PresetAnimateOptions {
  /**
   * @default 'un-animate-'
   */
  variablePrefix?: string

  /**
   * @default true
   */
  preflight?: boolean

  /**
   * @default true
   */
  injectMediaQuery?: boolean

  /**
   * @default []
   */
  extendAnimations?: Animation[]
}

export interface AnimationObject {
  name: string
  extraStyle?: string
  keyframes: string
}

export type AnimationCreator = (options: PresetAnimateOptions) => AnimationObject

export type Animation = AnimationObject | AnimationCreator
