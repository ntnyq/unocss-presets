import { kekabCase } from '@ntnyq/utils'
import { filters } from './filters'
import type { PresetFilterOptions } from './types'
import type { DynamicRule } from '@unocss/core'

export const createFilterRules = (options: PresetFilterOptions) => {
  const rules = filters.map<DynamicRule>(filter => [
    new RegExp(`^${options.prefix}${kekabCase(filter.name)}$`),
    () => {
      const styles = [
        `.${options.prefix}${kekabCase(filter.name)} {
           ${filter.style}
        }`,
      ]
      if (filter.beforeStyle) {
        styles.push(`.${options.prefix}${kekabCase(filter.name)}:before {
           ${filter.beforeStyle}
        }`)
      }
      if (filter.afterStyle) {
        styles.push(`.${options.prefix}${kekabCase(filter.name)}:after {
           ${filter.afterStyle}
        }`)
      }
      return styles
    },
    {
      autocomplete: [`${options.prefix}${kekabCase(filter.name)}`],
    },
  ])
  return rules
}
