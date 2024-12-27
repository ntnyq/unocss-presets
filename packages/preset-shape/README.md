# unocss-preset-shape

[![NPM VERSION](https://img.shields.io/npm/v/unocss-preset-shape.svg)](https://www.npmjs.com/package/unocss-preset-shape)
[![NPM DOWNLOADS](https://img.shields.io/npm/dy/unocss-preset-shape.svg)](https://www.npmjs.com/package/unocss-preset-shape)

> Unocss preset for CSS shapes from [css-shape.com](https://css-shape.com/).

## Online demo

[Try it online](https://unocss.dev/play/)

## Install

```bash
npm i unocss-preset-shape -D
```

```bash
yarn add unocss-preset-shape -D
```

```bash
pnpm add unocss-preset-shape -D
```

## Usage

use `presetShape` in your `{uno,unocss}.config.{js,ts}`:

```ts
import { defineConfig } from 'unocss'
import { presetShape } from 'unocss-preset-shape'

export default defineConfig({
  presets: [presetShape()],
})
```

Then use `shape-<shape-name>`

```html
<div class="shape-star"></div>
```

## Options

```ts
export interface PresetShapeOptions {
  /**
   * customize shape selector prefix
   *
   * @default 'shape-'
   */
  prefix?: string
}
```

## Shapes

## Credits

- [css-shape.com](https://css-shape.com/)

## License

[MIT](./LICENSE) License © 2023-PRESENT [ntnyq](https://github.com/ntnyq)
