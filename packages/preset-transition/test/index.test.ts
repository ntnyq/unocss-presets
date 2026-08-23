import { createGenerator } from '@unocss/core'
import { presetMini } from '@unocss/preset-mini'
import { kebabCase } from 'uncase'
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

describe('transition compatibility', () => {
  it.each([
    ['st-wipe-in-up', 'stWipeInBottom'],
    ['st-wipe-in-down', 'stWipeInTop'],
    ['st-wipe-out-up', 'stWipeOutTop'],
    ['st-wipe-out-down', 'stWipeOutBottom'],
  ])('supports the %s alias', async (selector, animationName) => {
    const generator = await createGenerator({
      presets: [presetTransition()],
    })
    const { css } = await generator.generate(selector, { preflights: false })

    expect(css).toContain(`.${selector}{animation-name: ${animationName};`)
  })

  it('matches the upstream wipe directions', async () => {
    const generator = await createGenerator({
      presets: [presetTransition()],
    })
    const { css } = await generator.generate(
      [
        'st-wipe-in-left',
        'st-wipe-in-right',
        'st-wipe-out-top-left',
        'st-wipe-out-top-right',
      ].join(' '),
      { preflights: false },
    )

    expect(css).toMatch(
      /@keyframes stWipeInLeft[\s\S]*?0%[\s\S]*?var\(--st-wipe-right\)/u,
    )
    expect(css).toMatch(
      /@keyframes stWipeInRight[\s\S]*?0%[\s\S]*?var\(--st-wipe-left\)/u,
    )
    expect(css).toMatch(
      /@keyframes stWipeOutTopLeft[\s\S]*?0%[\s\S]*?var\(--st-wipe-bottom-right-in\)[\s\S]*?100%[\s\S]*?var\(--st-wipe-top-left-out\)/u,
    )
    expect(css).toMatch(
      /@keyframes stWipeOutTopRight[\s\S]*?0%[\s\S]*?var\(--st-wipe-bottom-left-in\)[\s\S]*?100%[\s\S]*?var\(--st-wipe-top-right-out\)/u,
    )
  })
})

describe('variants', () => {
  it('applies variants to transition selectors', async () => {
    const generator = await createGenerator({
      presets: [presetMini(), presetTransition()],
    })
    const { css } = await generator.generate('hover:st-circle-in-center', {
      preflights: false,
    })

    expect(css).toContain(
      String.raw`.hover\:st-circle-in-center:hover{animation-name: stCircleInCenter;`,
    )
    expect(css).not.toMatch(/(?<lineStart>^|\n)\.st-circle-in-center\{/u)
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
