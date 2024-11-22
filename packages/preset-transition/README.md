# unocss-preset-transition

> Unocss preset ships [transition.css](https://github.com/argyleink/transition.css).

[![NPM VERSION](https://img.shields.io/npm/v/unocss-preset-transition.svg)](https://www.npmjs.com/package/unocss-preset-transition)
[![NPM DOWNLOADS](https://img.shields.io/npm/dy/unocss-preset-transition.svg)](https://www.npmjs.com/package/unocss-preset-transition)

## Install

```bash
npm i unocss-preset-transition -D
```

```bash
yarn add unocss-preset-transition -D
```

```bash
pnpm add unocss-preset-transition -D
```

## Usage

use `presetTransition` in your `{uno,unocss}.config.{js,ts}`:

```ts
import { defineConfig } from 'unocss'
import { presetTransition } from 'unocss-preset-transition'

export default defineConfig({
  presets: [presetTransition()],
})
```

```html
<div class="w-100px h-100px bg-red styled-transition st-circle-in-bottom-left"></div>
```

## Options

```ts
export interface PresetTransitionOptions {
  /**
   * class name for base transition style
   *
   * @default 'styled-transition'
   */
  class?: string

  /**
   * prefix for css variables, transition class and animation name
   *
   * @default 'st-'
   */
  prefix?: string

  /**
   * inject media query rule to disable animation for print and `prefers-reduced-motion`
   *
   * @default true
   */
  injectMediaQuery?: boolean
}
```

## Selectors

### `styled-transition`

core selector

## Transitions

All transitions from [transition.css](https://github.com/argyleink/transition.css) are supported.

Just use add the class `st-<transition-name-in-kebab-case>` to element.

e.g. `st-circle-in-center`, `st-wipe-cinematic-in`.

```md
<!-- circles -->

- circleInCenter
- circleInHesitate
- circleInTopLeft
- circleInTopRight
- circleInBottomLeft
- circleInBottomRight
- circleOutCenter
- circleOutHesitate
- circleOutTopLeft
- circleOutTopRight
- circleOutBottomLeft
- circleOutBottomRight

<!-- squares -->

- squareInCenter
- squareInHesitate
- squareInTopLeft
- squareInTopRight
- squareInBottomLeft
- squareInBottomRight
- squareOutCenter
- squareOutHesitate
- squareOutTopLeft
- squareOutTopRight
- squareOutBottomLeft
- squareOutBottomRight

<!-- polygons -->

- polygonInOpposingCorners
- polygonOutOpposingCorners
- diamondInCenter
- diamondInDoubleScale
- diamondOutCenter
- diamondOutDoubleScale

<!-- wipes -->

- wipeInTop
- wipeInBottom
- wipeInLeft
- wipeInRight
- wipeInTopLeft
- wipeInTopRight
- wipeInBottomLeft
- wipeInBottomRight
- wipeOutTop
- wipeOutBottom
- wipeOutLeft
- wipeOutRight
- wipeOutTopLeft
- wipeOutTopRight
- wipeOutBottomLeft
- wipeOutBottomRight
- wipeCinematicIn
- wipeCinematicOut
```

## License

[MIT](./LICENSE) License © 2023-PRESENT [ntnyq](https://github.com/ntnyq)
