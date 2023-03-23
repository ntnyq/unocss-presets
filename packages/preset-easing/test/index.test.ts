import { createGenerator } from '@unocss/core'
import { describe, expect, it } from 'vitest'
import { easings, kekabCase, presetEasing } from '../src'

describe('selectors', () => {
  it('base selectors', async () => {
    const targets = Object.keys(easings).map(name => `easing-${kekabCase(name)}`)
    const generator = createGenerator({
      presets: [presetEasing()],
    })
    const { css } = await generator.generate(targets.join('\n'))
    expect(css).toMatchInlineSnapshot(`
      "/* layer: default */
      .easing-in-back{transition-timing-function:cubic-bezier(0.36, 0, 0.66, -0.56);}
      .easing-in-circ{transition-timing-function:cubic-bezier(0.55, 0, 1, 0.45);}
      .easing-in-cubic{transition-timing-function:cubic-bezier(0.32, 0, 0.67, 0);}
      .easing-in-expo{transition-timing-function:cubic-bezier(0.7, 0, 0.84, 0);}
      .easing-in-out-back{transition-timing-function:cubic-bezier(0.68, -0.6, 0.32, 1.6);}
      .easing-in-out-circ{transition-timing-function:cubic-bezier(0.85, 0, 0.15, 1);}
      .easing-in-out-cubic{transition-timing-function:cubic-bezier(0.65, 0, 0.35, 1);}
      .easing-in-out-expo{transition-timing-function:cubic-bezier(0.87, 0, 0.13, 1);}
      .easing-in-out-quad{transition-timing-function:cubic-bezier(0.45, 0, 0.55, 1);}
      .easing-in-out-quart{transition-timing-function:cubic-bezier(0.76, 0, 0.24, 1);}
      .easing-in-out-quint{transition-timing-function:cubic-bezier(0.83, 0, 0.17, 1);}
      .easing-in-out-sine{transition-timing-function:cubic-bezier(0.37, 0, 0.63, 1);}
      .easing-in-quad{transition-timing-function:cubic-bezier(0.11, 0, 0.5, 0);}
      .easing-in-quart{transition-timing-function:cubic-bezier(0.5, 0, 0.75, 0);}
      .easing-in-quint{transition-timing-function:cubic-bezier(0.64, 0, 0.78, 0);}
      .easing-in-sine{transition-timing-function:cubic-bezier(0.12, 0, 0.39, 0);}
      .easing-out-back{transition-timing-function:cubic-bezier(0.34, 1.56, 0.64, 1);}
      .easing-out-circ{transition-timing-function:cubic-bezier(0, 0.55, 0.45, 1);}
      .easing-out-cubic{transition-timing-function:cubic-bezier(0.33, 1, 0.68, 1);}
      .easing-out-expo{transition-timing-function:cubic-bezier(0.16, 1, 0.3, 1);}
      .easing-out-quad{transition-timing-function:cubic-bezier(0.5, 1, 0.89, 1);}
      .easing-out-quart{transition-timing-function:cubic-bezier(0.25, 1, 0.5, 1);}
      .easing-out-quint{transition-timing-function:cubic-bezier(0.22, 1, 0.36, 1);}
      .easing-out-sine{transition-timing-function:cubic-bezier(0.61, 1, 0.88, 1);}"
    `)
  })

  it('selectors when custom prefix', async () => {
    const targets = Object.keys(easings).map(name => `e-${kekabCase(name)}`)
    const generator = createGenerator({
      presets: [presetEasing({ prefix: 'e-' })],
    })
    const { css } = await generator.generate(targets.join('\n'))
    expect(css).toMatchInlineSnapshot(`
      "/* layer: default */
      .e-in-back{transition-timing-function:cubic-bezier(0.36, 0, 0.66, -0.56);}
      .e-in-circ{transition-timing-function:cubic-bezier(0.55, 0, 1, 0.45);}
      .e-in-cubic{transition-timing-function:cubic-bezier(0.32, 0, 0.67, 0);}
      .e-in-expo{transition-timing-function:cubic-bezier(0.7, 0, 0.84, 0);}
      .e-in-out-back{transition-timing-function:cubic-bezier(0.68, -0.6, 0.32, 1.6);}
      .e-in-out-circ{transition-timing-function:cubic-bezier(0.85, 0, 0.15, 1);}
      .e-in-out-cubic{transition-timing-function:cubic-bezier(0.65, 0, 0.35, 1);}
      .e-in-out-expo{transition-timing-function:cubic-bezier(0.87, 0, 0.13, 1);}
      .e-in-out-quad{transition-timing-function:cubic-bezier(0.45, 0, 0.55, 1);}
      .e-in-out-quart{transition-timing-function:cubic-bezier(0.76, 0, 0.24, 1);}
      .e-in-out-quint{transition-timing-function:cubic-bezier(0.83, 0, 0.17, 1);}
      .e-in-out-sine{transition-timing-function:cubic-bezier(0.37, 0, 0.63, 1);}
      .e-in-quad{transition-timing-function:cubic-bezier(0.11, 0, 0.5, 0);}
      .e-in-quart{transition-timing-function:cubic-bezier(0.5, 0, 0.75, 0);}
      .e-in-quint{transition-timing-function:cubic-bezier(0.64, 0, 0.78, 0);}
      .e-in-sine{transition-timing-function:cubic-bezier(0.12, 0, 0.39, 0);}
      .e-out-back{transition-timing-function:cubic-bezier(0.34, 1.56, 0.64, 1);}
      .e-out-circ{transition-timing-function:cubic-bezier(0, 0.55, 0.45, 1);}
      .e-out-cubic{transition-timing-function:cubic-bezier(0.33, 1, 0.68, 1);}
      .e-out-expo{transition-timing-function:cubic-bezier(0.16, 1, 0.3, 1);}
      .e-out-quad{transition-timing-function:cubic-bezier(0.5, 1, 0.89, 1);}
      .e-out-quart{transition-timing-function:cubic-bezier(0.25, 1, 0.5, 1);}
      .e-out-quint{transition-timing-function:cubic-bezier(0.22, 1, 0.36, 1);}
      .e-out-sine{transition-timing-function:cubic-bezier(0.61, 1, 0.88, 1);}"
    `)
  })
})
