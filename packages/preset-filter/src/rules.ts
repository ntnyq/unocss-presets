import { kebabCase } from '@ntnyq/utils'
import { filters } from './filters'
import type { DynamicRule } from '@unocss/core'
import type { PresetFilterOptions } from './types'

export const createFilterRules = (options: Required<PresetFilterOptions>) => {
  const rules = filters.map<DynamicRule>(filter => [
    new RegExp(`^${options.prefix}${kebabCase(filter.name)}$`),
    () => {
      const styles = [
        `.${options.prefix}${kebabCase(filter.name)} {
           ${filter.style}
        }`,
      ]
      if (filter.beforeStyle) {
        styles.push(`.${options.prefix}${kebabCase(filter.name)}:before {
           ${filter.beforeStyle}
        }`)
      }
      if (filter.afterStyle) {
        styles.push(`.${options.prefix}${kebabCase(filter.name)}:after {
           ${filter.afterStyle}
        }`)
      }
      return styles
    },
    {
      autocomplete: [`${options.prefix}${kebabCase(filter.name)}`],
    },
  ])
  return rules
}
