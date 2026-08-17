import { createGenerator } from '@unocss/core'
import { kebabCase } from 'uncase'
import { describe, expect, it } from 'vitest'
import { filters, presetFilter } from '../src'

describe('selectors', () => {
  it('base selectors', async () => {
    const inputs = filters.map(filter => `filter-${kebabCase(filter.name)}`),
     generator = await createGenerator({
      presets: [presetFilter()],
    }),
     { css } = await generator.generate(inputs.join('\n'))
    expect(css).toMatchSnapshot()
  })

  it('selectors when custom prefix', async () => {
    const inputs = filters.map(filter => `f-${kebabCase(filter.name)}`),
     generator = await createGenerator({
      presets: [presetFilter({ prefix: 'f-' })],
    }),
     { css } = await generator.generate(inputs.join('\n'))
    expect(css).toMatchSnapshot()
  })
})
