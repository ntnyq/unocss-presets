import { kebabCase } from '@ntnyq/utils'
import { createGenerator } from '@unocss/core'
import { describe, expect, it } from 'vitest'
import { animations, presetAnimate } from '../src'

describe('default', () => {
  it('default preflight', async () => {
    const generator = createGenerator({
      presets: [presetAnimate()],
    })
    const { css } = await generator.generate('')
    expect(css).toMatchInlineSnapshot(`
      "/* layer: preflights */
      :root { --un-animate-duration: 1s; --un-animate-delay: 1s; --un-animate-repeat: 1; }
      @media print, (prefers-reduced-motion: reduce) {
              .animated { animation-duration: 1ms !important; transition-duration: 1ms !important; animation-iteration-count: 1 !important; }
              .animated[class*='out'] { opacity: 0; }
            }"
    `)
  })
})

describe('preset-animate options', () => {
  it('disable preflight', async () => {
    const generator = createGenerator({
      presets: [
        presetAnimate({
          preflight: false,
        }),
      ],
    })
    const { css } = await generator.generate('')
    expect(css).toMatchInlineSnapshot('""')
  })

  it('disable injectMediaQuery', async () => {
    const generator = createGenerator({
      presets: [
        presetAnimate({
          injectMediaQuery: false,
        }),
      ],
    })
    const { css } = await generator.generate('')
    expect(css).toMatchInlineSnapshot(`
      "/* layer: preflights */
      :root { --un-animate-duration: 1s; --un-animate-delay: 1s; --un-animate-repeat: 1; }"
    `)
  })

  it('customize variablePrefix', async () => {
    const generator = createGenerator({
      presets: [
        presetAnimate({
          variablePrefix: 'foo-bar-',
        }),
      ],
    })
    const { css } = await generator.generate('')
    expect(css).toMatchInlineSnapshot(`
      "/* layer: preflights */
      :root { --foo-bar-duration: 1s; --foo-bar-delay: 1s; --foo-bar-repeat: 1; }
      @media print, (prefers-reduced-motion: reduce) {
              .animated { animation-duration: 1ms !important; transition-duration: 1ms !important; animation-iteration-count: 1 !important; }
              .animated[class*='out'] { opacity: 0; }
            }"
    `)
  })
})

describe('base selectors', () => {
  it('base selectors', async () => {
    const targets = ['animated', 'animate-fast', 'animate-repeat-2', 'animate-delay-0.5']
    const generator = createGenerator({
      presets: [presetAnimate()],
    })
    const { css } = await generator.generate(targets.join('\n'))
    expect(css).toMatchInlineSnapshot(`
      "/* layer: preflights */
      :root { --un-animate-duration: 1s; --un-animate-delay: 1s; --un-animate-repeat: 1; }
      @media print, (prefers-reduced-motion: reduce) {
              .animated { animation-duration: 1ms !important; transition-duration: 1ms !important; animation-iteration-count: 1 !important; }
              .animated[class*='out'] { opacity: 0; }
            }
      /* layer: default */
      .animated{animation-duration:var(--un-animate-duration);animation-fill-mode:both;}
      .animate-fast{animation-duration:calc(var(--un-animate-duration) * 0.8);}
      .animate-repeat-2{animation-iteration-count:calc(var(--un-animate-repeat) * 2);}
      .animate-delay-0\\.5{animation-delay:calc(var(--un-animate-delay) * 0.5);}"
    `)
  })

  it('base selectors with variablePrefix', async () => {
    const targets = ['animated', 'animate-duration-2', 'animate-repeat-2', 'animate-delay-2']
    const generator = createGenerator({
      presets: [
        presetAnimate({
          variablePrefix: 'foo-bar-',
        }),
      ],
    })
    const { css } = await generator.generate(targets.join('\n'))
    expect(css).toMatchInlineSnapshot(`
      "/* layer: preflights */
      :root { --foo-bar-duration: 1s; --foo-bar-delay: 1s; --foo-bar-repeat: 1; }
      @media print, (prefers-reduced-motion: reduce) {
              .animated { animation-duration: 1ms !important; transition-duration: 1ms !important; animation-iteration-count: 1 !important; }
              .animated[class*='out'] { opacity: 0; }
            }
      /* layer: default */
      .animated{animation-duration:var(--foo-bar-duration);animation-fill-mode:both;}
      .animate-repeat-2{animation-iteration-count:calc(var(--foo-bar-repeat) * 2);}
      .animate-delay-2{animation-delay:calc(var(--foo-bar-delay) * 2);}
      .animate-duration-2{animation-duration:calc(var(--foo-bar-duration) * 2);}"
    `)
  })

  it('invalid selectors', async () => {
    const targets = [
      'animated',
      'animate-foobar',
      'animate-repeat-foo',
      'animate-delay-bar',
      'animate-duration-baz',
    ]
    const generator = createGenerator({
      presets: [presetAnimate()],
    })
    const { css } = await generator.generate(targets.join('\n'))
    expect(css).toMatchInlineSnapshot(`
      "/* layer: preflights */
      :root { --un-animate-duration: 1s; --un-animate-delay: 1s; --un-animate-repeat: 1; }
      @media print, (prefers-reduced-motion: reduce) {
              .animated { animation-duration: 1ms !important; transition-duration: 1ms !important; animation-iteration-count: 1 !important; }
              .animated[class*='out'] { opacity: 0; }
            }
      /* layer: default */
      .animated{animation-duration:var(--un-animate-duration);animation-fill-mode:both;}"
    `)
  })
})

describe('animation selectors', () => {
  const generator = createGenerator({
    presets: [
      presetAnimate({
        preflight: false,
      }),
    ],
  })
  const generatorWithVariablePrefix = createGenerator({
    presets: [
      presetAnimate({
        preflight: false,
        variablePrefix: 'foo-bar-',
      }),
    ],
  })

  Object.keys(animations).forEach(animation => {
    it(`animation ${animation}`, async () => {
      const { css } = await generator.generate(`animation-${kebabCase(animation)}`)
      expect(css).toMatchSnapshot()
    })

    it(`animation ${animation} with variablePrefix`, async () => {
      const { css } = await generatorWithVariablePrefix.generate(
        `animation-${kebabCase(animation)}`,
      )
      expect(css).toMatchSnapshot()
    })
  })
})
