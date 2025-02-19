import type { Filter } from './types'

export function defineFilter(filter: Filter) {
  return filter
}

export const filters = [
  defineFilter({
    name: '1977',
    style: 'filter: sepia(.5) hue-rotate(-30deg) saturate(1.4)',
  }),

  defineFilter({
    name: 'aden',
    style: 'filter: sepia(.2) brightness(1.15) saturate(1.4)',
    beforeStyle: `background: rgba(125, 105, 24, .1); mix-blend-mode: multiply;`,
  }),

  defineFilter({
    name: 'amaro',
    style: 'filter: sepia(.35) contrast(1.1) brightness(1.2) saturate(1.3)',
    beforeStyle: `background: rgba(125, 105, 24, .2); mix-blend-mode: overlay;`,
  }),

  defineFilter({
    name: 'ashby',
    style: 'filter: sepia(.5) contrast(1.2) saturate(1.8)',
    beforeStyle: `background: rgba(125, 105, 24, .35); mix-blend-mode: lighten;`,
  }),

  defineFilter({
    name: 'brannan',
    style:
      'filter: sepia(.4) contrast(1.25) brightness(1.1) saturate(.9) hue-rotate(-2deg)',
  }),

  defineFilter({
    name: 'brooklyn',
    style: 'filter: sepia(.35) contrast(1.1) brightness(1.2) saturate(1.3)',
    beforeStyle: `background: rgba(127, 187, 227, .2); mix-blend-mode: overlay;`,
  }),

  defineFilter({
    name: 'charmes',
    style:
      'filter: sepia(.25) contrast(1.25) brightness(1.25) saturate(1.35) hue-rotate(-5deg)',
    beforeStyle: `background: rgba(125, 105, 24, .25); mix-blend-mode: darken;`,
  }),

  defineFilter({
    name: 'clarendon',
    style:
      'filter: sepia(.15) contrast(1.25) brightness(1.25) hue-rotate(5deg)',
    beforeStyle: `background: rgba(127, 187, 227, .4); mix-blend-mode: overlay;`,
  }),

  defineFilter({
    name: 'crema',
    style:
      'filter: sepia(.5) contrast(1.25) brightness(1.15) saturate(.9) hue-rotate(-2deg)',
    beforeStyle: `background: rgba(125, 105, 24, .2); mix-blend-mode: multiply;`,
  }),

  defineFilter({
    name: 'dogpatch',
    style: 'filter: sepia(.35) saturate(1.1) contrast(1.5)',
  }),

  defineFilter({
    name: 'earlybird',
    style:
      'filter: sepia(.25) contrast(1.25) brightness(1.15) saturate(.9) hue-rotate(-5deg)',
    beforeStyle: `background: radial-gradient(circle closest-corner, transparent 0, rgba(125, 105, 24, .2) 100%); mix-blend-mode: multiply;`,
  }),

  defineFilter({
    name: 'gingham',
    style: 'filter: contrast(1.1) brightness(1.1)',
    beforeStyle: `background: #e6e6e6; mix-blend-mode: soft-light;`,
  }),

  defineFilter({
    name: 'ginza',
    style:
      'filter: sepia(.25) contrast(1.15) brightness(1.2) saturate(1.35) hue-rotate(-5deg)',
    beforeStyle: `background: rgba(125, 105, 24, .15); mix-blend-mode: darken;`,
  }),

  defineFilter({
    name: 'hefe',
    style:
      'filter: sepia(.4) contrast(1.5) brightness(1.2) saturate(1.4) hue-rotate(-10deg)',
    beforeStyle: `background: radial-gradient(circle closest-corner, transparent 0, rgba(0, 0, 0, .25) 100%); mix-blend-mode: multiply;`,
  }),

  defineFilter({
    name: 'helena',
    style: 'filter: sepia(.5) contrast(1.05) brightness(1.05) saturate(1.35)',
    beforeStyle: `background: rgba(158, 175, 30, .25); mix-blend-mode: overlay;`,
  }),

  defineFilter({
    name: 'hudson',
    style:
      'filter: sepia(.25) contrast(1.2) brightness(1.2) saturate(1.05) hue-rotate(-15deg)',
    beforeStyle: `background: radial-gradient(circle closest-corner, transparent 25%, rgba(25, 62, 167, .25) 100%); mix-blend-mode: multiply;`,
  }),

  defineFilter({
    name: 'inkwell',
    style: 'filter: brightness(1.25) contrast(.85) grayscale(1)',
  }),

  defineFilter({
    name: 'juno',
    style: 'filter: sepia(.35) contrast(1.15) brightness(1.15) saturate(1.8)',
    beforeStyle: `background: rgba(127, 187, 227, .2); mix-blend-mode: overlay;`,
  }),

  defineFilter({
    name: 'kelvin',
    style:
      'filter: sepia(.15) contrast(1.5) brightness(1.1) hue-rotate(-10deg)',
    beforeStyle: `background: radial-gradient(circle closest-corner, rgba(128, 78, 15, .25) 0, rgba(128, 78, 15, .5) 100%); mix-blend-mode: overlay;`,
  }),

  defineFilter({
    name: 'lark',
    style: 'filter: sepia(.25) contrast(1.2) brightness(1.3) saturate(1.25)',
  }),

  defineFilter({
    name: 'lofi',
    style: 'filter: saturate(1.1) contrast(1.5)',
  }),

  defineFilter({
    name: 'ludwig',
    style: 'filter: sepia(.25) contrast(1.05) brightness(1.05) saturate(2)',
    beforeStyle: `background: rgba(125, 105, 24, .1); mix-blend-mode: overlay;`,
  }),

  defineFilter({
    name: 'maven',
    style: 'filter: sepia(.35) contrast(1.05) brightness(1.05) saturate(1.75)',
    beforeStyle: `background: rgba(158, 175, 30, .25); mix-blend-mode: darken;`,
  }),

  defineFilter({
    name: 'mayfair',
    style: 'filter: contrast(1.1) brightness(1.15) saturate(1.1)',
    beforeStyle: `background: radial-gradient(circle closest-corner, transparent 0, rgba(175, 105, 24, .4) 100%); mix-blend-mode: multiply;`,
  }),

  defineFilter({
    name: 'moon',
    style: 'filter: brightness(1.4) contrast(.95) saturate(0) sepia(.35)',
  }),

  defineFilter({
    name: 'nashville',
    style: 'filter: sepia(.25) contrast(1.5) brightness(.9) hue-rotate(-15deg)',
    beforeStyle: `background: radial-gradient(circle closest-corner, rgba(128, 78, 15, .5) 0, rgba(128, 78, 15, .65) 100%); mix-blend-mode: screen;`,
  }),

  defineFilter({
    name: 'perpetua',
    style: 'filter: contrast(1.1) brightness(1.25) saturate(1.1)',
    beforeStyle: `background: linear-gradient(to bottom, rgba(0, 91, 154, .25), rgba(230, 193, 61, .25)); mix-blend-mode: multiply;`,
  }),

  defineFilter({
    name: 'poprocket',
    style: 'filter: sepia(.15) brightness(1.2)',
    beforeStyle: `background: radial-gradient(circle closest-corner, rgba(206, 39, 70, .75) 40%, black 80%); mix-blend-mode: screen;`,
  }),

  defineFilter({
    name: 'reyes',
    style: 'filter: sepia(.75) contrast(.75) brightness(1.25) saturate(1.4)',
  }),

  defineFilter({
    name: 'rise',
    style: 'filter: sepia(.25) contrast(1.25) brightness(1.2) saturate(.9)',
    beforeStyle: `background: radial-gradient(circle closest-corner, transparent 0, rgba(230, 193, 61, .25) 100%); mix-blend-mode: lighten;`,
  }),

  defineFilter({
    name: 'sierra',
    style: 'filter: sepia(.25) contrast(1.5) brightness(.9) hue-rotate(-15deg)',
    beforeStyle: `background: radial-gradient(circle closest-corner, rgba(128, 78, 15, .5) 0, rgba(0, 0, 0, .65) 100%); mix-blend-mode: screen;`,
  }),

  defineFilter({
    name: 'skyline',
    style: 'filter: sepia(.15) contrast(1.25) brightness(1.25) saturate(1.2)',
  }),

  defineFilter({
    name: 'slumber',
    style: 'filter: sepia(.35) contrast(1.25) saturate(1.25)',
    beforeStyle: `background: rgba(125, 105, 24, .2); mix-blend-mode: darken;`,
  }),

  defineFilter({
    name: 'stinson',
    style: 'filter: sepia(.35) contrast(1.25) saturate(1.25)',
    beforeStyle: `background: rgba(125, 105, 24, .45); mix-blend-mode: lighten;`,
  }),

  defineFilter({
    name: 'sutro',
    style:
      'filter: sepia(.4) contrast(1.2) brightness(.9) saturate(1.4) hue-rotate(-10deg)',
    beforeStyle: `background: radial-gradient(circle closest-corner, transparent 50%, rgba(0, 0, 0, .5) 90%); mix-blend-mode: darken;`,
  }),

  defineFilter({
    name: 'toaster',
    style:
      'filter: sepia(.25) contrast(1.5) brightness(.95) hue-rotate(-15deg)',
    beforeStyle: `background: radial-gradient(circle, #804e0f, rgba(0, 0, 0, .25)); mix-blend-mode: screen;`,
  }),

  defineFilter({
    name: 'valencia',
    style: 'filter: sepia(.25) contrast(1.1) brightness(1.1)',
    beforeStyle: `background: rgba(230, 193, 61, .1); mix-blend-mode: lighten;`,
  }),

  defineFilter({
    name: 'vesper',
    style: 'filter: sepia(.35) contrast(1.15) brightness(1.2) saturate(1.3)',
    beforeStyle: `background: rgba(125, 105, 24, .25); mix-blend-mode: overlay;`,
  }),

  defineFilter({
    name: 'walden',
    style: 'filter: sepia(.35) contrast(.8) brightness(1.25) saturate(1.4)',
    beforeStyle: `background: rgba(229, 240, 128, .5); mix-blend-mode: darken;`,
  }),

  defineFilter({
    name: 'willow',
    style: 'filter: brightness(1.2) contrast(.85) saturate(.05) sepia(.2)',
  }),

  defineFilter({
    name: 'xpro-ii',
    style:
      'filter: sepia(.45) contrast(1.25) brightness(1.75) saturate(1.3) hue-rotate(-5deg)',
    beforeStyle: `background: radial-gradient(circle closest-corner, rgba(0, 91, 154, .35) 0, rgba(0, 0, 0, .65) 100%); mix-blend-mode: multiply;`,
  }),
]
