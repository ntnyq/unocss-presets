export interface PresetAnimateOptions {
  prefix?: string

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
}

export interface AnimationObject {
  name: string
  extraStyle?: string
  keyframes: string
}

export type AnimationCreator = (options: PresetAnimateOptions) => AnimationObject

export type Animation = AnimationObject | AnimationCreator
