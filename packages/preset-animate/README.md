# unocss-preset-animate

> Unocss preset ships [animate.css](https://github.com/animate-css/animate.css).

[![NPM VERSION](https://img.shields.io/npm/v/unocss-preset-animate.svg)](https://www.npmjs.com/package/unocss-preset-animate)
[![NPM DOWNLOADS](https://img.shields.io/npm/dy/unocss-preset-animate.svg)](https://www.npmjs.com/package/unocss-preset-animate)

## Install

```bash
npm i unocss-preset-animate -D
```

```bash
yarn add unocss-preset-animate -D
```

```bash
pnpm add unocss-preset-animate -D
```

## Usage

use `presetAnimate` in your `{uno,unocss}.config.{js,ts}`:

```ts
import { defineConfig } from 'unocss'
import { presetAnimate } from 'unocss-preset-animate'

export default defineConfig({
  presets: [
    presetAnimate()
  ],
})
```

```html
<div class="w-100px h-100px bg-red animated animate-infinate animation-heart-beat"></div>
```

## Options

```ts
export interface PresetAnimateOptions {
  /**
   * css variables prefix
   *
   * @default 'un-animate-'
   */
  variablePrefix?: string

  /**
   * use builtin css variables, provide manually if set to `false`
   *
   * @default true
   */
  preflight?: boolean

  /**
   * inject media query rule to disable animation for print and `prefers-reduced-motion`
   *
   * @default true
   */
  injectMediaQuery?: boolean

  /**
   * user custom animations
   *
   * @default []
   */
  extendAnimations?: Animation[]
}
```

## Interfaces

See [src/types](./src/types.ts) for detail.

See [src/animations](./src/animations) for custom animations examples.

```ts
export interface AnimationObject {
  /**
   * animationName
   */
  name: string

  /**
   * extra animation style e.g. `transform-origin`
   */
  extraStyle?: string

  /**
   * keyframes content
   */
  keyframes: string
}

export type AnimationCreator = (options: PresetAnimateOptions) => AnimationObject

export type Animation = AnimationObject | AnimationCreator
```

## Selectors

### `animated`

core selector

### `animate-duration-<float_number> | animate-{faster,fast,slow,slower}`

customize `animation-duration` based on `var(--un-animate-duration)`.

### `animate-repeat-<integer_number> | animate-infinate`

customize `animation-iteration-count` based on `var(--un-animate-repeat)`.

### `animate-delay-<float_number>`

customize `animation-delay` based on `var(--un-animate-delay)`.

## Animations

All animation from [animate.css](https://github.com/animate-css/animate.css) are supported.

Just use add the class `animation-<animation-name-in-kekab-case>` to element.

e.g. `animation-rubber-band`, `animation-jack-in-the-box`.

```md
- bounce
- flash
- headShake
- heartBeat
- jello
- pulse
- rubberBand
- shake
- shakeX
- shakeY
- swing
- tada
- wobble

- backInDown
- backInLeft
- backInRight
- backInUp

- backOutDown
- backOutLeft
- backOutRight
- backOutUp

- bounceIn
- bounceInDown
- bounceInLeft
- bounceInRight
- bounceInUp

- bounceOut
- bounceOutDown
- bounceOutLeft
- bounceInRight
- bounceOutUp

- fadeIn
- fadeInDown
- fadeInDownBig
- fadeInLeft
- fadeInLeftBig
- fadeInRight
- fadeInRightBig
- fadeInRightUp
- fadeInRightUpBig
- fadeInTopLeft
- fadeInTopRight
- fadeInBottomLeft
- fadeInBottomRight

- fadeOut
- fadeOutDown
- fadeOutDownBig
- fadeOutLeft
- fadeOutLeftBig
- fadeOutRight
- fadeOutRightBig
- fadeOutUp
- fadeOutUpBig
- fadeOutTopLeft
- fadeOutTopRight
- fadeOutBottomLeft
- fadeOutBottomRight

- flip
- flipInX
- flipInY
- flipOutX
- flipOutY

- lightSpeedInLeft
- lightSpeedInRight
- lightSpeedOutLeft
- lightSpeedOutRight

- rotateIn
- rotateInDownLeft
- rotateInDownRight
- rotateInUpLeft
- rotateInUpRight

- rotateOut
- rotateOutDownLeft
- rotateOutDownRight
- rotateOutUpLeft
- rotateOutUpRight

- hinge
- jackInTheBox
- rollIn
- rollOut

- zoomIn
- zoomInDown
- zoomInLeft
- zoomInRight
- zoomInUp

- zoomOut
- zoomOutDown
- zoomOutLeft
- zoomOutRight
- zoomOutUp

- slideInDown
- slideInLeft
- slideInRight
- slideInUp

- slideOutDown
- slideOutLeft
- slideOutRight
- slideOutUp
```

## License

[MIT](./LICENSE) License © 2023-PRESENT [ntnyq](https://github.com/ntnyq)
