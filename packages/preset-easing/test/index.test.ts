import { createGenerator } from '@unocss/core'
import { kebabCase } from 'uncase'
import { describe, expect, it } from 'vitest'
import { easings, presetEasing } from '../src'

describe('selectors', () => {
  it('base selectors', async () => {
    const targets = Object.keys(easings).map(
      name => `easing-${kebabCase(name)}`,
    )
    const generator = await createGenerator({
      presets: [presetEasing()],
    })
    const { css } = await generator.generate(targets.join('\n'))
    expect(css).toMatchSnapshot()
  })

  it('selectors when custom prefix', async () => {
    const targets = Object.keys(easings).map(name => `e-${kebabCase(name)}`)
    const generator = await createGenerator({
      presets: [presetEasing({ prefix: 'e-' })],
    })
    const { css } = await generator.generate(targets.join('\n'))
    expect(css).toMatchSnapshot()
  })
})
