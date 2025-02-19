export interface PresetTransitionOptions {
  /**
   * class name for base transition style
   *
   * @default 'styled-transition'
   */
  class?: string

  /**
   * inject media query rule to disable animation for print and `prefers-reduced-motion`
   *
   * @default true
   */
  injectMediaQuery?: boolean

  /**
   * prefix for css variables, transition class and animation name
   *
   * @default 'st-'
   */
  prefix?: string
}
export type ResolvedOptions = Required<PresetTransitionOptions>

/**
 * Transition creator
 */
export type Transition = TransitionCreator | TransitionObject
export type TransitionCreator = (
  options: TransitionCreatorOptions,
) => TransitionObject
export interface TransitionCreatorOptions {
  cssVar: (value: string) => string
  cssVarUse: (value: string, defaultValue?: string) => string
}
export interface TransitionObject {
  /**
   * keyframes content
   */
  keyframes: string

  /**
   * transition style name
   */
  name: string

  /**
   * Alias for transition style name
   */
  alias?: string | string[]

  /**
   * Extra transition style e.g. overrides css variables
   */
  extraStyle?: string
}
