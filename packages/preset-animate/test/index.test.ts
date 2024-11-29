import { kebabCase } from '@ntnyq/utils'
import { createGenerator } from '@unocss/core'
import { describe, expect, it } from 'vitest'
import { animations, presetAnimate } from '../src'

describe('default', () => {
  it('default preflight', async () => {
    const generator = await createGenerator({
      presets: [presetAnimate()],
    })
    const { css } = await generator.generate('')
    expect(css).toMatchSnapshot()
  })
})

describe('preset-animate options', () => {
  it('disable preflight', async () => {
    const generator = await createGenerator({
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
    const generator = await createGenerator({
      presets: [
        presetAnimate({
          injectMediaQuery: false,
        }),
      ],
    })
    const { css } = await generator.generate('')
    expect(css).toMatchSnapshot()
  })

  it('customize variablePrefix', async () => {
    const generator = await createGenerator({
      presets: [
        presetAnimate({
          variablePrefix: 'foo-bar-',
        }),
      ],
    })
    const { css } = await generator.generate('')
    expect(css).toMatchSnapshot()
  })
})

describe('base selectors', () => {
  it('base selectors', async () => {
    const targets = ['animated', 'animate-fast', 'animate-repeat-2', 'animate-delay-0.5']
    const generator = await createGenerator({
      presets: [presetAnimate()],
    })
    const { css } = await generator.generate(targets.join('\n'))
    expect(css).toMatchSnapshot()
  })

  it('base selectors with variablePrefix', async () => {
    const targets = ['animated', 'animate-duration-2', 'animate-repeat-2', 'animate-delay-2']
    const generator = await createGenerator({
      presets: [
        presetAnimate({
          variablePrefix: 'foo-bar-',
        }),
      ],
    })
    const { css } = await generator.generate(targets.join('\n'))
    expect(css).toMatchSnapshot()
  })

  it('invalid selectors', async () => {
    const targets = [
      'animated',
      'animate-foobar',
      'animate-repeat-foo',
      'animate-delay-bar',
      'animate-duration-baz',
    ]
    const generator = await createGenerator({
      presets: [presetAnimate()],
    })
    const { css } = await generator.generate(targets.join('\n'))
    expect(css).toMatchSnapshot()
  })
})

describe('animation selectors', async () => {
  const generator = await createGenerator({
    presets: [
      presetAnimate({
        preflight: false,
      }),
    ],
  })
  const generatorWithVariablePrefix = await createGenerator({
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
