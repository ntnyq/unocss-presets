import { kebabCase } from '@ntnyq/utils'
import { createGenerator } from '@unocss/core'
import { describe, expect, it } from 'vitest'
import { presetTransition, transitions } from '../src'

describe('default', () => {
  it('default preflight', async () => {
    const generator = createGenerator({
      presets: [presetTransition()],
    })
    const { css } = await generator.generate('')
    expect(css).toMatchInlineSnapshot(`
      "/* layer: preflights */
      :root {
              --st-circle-center-center-out: circle(0%);
              --st-circle-center-center-in: circle(125%);
              --st-circle-hesitate: circle(40%);
              --st-circle-top-left-out: circle(0% at top left);
              --st-circle-top-right-out: circle(0% at top right);
              --st-circle-bottom-right-out: circle(0% at bottom right);
              --st-circle-bottom-left-out: circle(0% at bottom left);
              --st-circle-top-left-in: circle(150% at top left);
              --st-circle-top-right-in: circle(150% at top right);
              --st-circle-bottom-right-in: circle(150% at bottom right);
              --st-circle-bottom-left-in: circle(150% at bottom left);
              --st-wipe-in: inset(0 0 0 0);
              --st-wipe-bottom: inset(100% 0 0 0);
              --st-wipe-left: inset(0 100% 0 0);
              --st-wipe-top: inset(0 0 100% 0);
              --st-wipe-right: inset(0 0 0 100%);
              --st-wipe-top-left-in: polygon(50% -50%, 150% 50%, 50% 150%, -50% 50%);
              --st-wipe-top-right-in: polygon(50% -50%, 150% 50%, 50% 150%, -50% 50%);
              --st-wipe-bottom-left-in: polygon(50% -50%, 150% 50%, 50% 150%, -50% 50%);
              --st-wipe-bottom-right-in: polygon(-50% 0%, 200% 0, 0 200%, 0 -50%);
              --st-wipe-top-left-out: polygon(0 0, 0 0, 0 0, 0 50%);
              --st-wipe-top-right-out: polygon(50% -50%, 150% 50%, 150% 50%, 50% -50%);
              --st-wipe-bottom-left-out: polygon(-50% 50%, 50% 150%, 50% 150%, -50% 50%);
              --st-wipe-bottom-right-out: polygon(150% 50%, 150% 50%, 50% 150%, 50% 150%);
              --st-wipe-cinematic-out: inset(100% 0 100% 0);
              --st-wipe-cinematic-mid: inset(10% 0 10% 0);
              --st-square-hesitate: inset(33% 33% 33% 33%);
              --st-square-out: inset(100% 100% 100% 100%);
              --st-square-in: var(--st-wipe-in);
              --st-square-top-left-out: inset(0 100% 100% 0);
              --st-square-top-right-out: inset(0 0 100% 100%);
              --st-square-bottom-left-out: inset(100% 100% 0 0);
              --st-square-bottom-right-out: inset(100% 0 0 100%);
              --st-diamond-center-in: polygon(-50% 50%, 50% -50%, 150% 50%, 50% 150%);
              --st-diamond-center-out: polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%);
              --st-diamond-hesitate: polygon(45% 50%, 50% 25%, 55% 50%, 50% 75%);
              --st-opposing-corners-in: polygon(0 0, 0 100%, 100% 100%, 100% 0);
              --st-opposing-corners-out: polygon(0 0, 50% 50%, 100% 100%, 50% 50%);
            }
      @media (prefers-reduced-motion: reduce), print {
              .styled-transition {
                animation-duration: 1ms !important;
                transition-duration: 1ms !important;
                animation-iteration-count: 1 !important;
              }
            }"
    `)
  })
})

