export interface Filter {
  /**
   * filter name
   */
  name: string

  /**
   * filter style
   */
  style: string

  /**
   * pseudo element before style
   */
  beforeStyle?: string
}

export interface PresetFilterOptions {
  /**
   * customize filter selector prefix
   *
   * @default 'filter-'
   */
  prefix?: string
}
