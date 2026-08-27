import { createGenerator } from '@unocss/core'
import { kebabCase } from 'uncase'
import { describe, expect, it } from 'vitest'
import { easings, presetEasing } from '../src'

describe('selectors', () => {
  it('base selectors', async () => {
    const targets = Object.keys(easings).map(
      name => `easing-${kebabCase(name)}`,
    ),
     generator = await createGenerator({
      presets: [presetEasing()],
    }),
     { css } = await generator.generate(targets.join('\n'))
    expect(css).toMatchSnapshot()
  })

  it('selectors when custom prefix', async () => {
    const targets = Object.keys(easings).map(name => `e-${kebabCase(name)}`),
     generator = await createGenerator({
      presets: [presetEasing({ prefix: 'e-' })],
    }),
     { css } = await generator.generate(targets.join('\n'))
    expect(css).toMatchSnapshot()
  })
})