describe('preset-animate options', () => {
  it('disable injectMediaQuery', async () => {
    const generator = createGenerator({
      presets: [
        presetTransition({
          injectMediaQuery: false,
        }),
      ],
    })
    const { css } = await generator.generate('')
    expect(css).toMatchInlineSnapshot(`
      "/* layer: preflights */
      :root {
              --st-circle-center-center-out: circle(0%);
              --st-circle-center-center-in: circle(125%);
              --st-circle-hesitate: circle(40%);
              --st-circle-top-left-out: circle(0% at top left);
              --st-circle-top-right-out: circle(0% at top right);
              --st-circle-bottom-right-out: circle(0% at bottom right);
              --st-circle-bottom-left-out: circle(0% at bottom left);
              --st-circle-top-left-in: circle(150% at top left);
              --st-circle-top-right-in: circle(150% at top right);
              --st-circle-bottom-right-in: circle(150% at bottom right);
              --st-circle-bottom-left-in: circle(150% at bottom left);
              --st-wipe-in: inset(0 0 0 0);
              --st-wipe-bottom: inset(100% 0 0 0);
              --st-wipe-left: inset(0 100% 0 0);
              --st-wipe-top: inset(0 0 100% 0);
              --st-wipe-right: inset(0 0 0 100%);
              --st-wipe-top-left-in: polygon(50% -50%, 150% 50%, 50% 150%, -50% 50%);
              --st-wipe-top-right-in: polygon(50% -50%, 150% 50%, 50% 150%, -50% 50%);
              --st-wipe-bottom-left-in: polygon(50% -50%, 150% 50%, 50% 150%, -50% 50%);
              --st-wipe-bottom-right-in: polygon(-50% 0%, 200% 0, 0 200%, 0 -50%);
              --st-wipe-top-left-out: polygon(0 0, 0 0, 0 0, 0 50%);
              --st-wipe-top-right-out: polygon(50% -50%, 150% 50%, 150% 50%, 50% -50%);
              --st-wipe-bottom-left-out: polygon(-50% 50%, 50% 150%, 50% 150%, -50% 50%);
              --st-wipe-bottom-right-out: polygon(150% 50%, 150% 50%, 50% 150%, 50% 150%);
              --st-wipe-cinematic-out: inset(100% 0 100% 0);
              --st-wipe-cinematic-mid: inset(10% 0 10% 0);
              --st-square-hesitate: inset(33% 33% 33% 33%);
              --st-square-out: inset(100% 100% 100% 100%);
              --st-square-in: var(--st-wipe-in);
              --st-square-top-left-out: inset(0 100% 100% 0);
              --st-square-top-right-out: inset(0 0 100% 100%);
              --st-square-bottom-left-out: inset(100% 100% 0 0);
              --st-square-bottom-right-out: inset(100% 0 0 100%);
              --st-diamond-center-in: polygon(-50% 50%, 50% -50%, 150% 50%, 50% 150%);
              --st-diamond-center-out: polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%);
              --st-diamond-hesitate: polygon(45% 50%, 50% 25%, 55% 50%, 50% 75%);
              --st-opposing-corners-in: polygon(0 0, 0 100%, 100% 100%, 100% 0);
              --st-opposing-corners-out: polygon(0 0, 50% 50%, 100% 100%, 50% 50%);
            }"
    `)
  })

  it('customize prefix', async () => {
    const generator = createGenerator({
      presets: [
        presetTransition({
          prefix: 'styled-transition',
        }),
      ],
    })
    const { css } = await generator.generate('')
    expect(css).toMatchInlineSnapshot(`
      "/* layer: preflights */
      :root {
              --styled-transitioncircle-center-center-out: circle(0%);
              --styled-transitioncircle-center-center-in: circle(125%);
              --styled-transitioncircle-hesitate: circle(40%);
              --styled-transitioncircle-top-left-out: circle(0% at top left);
              --styled-transitioncircle-top-right-out: circle(0% at top right);
              --styled-transitioncircle-bottom-right-out: circle(0% at bottom right);
              --styled-transitioncircle-bottom-left-out: circle(0% at bottom left);
              --styled-transitioncircle-top-left-in: circle(150% at top left);
              --styled-transitioncircle-top-right-in: circle(150% at top right);
              --styled-transitioncircle-bottom-right-in: circle(150% at bottom right);
              --styled-transitioncircle-bottom-left-in: circle(150% at bottom left);
              --styled-transitionwipe-in: inset(0 0 0 0);
              --styled-transitionwipe-bottom: inset(100% 0 0 0);
              --styled-transitionwipe-left: inset(0 100% 0 0);
              --styled-transitionwipe-top: inset(0 0 100% 0);
              --styled-transitionwipe-right: inset(0 0 0 100%);
              --styled-transitionwipe-top-left-in: polygon(50% -50%, 150% 50%, 50% 150%, -50% 50%);
              --styled-transitionwipe-top-right-in: polygon(50% -50%, 150% 50%, 50% 150%, -50% 50%);
              --styled-transitionwipe-bottom-left-in: polygon(50% -50%, 150% 50%, 50% 150%, -50% 50%);
              --styled-transitionwipe-bottom-right-in: polygon(-50% 0%, 200% 0, 0 200%, 0 -50%);
              --styled-transitionwipe-top-left-out: polygon(0 0, 0 0, 0 0, 0 50%);
              --styled-transitionwipe-top-right-out: polygon(50% -50%, 150% 50%, 150% 50%, 50% -50%);
              --styled-transitionwipe-bottom-left-out: polygon(-50% 50%, 50% 150%, 50% 150%, -50% 50%);
              --styled-transitionwipe-bottom-right-out: polygon(150% 50%, 150% 50%, 50% 150%, 50% 150%);
              --styled-transitionwipe-cinematic-out: inset(100% 0 100% 0);
              --styled-transitionwipe-cinematic-mid: inset(10% 0 10% 0);
              --styled-transitionsquare-hesitate: inset(33% 33% 33% 33%);
              --styled-transitionsquare-out: inset(100% 100% 100% 100%);
              --styled-transitionsquare-in: var(--styled-transitionwipe-in);
              --styled-transitionsquare-top-left-out: inset(0 100% 100% 0);
              --styled-transitionsquare-top-right-out: inset(0 0 100% 100%);
              --styled-transitionsquare-bottom-left-out: inset(100% 100% 0 0);
              --styled-transitionsquare-bottom-right-out: inset(100% 0 0 100%);
              --styled-transitiondiamond-center-in: polygon(-50% 50%, 50% -50%, 150% 50%, 50% 150%);
              --styled-transitiondiamond-center-out: polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%);
              --styled-transitiondiamond-hesitate: polygon(45% 50%, 50% 25%, 55% 50%, 50% 75%);
              --styled-transitionopposing-corners-in: polygon(0 0, 0 100%, 100% 100%, 100% 0);
              --styled-transitionopposing-corners-out: polygon(0 0, 50% 50%, 100% 100%, 50% 50%);
            }
      @media (prefers-reduced-motion: reduce), print {
              .styled-transition {
                animation-duration: 1ms !important;
                transition-duration: 1ms !important;
                animation-iteration-count: 1 !important;
              }
            }"
    `)
  })
})

