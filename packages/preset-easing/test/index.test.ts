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
      .easing-in-back{transition-timing-function:cubic-bezier(0.6, -0.28, 0.735, 0.045);}
      .easing-in-circ{transition-timing-function:cubic-bezier(0.6, 0.04, 0.98, 0.335);}
      .easing-in-cubic{transition-timing-function:cubic-bezier(0.55, 0.055, 0.675, 0.19);}
      .easing-in-expo{transition-timing-function:cubic-bezier(0.95, 0.05, 0.795, 0.035);}
      .easing-in-out-back{transition-timing-function:cubic-bezier(0.68, -0.55, 0.265, 1.55);}
      .easing-in-out-circ{transition-timing-function:cubic-bezier(0.785, 0.135, 0.15, 0.86);}
      .easing-in-out-cubic{transition-timing-function:cubic-bezier(0.645, 0.045, 0.355, 1);}
      .easing-in-out-expo{transition-timing-function:cubic-bezier(1, 0, 0, 1);}
      .easing-in-out-quad{transition-timing-function:cubic-bezier(0.455, 0.03, 0.515, 0.955);}
      .easing-in-out-quart{transition-timing-function:cubic-bezier(0.77, 0, 0.175, 1);}
      .easing-in-out-quint{transition-timing-function:cubic-bezier(0.86, 0, 0.07, 1);}
      .easing-in-out-sine{transition-timing-function:cubic-bezier(0.445, 0.05, 0.55, 0.95);}
      .easing-in-quad{transition-timing-function:cubic-bezier(0.55, 0.085, 0.68, 0.53);}
      .easing-in-quart{transition-timing-function:cubic-bezier(0.895, 0.03, 0.685, 0.22);}
      .easing-in-quint{transition-timing-function:cubic-bezier(0.755, 0.05, 0.855, 0.06);}
      .easing-in-sine{transition-timing-function:cubic-bezier(0.47, 0, 0.745, 0.715);}
      .easing-out-back{transition-timing-function:cubic-bezier(0.175, 0.885, 0.32, 1.275);}
      .easing-out-circ{transition-timing-function:cubic-bezier(0.075, 0.82, 0.165, 1);}
      .easing-out-cubic{transition-timing-function:cubic-bezier(0.215, 0.61, 0.355, 1);}
      .easing-out-expo{transition-timing-function:cubic-bezier(0.19, 1, 0.22, 1);}
      .easing-out-quad{transition-timing-function:cubic-bezier(0.25, 0.46, 0.45, 0.94);}
      .easing-out-quint{transition-timing-function:cubic-bezier(0.23, 1, 0.32, 1);}
      .easing-out-sine{transition-timing-function:cubic-bezier(0.39, 0.575, 0.565, 1);}"
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
      .e-in-back{transition-timing-function:cubic-bezier(0.6, -0.28, 0.735, 0.045);}
      .e-in-circ{transition-timing-function:cubic-bezier(0.6, 0.04, 0.98, 0.335);}
      .e-in-cubic{transition-timing-function:cubic-bezier(0.55, 0.055, 0.675, 0.19);}
      .e-in-expo{transition-timing-function:cubic-bezier(0.95, 0.05, 0.795, 0.035);}
      .e-in-out-back{transition-timing-function:cubic-bezier(0.68, -0.55, 0.265, 1.55);}
      .e-in-out-circ{transition-timing-function:cubic-bezier(0.785, 0.135, 0.15, 0.86);}
      .e-in-out-cubic{transition-timing-function:cubic-bezier(0.645, 0.045, 0.355, 1);}
      .e-in-out-expo{transition-timing-function:cubic-bezier(1, 0, 0, 1);}
      .e-in-out-quad{transition-timing-function:cubic-bezier(0.455, 0.03, 0.515, 0.955);}
      .e-in-out-quart{transition-timing-function:cubic-bezier(0.77, 0, 0.175, 1);}
      .e-in-out-quint{transition-timing-function:cubic-bezier(0.86, 0, 0.07, 1);}
      .e-in-out-sine{transition-timing-function:cubic-bezier(0.445, 0.05, 0.55, 0.95);}
      .e-in-quad{transition-timing-function:cubic-bezier(0.55, 0.085, 0.68, 0.53);}
      .e-in-quart{transition-timing-function:cubic-bezier(0.895, 0.03, 0.685, 0.22);}
      .e-in-quint{transition-timing-function:cubic-bezier(0.755, 0.05, 0.855, 0.06);}
      .e-in-sine{transition-timing-function:cubic-bezier(0.47, 0, 0.745, 0.715);}
      .e-out-back{transition-timing-function:cubic-bezier(0.175, 0.885, 0.32, 1.275);}
      .e-out-circ{transition-timing-function:cubic-bezier(0.075, 0.82, 0.165, 1);}
      .e-out-cubic{transition-timing-function:cubic-bezier(0.215, 0.61, 0.355, 1);}
      .e-out-expo{transition-timing-function:cubic-bezier(0.19, 1, 0.22, 1);}
      .e-out-quad{transition-timing-function:cubic-bezier(0.25, 0.46, 0.45, 0.94);}
      .e-out-quint{transition-timing-function:cubic-bezier(0.23, 1, 0.32, 1);}
      .e-out-sine{transition-timing-function:cubic-bezier(0.39, 0.575, 0.565, 1);}"
    `)
  })
})
