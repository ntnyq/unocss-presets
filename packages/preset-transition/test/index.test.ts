import { kebabCase } from '@ntnyq/utils'
import { createGenerator } from '@unocss/core'
import { describe, expect, it } from 'vitest'
import { presetTransition, transitions } from '../src'

describe('default', () => {
  it('default preflight', async () => {
    const generator = await createGenerator({
      presets: [presetTransition()],
    })
    const { css } = await generator.generate('')
    expect(css).toMatchSnapshot()
  })
})

describe('preset-animate options', () => {
  it('disable injectMediaQuery', async () => {
    const generator = await createGenerator({
      presets: [
        presetTransition({
          injectMediaQuery: false,
        }),
      ],
    })
    const { css } = await generator.generate('')
    expect(css).toMatchSnapshot()
  })

  it('customize prefix', async () => {
    const generator = await createGenerator({
      presets: [
        presetTransition({
          prefix: 'styled-transition',
        }),
      ],
    })
    const { css } = await generator.generate('')
    expect(css).toMatchSnapshot()
  })
})

describe('base selectors', () => {
  it('base selectors', async () => {
    const targets = ['styled-transition']
    const generator = await createGenerator({
      presets: [presetTransition()],
    })
    const { css } = await generator.generate(targets.join('\n'), {
      preflights: false,
    })
    expect(css).toMatchSnapshot()
  })

  it('base selectors with prefix', async () => {
    const targets = ['styled-transition']
    const generator = await createGenerator({
      presets: [
        presetTransition({
          prefix: 'styled-transition',
        }),
      ],
    })
    const { css } = await generator.generate(targets.join('\n'), {
      preflights: false,
    })
    expect(css).toMatchSnapshot()
  })
})

describe('transition selectors', async () => {
  const generator = await createGenerator({
    presets: [presetTransition({})],
  })
  const generatorWithPrefix = await createGenerator({
    presets: [
      presetTransition({
        prefix: 'styled-transition-',
      }),
    ],
  })

  Object.keys(transitions).forEach(transition => {
    it(`transition ${transition}`, async () => {
      const { css } = await generator.generate(`st-${kebabCase(transition)}`, {
        preflights: false,
      })
      expect(css).toMatchSnapshot()
    })

    it(`transition ${transition} with prefix`, async () => {
      const { css } = await generatorWithPrefix.generate(
        `styled-transition-${kebabCase(transition)}`,
        {
          preflights: false,
        },
      )
      expect(css).toMatchSnapshot()
    })
  })
})