describe('base selectors', () => {
  it('base selectors', async () => {
    const targets = ['styled-transition']
    const generator = createGenerator({
      presets: [presetTransition()],
    })
    const { css } = await generator.generate(targets.join('\n'), {
      preflights: false,
    })
    expect(css).toMatchInlineSnapshot(`
      "/* layer: default */
      .styled-transition{animation-delay:var(--st-transition-delay, 0);animation-duration:var(--st-transition-duration, 2.5s);animation-timing-function:var(--st-transition-easing, cubic-bezier(0.25, 1, 0.3, 1));animation-fill-mode:both;will-change:clip-path;}"
    `)
  })

  it('base selectors with prefix', async () => {
    const targets = ['styled-transition']
    const generator = createGenerator({
      presets: [
        presetTransition({
          prefix: 'styled-transition',
        }),
      ],
    })
    const { css } = await generator.generate(targets.join('\n'), {
      preflights: false,
    })
    expect(css).toMatchInlineSnapshot(`
      "/* layer: default */
      .styled-transition{animation-delay:var(--styled-transitiontransition-delay, 0);animation-duration:var(--styled-transitiontransition-duration, 2.5s);animation-timing-function:var(--styled-transitiontransition-easing, cubic-bezier(0.25, 1, 0.3, 1));animation-fill-mode:both;will-change:clip-path;}"
    `)
  })
})

describe('transition selectors', () => {
  const generator = createGenerator({
    presets: [presetTransition({})],
  })
  const generatorWithPrefix = createGenerator({
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
