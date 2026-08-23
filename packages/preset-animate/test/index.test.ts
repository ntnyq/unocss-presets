import { createGenerator } from '@unocss/core'
import { presetMini } from '@unocss/preset-mini'
import { kebabCase } from 'uncase'
import { describe, expect, it } from 'vitest'
import {
  animations,
  DEFAULT_OPTIONS,
  presetAnimate,
  resolveOptions,
} from '../src'

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
  it('does not mutate readonly options', () => {
    expect(() => presetAnimate(Object.freeze({}))).not.toThrow()
  })

  it('uses defaults for undefined options', () => {
    expect(
      resolveOptions({
        extendAnimations: undefined,
        injectMediaQuery: undefined,
        preflight: undefined,
        variablePrefix: undefined,
      }),
    ).toStrictEqual(DEFAULT_OPTIONS)
  })

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
    const targets = [
      'animated',
      'animate-infinite',
      'animate-infinate',
      'animate-fast',
      'animate-repeat-2',
      'animate-delay-0.5',
    ]
    const generator = await createGenerator({
      presets: [presetAnimate()],
    })
    const { css } = await generator.generate(targets.join('\n'))
    expect(css).toMatchSnapshot()
  })

  it('base selectors with variablePrefix', async () => {
    const targets = [
      'animated',
      'animate-duration-2',
      'animate-repeat-2',
      'animate-delay-2',
    ]
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

describe('animation compatibility', () => {
  it('supports the canonical fade-in-up names', async () => {
    const generator = await createGenerator({
      presets: [presetAnimate({ preflight: false })],
    })
    const { css } = await generator.generate(
      'animation-fade-in-up animation-fade-in-up-big',
    )

    expect(css).toContain(
      '.animation-fade-in-up{animation-name: unAnimationFadeInUp;',
    )
    expect(css).toContain(
      '.animation-fade-in-up-big{animation-name: unAnimationFadeInUpBig;',
    )
  })

  it('keeps the legacy fade-in-right-up names', async () => {
    const generator = await createGenerator({
      presets: [presetAnimate({ preflight: false })],
    })
    const { css } = await generator.generate(
      'animation-fade-in-right-up animation-fade-in-right-up-big',
    )

    expect(css).toContain('unAnimationFadeInRightUp')
    expect(css).toContain('unAnimationFadeInRightUpBig')
  })
})

describe('variants', () => {
  it('applies variants to animation selectors', async () => {
    const generator = await createGenerator({
      presets: [presetMini(), presetAnimate({ preflight: false })],
    })
    const { css } = await generator.generate('hover:animation-bounce')

    expect(css).toContain(
      String.raw`.hover\:animation-bounce:hover{animation-name: unAnimationBounce;`,
    )
    expect(css).not.toMatch(/(?<lineStart>^|\n)\.animation-bounce\{/u)
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
      const { css } = await generator.generate(
        `animation-${kebabCase(animation)}`,
      )
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
