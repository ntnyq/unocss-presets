export interface PresetTransitionOptions {
  /**
   * class name for base transition style
   *
   * @default 'styled-transition'
   */
  class?: string

  /**
   * prefix for css variables, transition class and animation name
   *
   * @default 'st-'
   */
  prefix?: string

  /**
   * inject media query rule to disable animation for print and `prefers-reduced-motion`
   *
   * @default true
   */
  injectMediaQuery?: boolean
}
export type ResolvedOptions = Required<PresetTransitionOptions>

export interface TransitionObject {
  /**
   * transition style name
   */
  name: string

  /**
   * Extra transition style e.g. overrides css variables
   */
  extraStyle?: string

  /**
   * keyframes content
   */
  keyframes: string

  /**
   * Alias for transition style name
   */
  alias?: string | string[]
}

export interface TransitionCreatorOptions {
  cssVar: (value: string) => string
  cssVarUse: (value: string, defaultValue?: string) => string
}

export type TransitionCreator = (options: TransitionCreatorOptions) => TransitionObject

export type Transition = TransitionObject | TransitionCreator
