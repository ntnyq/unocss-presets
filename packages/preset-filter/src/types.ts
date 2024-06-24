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

  /**
   * pseudo element after style
   */
  afterStyle?: string
}

export interface PresetFilterOptions {
  /**
   * customize filter selector prefix
   *
   * @default 'filter-'
   */
  prefix: string
}
