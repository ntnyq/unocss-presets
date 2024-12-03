# unocss-preset-transition

[![NPM VERSION](https://img.shields.io/npm/v/unocss-preset-transition.svg)](https://www.npmjs.com/package/unocss-preset-transition)
[![NPM DOWNLOADS](https://img.shields.io/npm/dy/unocss-preset-transition.svg)](https://www.npmjs.com/package/unocss-preset-transition)

> Unocss preset ships [transition.css](https://github.com/argyleink/transition.css).

## Online demo

[Try it online](https://unocss.dev/play/#html=DwWwhglgdgBAxgGzAZ2QXgEQAsC0y4BOApkbAGYJEAeMAVgK7IAuEZAnjnKU0QTBDxDJO3XhgB8AKBgxgAEwgA3eElSYA7jgBMABh0AHGrl0GaAIwDmOYnJjM2lOTiYEwUZAIgB7WM04QCRCIcaBwzLyYmLxAcSjImCWAAegVFKWTwaHEgA&config=JYWwDg9gTgLgBAbwFBzgEwKYDNgDsMDCEuOA5gDQpxhQYDOGMAqrhJQL5xZQQhwDkAV1YBjOnX5JQkWImq0GMACpQAhrjrAYwYnE7deA4RDF0AtDXqMzMNRq07ckpBgAeM%2BJiyrBAG0-YeITEZAAUyKiWinQAXHAA2lSRCowsEKEAlJSoyVbKdpraxJnZcAC6HBlIQA&css=PQKgBA6gTglgLgUzAYwK4Gc4HsC2YDCAyoWABYJQIA0YAhgHYAmYcUD6AZllDhWOqgAOg7nAB0YAGLcwCAB60cggDYIAXGBDAAUKDBi0mXGADe2sGC704AWgDuCGAHNScDQFYADJ4Dc5sAACtMLKAJ5gggCMLPK2ABR2pPBIcsoAlH4WAEa0yADWTlBYqEw2yFjK3Bpw5LxxAOTllVDoYpSMYgAs3vUZ2gC%2BmsBAA&options=N4XyA)

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
