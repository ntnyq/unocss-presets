import { kebabCase } from 'uncase'
import { filters } from './filters'
import type { DynamicRule } from '@unocss/core'
import type { PresetFilterOptions } from './types'

export const createFilterRules = (options: Required<PresetFilterOptions>) => {
  const rules = filters.map<DynamicRule>(filter => [
    new RegExp(`^${options.prefix}${kebabCase(filter.name)}$`),
    () => [
      `.${options.prefix}${kebabCase(filter.name)} { ${filter.style} }`,
      filter.beforeStyle
        ? [
            `.${options.prefix}${kebabCase(filter.name)}:before { `,
            `  content: ""; ${filter.beforeStyle}`,
            ' }',
          ].join('\n')
        : '',
    ],
    {
      autocomplete: [`${options.prefix}${kebabCase(filter.name)}`],
    },
  ])
  return rules
}
