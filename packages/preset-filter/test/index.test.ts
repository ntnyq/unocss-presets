import { createGenerator } from '@unocss/core'
import { presetMini } from '@unocss/preset-mini'
import { kebabCase } from 'uncase'
import { describe, expect, it } from 'vitest'
import { filters, presetFilter } from '../src'

describe('selectors', () => {
  it('base selectors', async () => {
    const inputs = filters.map(filter => `filter-${kebabCase(filter.name)}`)
    const generator = await createGenerator({
      presets: [presetFilter()],
    })
    const { css } = await generator.generate(inputs.join('\n'))
    expect(css).toMatchSnapshot()
  })

  it('selectors when custom prefix', async () => {
    const inputs = filters.map(filter => `f-${kebabCase(filter.name)}`)
    const generator = await createGenerator({
      presets: [presetFilter({ prefix: 'f-' })],
    })
    const { css } = await generator.generate(inputs.join('\n'))
    expect(css).toMatchSnapshot()
  })

  it('keeps setup styles on filter utilities regardless of class order', async () => {
    const generator = await createGenerator({
      presets: [presetMini(), presetFilter()],
    })
    const { css } = await generator.generate('p-4 filter-aden')

    expect(css).toMatch(/\.filter-aden\{[^}]*position:\s*relative;/u)
    expect(css).toMatch(/\.filter-aden::before\{[^}]*display:\s*block;/u)
    expect(css).not.toContain('[class^="filter-"]')
  })

  it('applies variants before the filter pseudo-element', async () => {
    const generator = await createGenerator({
      presets: [presetMini(), presetFilter()],
    })
    const { css } = await generator.generate('hover:filter-aden')

    expect(css).toMatch(
      /\.hover\\:filter-aden:hover\{[^}]*filter:\s*sepia\(\.2\)/u,
    )
    expect(css).toMatch(/\.hover\\:filter-aden:hover::before\{/u)
    expect(css).not.toMatch(/(?<lineStart>^|\n)\.filter-aden\{/u)
  })

  it('matches the upstream Brooklyn and Stinson filters', async () => {
    const generator = await createGenerator({
      presets: [presetFilter()],
    })
    const { css } = await generator.generate('filter-brooklyn filter-stinson')

    expect(css).toContain(
      'filter: sepia(.25) contrast(1.25) brightness(1.25) hue-rotate(5deg)',
    )
    expect(css).toContain(
      'filter: sepia(.35) contrast(1.25) brightness(1.1) saturate(1.25)',
    )
  })
})
