# unocss-preset-shape

[![NPM VERSION](https://img.shields.io/npm/v/unocss-preset-shape.svg)](https://www.npmjs.com/package/unocss-preset-shape)
[![NPM DOWNLOADS](https://img.shields.io/npm/dy/unocss-preset-shape.svg)](https://www.npmjs.com/package/unocss-preset-shape)

> Unocss preset for CSS shapes from [css-shape.com](https://css-shape.com/).

## Online demo

[Try it online](https://unocss.dev/play/#html=DwWwhglgdgBAxgGzAZ2QXgEQAsC0y4BOApkbAGYJEAeMAVgK7IAuEZAnjnKU0QTBDxDJO3XhgB8AKBgxgAEwgA3eElSZkWMAAcieJmAI4ATAAYTWmgCMA5jjZEECAPYB3CcAD0CxVM-ho4kA&config=JYWwDg9gTgLgBAbwFBzgEwKYDNgDsMDCEuOA5gDQpxhQYDOGMAqrhJQL5xZQQhwDkAV1YBjOnX5JQkWImq0GMAMoALAIZgMcTt14DhEMXQC0Neo2N11myUgwAPGfExY1ggDbPseQsTIAKZFQzRToALjgAbSpghUYWCH8ASkpUWPNlawxk1LgAXQ4kpCA&css=PQKgBA6gTglgLgUzAYwK4Gc4HsC2YDCAyoWABYJQIA0YAhgHYAmYcUD6AZllDhWOqgAOg7nAB0YAGLcwCAB60cggDYIAXGBDAAUKDBi0mXGADe2sGC704AWgDuCGAHNScDQFYADJ4Dc5sAACtMLKAJ5gggCMLPK2ABR2pPBIcsoAlH4WAEa0yADWTlBYqEw2yFjK3Bpw5LxxAOTllVDoYpSMYgAs3vUZ2gC%2BmsBAA&options=N4XyA)

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

Then use `shape-<shape-name-with-params>`

```html
<div class="shape-star-200px"></div>
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

- star
- triangle
- rhombus
- hexagon
- octagon
- heart
- parallelogram

## Credits

- [css-shape.com](https://css-shape.com/)

## License

[MIT](./LICENSE) License © 2024-PRESENT [ntnyq](https://github.com/ntnyq)
