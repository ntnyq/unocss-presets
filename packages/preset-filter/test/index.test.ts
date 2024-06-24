import { createGenerator } from '@unocss/core'
import { describe, expect, it } from 'vitest'
import { kekabCase } from '@ntnyq/utils'
import { filters, presetFilter } from '../src'

describe('selectors', () => {
  it('base selectors', async () => {
    const inputs = filters.map(filter => `filter-${kekabCase(filter.name)}`)
    const generator = createGenerator({
      presets: [presetFilter()],
    })
    const { css } = await generator.generate(inputs.join('\n'))
    expect(css).toMatchInlineSnapshot(`
      "/* layer: preflights */

            [class^="filter-"] {
              position: relative;
            }
            [class^="filter-"]:before {
              display: block;
              height: 100%;
              left: 0;
              position: absolute;
              top: 0;
              width: 100%;
              z-index: 1;
            }
            
      /* layer: default */
      .filter-1977 {
                 filter: filter: sepia(.5) hue-rotate(-30deg) saturate(1.4)
              }
      .filter-aden {
                 filter: sepia(.2) brightness(1.15) saturate(1.4)
              }
      .filter-aden:before {
                 
        background: rgba(125, 105, 24, .1);
        content: "";
        mix-blend-mode: multiply;
          
              }
      .filter-amaro {
                 filter: sepia(.35) contrast(1.1) brightness(1.2) saturate(1.3)
              }
      .filter-amaro:before {
                 
        background: rgba(125, 105, 24, .2);
        content: "";
        mix-blend-mode: overlay;
          
              }
      .filter-ashby {
                 filter: sepia(.5) contrast(1.2) saturate(1.8)
              }
      .filter-ashby:before {
                 
        background: rgba(125, 105, 24, .35);
        content: "";
        mix-blend-mode: lighten;
          
              }
      .filter-brannan {
                 filter: sepia(.4) contrast(1.25) brightness(1.1) saturate(.9) hue-rotate(-2deg)
              }
      .filter-brooklyn {
                 filter: sepia(.35) contrast(1.1) brightness(1.2) saturate(1.3)
              }
      .filter-brooklyn:before {
                 
        background: rgba(127, 187, 227, .2);
        content: "";
        mix-blend-mode: overlay;
          
              }
      .filter-charmes {
                 filter: sepia(.25) contrast(1.25) brightness(1.25) saturate(1.35) hue-rotate(-5deg)
              }
      .filter-charmes:before {
                 
        background: rgba(125, 105, 24, .25);
        content: "";
        mix-blend-mode: darken;
          
              }
      .filter-clarendon {
                 filter: sepia(.15) contrast(1.25) brightness(1.25) hue-rotate(5deg)
              }
      .filter-clarendon:before {
                 
        background: rgba(127, 187, 227, .4);
        content: "";
        mix-blend-mode: overlay;
          
              }
      .filter-crema {
                 filter: sepia(.5) contrast(1.25) brightness(1.15) saturate(.9) hue-rotate(-2deg)
              }
      .filter-crema:before {
                 
        background: rgba(125, 105, 24, .2);
        content: "";
        mix-blend-mode: multiply;
          
              }
      .filter-dogpatch {
                 filter: sepia(.35) saturate(1.1) contrast(1.5)
              }
      .filter-earlybird {
                 filter: sepia(.25) contrast(1.25) brightness(1.15) saturate(.9) hue-rotate(-5deg)
              }
      .filter-earlybird:before {
                 
        background: radial-gradient(circle closest-corner, transparent 0, rgba(125, 105, 24, .2) 100%);
        content: "";
        mix-blend-mode: multiply;
        
              }
      .filter-gingham {
                 filter: contrast(1.1) brightness(1.1)
              }
      .filter-gingham:before {
                 
        background: #e6e6e6;
        content: "";
        mix-blend-mode: soft-light;
          
              }
      .filter-ginza {
                 filter: sepia(.25) contrast(1.15) brightness(1.2) saturate(1.35) hue-rotate(-5deg)
              }
      .filter-ginza:before {
                 
        background: rgba(125, 105, 24, .15);
        content: "";
        mix-blend-mode: darken;
          
              }
      .filter-hefe {
                 filter: sepia(.4) contrast(1.5) brightness(1.2) saturate(1.4) hue-rotate(-10deg)
              }
      .filter-hefe:before {
                 
        background: radial-gradient(circle closest-corner, transparent 0, rgba(0, 0, 0, .25) 100%);
        content: "";
        mix-blend-mode: multiply;
          
              }
      .filter-helena {
                 filter: sepia(.5) contrast(1.05) brightness(1.05) saturate(1.35)
              }
      .filter-helena:before {
                 
        background: rgba(158, 175, 30, .25);
        content: "";
        mix-blend-mode: overlay;
          
              }
      .filter-hudson {
                 filter: sepia(.25) contrast(1.2) brightness(1.2) saturate(1.05) hue-rotate(-15deg)
              }
      .filter-hudson:before {
                 
        background: radial-gradient(circle closest-corner, transparent 25%, rgba(25, 62, 167, .25) 100%);
        content: "";
        mix-blend-mode: multiply;
          
              }
      .filter-inkwell {
                 filter: brightness(1.25) contrast(.85) grayscale(1)
              }
      .filter-juno {
                 filter: sepia(.35) contrast(1.15) brightness(1.15) saturate(1.8)
              }
      .filter-juno:before {
                 
        background: rgba(127, 187, 227, .2);
        content: "";
        mix-blend-mode: overlay;
          
              }
      .filter-kelvin {
                 filter: sepia(.15) contrast(1.5) brightness(1.1) hue-rotate(-10deg)
              }
      .filter-kelvin:before {
                 
        background: radial-gradient(circle closest-corner, rgba(128, 78, 15, .25) 0, rgba(128, 78, 15, .5) 100%);
        content: "";
        mix-blend-mode: overlay;
          
              }
      .filter-lark {
                 filter: sepia(.25) contrast(1.2) brightness(1.3) saturate(1.25)
              }
      .filter-lofi {
                 filter: saturate(1.1) contrast(1.5)
              }
      .filter-ludwig {
                 filter: sepia(.25) contrast(1.05) brightness(1.05) saturate(2)
              }
      .filter-ludwig:before {
                 
        background: rgba(125, 105, 24, .1);
        content: "";
        mix-blend-mode: overlay;
          
              }
      .filter-maven {
                 filter: sepia(.35) contrast(1.05) brightness(1.05) saturate(1.75)
              }
      .filter-maven:before {
                 
        background: rgba(158, 175, 30, .25);
        content: "";
        mix-blend-mode: darken;
          
              }
      .filter-mayfair {
                 filter: contrast(1.1) brightness(1.15) saturate(1.1)
              }
      .filter-mayfair:before {
                 
        background: radial-gradient(circle closest-corner, transparent 0, rgba(175, 105, 24, .4) 100%);
        content: "";
        mix-blend-mode: multiply;
          
              }
      .filter-moon {
                 filter: brightness(1.4) contrast(.95) saturate(0) sepia(.35)
              }
      .filter-nashville {
                 filter: sepia(.25) contrast(1.5) brightness(.9) hue-rotate(-15deg)
              }
      .filter-nashville:before {
                 
        background: radial-gradient(circle closest-corner, rgba(128, 78, 15, .5) 0, rgba(128, 78, 15, .65) 100%);
        content: "";
        mix-blend-mode: screen;
          
              }
      .filter-perpetua {
                 filter: contrast(1.1) brightness(1.25) saturate(1.1)
              }
      .filter-perpetua:before {
                 
        background: linear-gradient(to bottom, rgba(0, 91, 154, .25), rgba(230, 193, 61, .25));
        content: "";
        mix-blend-mode: multiply;
          
              }
      .filter-poprocket {
                 filter: sepia(.15) brightness(1.2)
              }
      .filter-poprocket:before {
                 
        background: radial-gradient(circle closest-corner, rgba(206, 39, 70, .75) 40%, black 80%);
        content: "";
        mix-blend-mode: screen;
          
              }
      .filter-reyes {
                 filter: sepia(.75) contrast(.75) brightness(1.25) saturate(1.4)
              }
      .filter-rise {
                 filter: sepia(.25) contrast(1.25) brightness(1.2) saturate(.9)
              }
      .filter-rise:before {
                 
        background: radial-gradient(circle closest-corner, transparent 0, rgba(230, 193, 61, .25) 100%);
        content: "";
        mix-blend-mode: lighten;
          
              }
      .filter-sierra {
                 filter: sepia(.25) contrast(1.5) brightness(.9) hue-rotate(-15deg)
              }
      .filter-sierra:before {
                 
        background: radial-gradient(circle closest-corner, rgba(128, 78, 15, .5) 0, rgba(0, 0, 0, .65) 100%);
        content: "";
        mix-blend-mode: screen;
          
              }
      .filter-skyline {
                 filter: sepia(.15) contrast(1.25) brightness(1.25) saturate(1.2)
              }
      .filter-slumber {
                 filter: sepia(.35) contrast(1.25) saturate(1.25)
              }
      .filter-slumber:before {
                 
        background: rgba(125, 105, 24, .2);
        content: "";
        mix-blend-mode: darken;
          
              }
      .filter-stinson {
                 filter: sepia(.35) contrast(1.25) saturate(1.25)
              }
      .filter-stinson:before {
                 
        background: rgba(125, 105, 24, .45);
        content: "";
        mix-blend-mode: lighten;
          
              }
      .filter-sutro {
                 filter: sepia(.4) contrast(1.2) brightness(.9) saturate(1.4) hue-rotate(-10deg)
              }
      .filter-sutro:before {
                 
        background: radial-gradient(circle closest-corner, transparent 50%, rgba(0, 0, 0, .5) 90%);
        content: "";
        mix-blend-mode: darken;
          
              }
      .filter-toaster {
                 filter: sepia(.25) contrast(1.5) brightness(.95) hue-rotate(-15deg)
              }
      .filter-toaster:before {
                 
        background: radial-gradient(circle, #804e0f, rgba(0, 0, 0, .25));
        content: "";
        mix-blend-mode: screen;
          
              }
      .filter-valencia {
                 filter: sepia(.25) contrast(1.1) brightness(1.1)
              }
      .filter-valencia:before {
                 
        background: rgba(230, 193, 61, .1);
        content: "";
        mix-blend-mode: lighten;
          
              }
      .filter-vesper {
                 filter: sepia(.35) contrast(1.15) brightness(1.2) saturate(1.3)
              }
      .filter-vesper:before {
                 
        background: rgba(125, 105, 24, .25);
        content: "";
        mix-blend-mode: overlay;
          
              }
      .filter-walden {
                 filter: sepia(.35) contrast(.8) brightness(1.25) saturate(1.4)
              }
      .filter-walden:before {
                 
        background: rgba(229, 240, 128, .5);
        content: "";
        mix-blend-mode: darken;
          
              }
      .filter-willow {
                 filter: brightness(1.2) contrast(.85) saturate(.05) sepia(.2)
              }
      .filter-xpro-ii {
                 filter: sepia(.45) contrast(1.25) brightness(1.75) saturate(1.3) hue-rotate(-5deg)
              }
      .filter-xpro-ii:before {
                 
        background: radial-gradient(circle closest-corner, rgba(0, 91, 154, .35) 0, rgba(0, 0, 0, .65) 100%);
        content: "";
        mix-blend-mode: multiply;
          
              }"
    `)
  })

  it('selectors when custom prefix', async () => {
    const inputs = filters.map(filter => `f-${kekabCase(filter.name)}`)
    const generator = createGenerator({
      presets: [presetFilter({ prefix: 'f-' })],
    })
    const { css } = await generator.generate(inputs.join('\n'))
    expect(css).toMatchInlineSnapshot(`
      "/* layer: preflights */

            [class^="f-"] {
              position: relative;
            }
            [class^="f-"]:before {
              display: block;
              height: 100%;
              left: 0;
              position: absolute;
              top: 0;
              width: 100%;
              z-index: 1;
            }
            
      /* layer: default */
      .f-1977 {
                 filter: filter: sepia(.5) hue-rotate(-30deg) saturate(1.4)
              }
      .f-aden {
                 filter: sepia(.2) brightness(1.15) saturate(1.4)
              }
      .f-aden:before {
                 
        background: rgba(125, 105, 24, .1);
        content: "";
        mix-blend-mode: multiply;
          
              }
      .f-amaro {
                 filter: sepia(.35) contrast(1.1) brightness(1.2) saturate(1.3)
              }
      .f-amaro:before {
                 
        background: rgba(125, 105, 24, .2);
        content: "";
        mix-blend-mode: overlay;
          
              }
      .f-ashby {
                 filter: sepia(.5) contrast(1.2) saturate(1.8)
              }
      .f-ashby:before {
                 
        background: rgba(125, 105, 24, .35);
        content: "";
        mix-blend-mode: lighten;
          
              }
      .f-brannan {
                 filter: sepia(.4) contrast(1.25) brightness(1.1) saturate(.9) hue-rotate(-2deg)
              }
      .f-brooklyn {
                 filter: sepia(.35) contrast(1.1) brightness(1.2) saturate(1.3)
              }
      .f-brooklyn:before {
                 
        background: rgba(127, 187, 227, .2);
        content: "";
        mix-blend-mode: overlay;
          
              }
      .f-charmes {
                 filter: sepia(.25) contrast(1.25) brightness(1.25) saturate(1.35) hue-rotate(-5deg)
              }
      .f-charmes:before {
                 
        background: rgba(125, 105, 24, .25);
        content: "";
        mix-blend-mode: darken;
          
              }
      .f-clarendon {
                 filter: sepia(.15) contrast(1.25) brightness(1.25) hue-rotate(5deg)
              }
      .f-clarendon:before {
                 
        background: rgba(127, 187, 227, .4);
        content: "";
        mix-blend-mode: overlay;
          
              }
      .f-crema {
                 filter: sepia(.5) contrast(1.25) brightness(1.15) saturate(.9) hue-rotate(-2deg)
              }
      .f-crema:before {
                 
        background: rgba(125, 105, 24, .2);
        content: "";
        mix-blend-mode: multiply;
          
              }
      .f-dogpatch {
                 filter: sepia(.35) saturate(1.1) contrast(1.5)
              }
      .f-earlybird {
                 filter: sepia(.25) contrast(1.25) brightness(1.15) saturate(.9) hue-rotate(-5deg)
              }
      .f-earlybird:before {
                 
        background: radial-gradient(circle closest-corner, transparent 0, rgba(125, 105, 24, .2) 100%);
        content: "";
        mix-blend-mode: multiply;
        
              }
      .f-gingham {
                 filter: contrast(1.1) brightness(1.1)
              }
      .f-gingham:before {
                 
        background: #e6e6e6;
        content: "";
        mix-blend-mode: soft-light;
          
              }
      .f-ginza {
                 filter: sepia(.25) contrast(1.15) brightness(1.2) saturate(1.35) hue-rotate(-5deg)
              }
      .f-ginza:before {
                 
        background: rgba(125, 105, 24, .15);
        content: "";
        mix-blend-mode: darken;
          
              }
      .f-hefe {
                 filter: sepia(.4) contrast(1.5) brightness(1.2) saturate(1.4) hue-rotate(-10deg)
              }
      .f-hefe:before {
                 
        background: radial-gradient(circle closest-corner, transparent 0, rgba(0, 0, 0, .25) 100%);
        content: "";
        mix-blend-mode: multiply;
          
              }
      .f-helena {
                 filter: sepia(.5) contrast(1.05) brightness(1.05) saturate(1.35)
              }
      .f-helena:before {
                 
        background: rgba(158, 175, 30, .25);
        content: "";
        mix-blend-mode: overlay;
          
              }
      .f-hudson {
                 filter: sepia(.25) contrast(1.2) brightness(1.2) saturate(1.05) hue-rotate(-15deg)
              }
      .f-hudson:before {
                 
        background: radial-gradient(circle closest-corner, transparent 25%, rgba(25, 62, 167, .25) 100%);
        content: "";
        mix-blend-mode: multiply;
          
              }
      .f-inkwell {
                 filter: brightness(1.25) contrast(.85) grayscale(1)
              }
      .f-juno {
                 filter: sepia(.35) contrast(1.15) brightness(1.15) saturate(1.8)
              }
      .f-juno:before {
                 
        background: rgba(127, 187, 227, .2);
        content: "";
        mix-blend-mode: overlay;
          
              }
      .f-kelvin {
                 filter: sepia(.15) contrast(1.5) brightness(1.1) hue-rotate(-10deg)
              }
      .f-kelvin:before {
                 
        background: radial-gradient(circle closest-corner, rgba(128, 78, 15, .25) 0, rgba(128, 78, 15, .5) 100%);
        content: "";
        mix-blend-mode: overlay;
          
              }
      .f-lark {
                 filter: sepia(.25) contrast(1.2) brightness(1.3) saturate(1.25)
              }
      .f-lofi {
                 filter: saturate(1.1) contrast(1.5)
              }
      .f-ludwig {
                 filter: sepia(.25) contrast(1.05) brightness(1.05) saturate(2)
              }
      .f-ludwig:before {
                 
        background: rgba(125, 105, 24, .1);
        content: "";
        mix-blend-mode: overlay;
          
              }
      .f-maven {
                 filter: sepia(.35) contrast(1.05) brightness(1.05) saturate(1.75)
              }
      .f-maven:before {
                 
        background: rgba(158, 175, 30, .25);
        content: "";
        mix-blend-mode: darken;
          
              }
      .f-mayfair {
                 filter: contrast(1.1) brightness(1.15) saturate(1.1)
              }
      .f-mayfair:before {
                 
        background: radial-gradient(circle closest-corner, transparent 0, rgba(175, 105, 24, .4) 100%);
        content: "";
        mix-blend-mode: multiply;
          
              }
      .f-moon {
                 filter: brightness(1.4) contrast(.95) saturate(0) sepia(.35)
              }
      .f-nashville {
                 filter: sepia(.25) contrast(1.5) brightness(.9) hue-rotate(-15deg)
              }
      .f-nashville:before {
                 
        background: radial-gradient(circle closest-corner, rgba(128, 78, 15, .5) 0, rgba(128, 78, 15, .65) 100%);
        content: "";
        mix-blend-mode: screen;
          
              }
      .f-perpetua {
                 filter: contrast(1.1) brightness(1.25) saturate(1.1)
              }
      .f-perpetua:before {
                 
        background: linear-gradient(to bottom, rgba(0, 91, 154, .25), rgba(230, 193, 61, .25));
        content: "";
        mix-blend-mode: multiply;
          
              }
      .f-poprocket {
                 filter: sepia(.15) brightness(1.2)
              }
      .f-poprocket:before {
                 
        background: radial-gradient(circle closest-corner, rgba(206, 39, 70, .75) 40%, black 80%);
        content: "";
        mix-blend-mode: screen;
          
              }
      .f-reyes {
                 filter: sepia(.75) contrast(.75) brightness(1.25) saturate(1.4)
              }
      .f-rise {
                 filter: sepia(.25) contrast(1.25) brightness(1.2) saturate(.9)
              }
      .f-rise:before {
                 
        background: radial-gradient(circle closest-corner, transparent 0, rgba(230, 193, 61, .25) 100%);
        content: "";
        mix-blend-mode: lighten;
          
              }
      .f-sierra {
                 filter: sepia(.25) contrast(1.5) brightness(.9) hue-rotate(-15deg)
              }
      .f-sierra:before {
                 
        background: radial-gradient(circle closest-corner, rgba(128, 78, 15, .5) 0, rgba(0, 0, 0, .65) 100%);
        content: "";
        mix-blend-mode: screen;
          
              }
      .f-skyline {
                 filter: sepia(.15) contrast(1.25) brightness(1.25) saturate(1.2)
              }
      .f-slumber {
                 filter: sepia(.35) contrast(1.25) saturate(1.25)
              }
      .f-slumber:before {
                 
        background: rgba(125, 105, 24, .2);
        content: "";
        mix-blend-mode: darken;
          
              }
      .f-stinson {
                 filter: sepia(.35) contrast(1.25) saturate(1.25)
              }
      .f-stinson:before {
                 
        background: rgba(125, 105, 24, .45);
        content: "";
        mix-blend-mode: lighten;
          
              }
      .f-sutro {
                 filter: sepia(.4) contrast(1.2) brightness(.9) saturate(1.4) hue-rotate(-10deg)
              }
      .f-sutro:before {
                 
        background: radial-gradient(circle closest-corner, transparent 50%, rgba(0, 0, 0, .5) 90%);
        content: "";
        mix-blend-mode: darken;
          
              }
      .f-toaster {
                 filter: sepia(.25) contrast(1.5) brightness(.95) hue-rotate(-15deg)
              }
      .f-toaster:before {
                 
        background: radial-gradient(circle, #804e0f, rgba(0, 0, 0, .25));
        content: "";
        mix-blend-mode: screen;
          
              }
      .f-valencia {
                 filter: sepia(.25) contrast(1.1) brightness(1.1)
              }
      .f-valencia:before {
                 
        background: rgba(230, 193, 61, .1);
        content: "";
        mix-blend-mode: lighten;
          
              }
      .f-vesper {
                 filter: sepia(.35) contrast(1.15) brightness(1.2) saturate(1.3)
              }
      .f-vesper:before {
                 
        background: rgba(125, 105, 24, .25);
        content: "";
        mix-blend-mode: overlay;
          
              }
      .f-walden {
                 filter: sepia(.35) contrast(.8) brightness(1.25) saturate(1.4)
              }
      .f-walden:before {
                 
        background: rgba(229, 240, 128, .5);
        content: "";
        mix-blend-mode: darken;
          
              }
      .f-willow {
                 filter: brightness(1.2) contrast(.85) saturate(.05) sepia(.2)
              }
      .f-xpro-ii {
                 filter: sepia(.45) contrast(1.25) brightness(1.75) saturate(1.3) hue-rotate(-5deg)
              }
      .f-xpro-ii:before {
                 
        background: radial-gradient(circle closest-corner, rgba(0, 91, 154, .35) 0, rgba(0, 0, 0, .65) 100%);
        content: "";
        mix-blend-mode: multiply;
          
              }"
    `)
  })
})
