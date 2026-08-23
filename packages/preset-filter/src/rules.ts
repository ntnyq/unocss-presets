import type { DynamicRule, VariantHandler } from '@unocss/core'
import { kebabCase } from 'uncase'
import { filters } from './filters'
import type { PresetFilterOptions } from './types'

export const createFilterRules = (options: Required<PresetFilterOptions>) => {
  const rules = filters.map<DynamicRule>(filter => {
    const selector = `${options.prefix}${kebabCase(filter.name)}`

    return [
      new RegExp(`^${selector}$`, 'u'),
      function* generateFilterStyles(_match, { symbols }) {
        yield {
          [symbols.body]: `position: relative; ${filter.style}`,
        }

        if (filter.beforeStyle) {
          yield {
            [symbols.body]: `content: ""; display: block; height: 100%; left: 0; position: absolute; top: 0; width: 100%; z-index: 1; ${filter.beforeStyle}`,
            [symbols.variants]: (handlers: VariantHandler[]) => [
              ...handlers,
              {
                selector: currentSelector => `${currentSelector}::before`,
              },
            ],
          }
        }
      },
      {
        autocomplete: [selector],
      },
    ]
  })
  return rules
}
