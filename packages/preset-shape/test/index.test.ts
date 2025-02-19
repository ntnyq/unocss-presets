import { createGenerator } from '@unocss/core'
import { describe, expect, it } from 'vitest'
import { presetShape } from '../src'

const shapes = [
  'star-100px',
  'triangle-100px',
  'rhombus-100px',
  'hexagon-100px',
  'octagon-100px',
  'heart-100px',
  'parallelogram-100px',
]

describe('default', () => {
  it('should match snapshot', async () => {
    const generator = await createGenerator({
      presets: [presetShape()],
    })
    const { css } = await generator.generate(
      shapes.map(s => `shape-${s}`).join('\n'),
    )
    expect(css).toMatchSnapshot()
  })
})

describe('custom prefix', () => {
  it('should match snapshot', async () => {
    const generator = await createGenerator({
      presets: [presetShape({ prefix: 's-' })],
    })
    const { css } = await generator.generate(
      shapes.map(s => `s-${s}`).join('\n'),
    )
    expect(css).toMatchSnapshot()
  })
})
