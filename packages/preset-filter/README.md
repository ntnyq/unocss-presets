# unocss-preset-filter

> Unocss preset for pure CSS filters.

[![NPM VERSION](https://img.shields.io/npm/v/unocss-preset-filter.svg)](https://www.npmjs.com/package/unocss-preset-filter)
[![NPM DOWNLOADS](https://img.shields.io/npm/dy/unocss-preset-filter.svg)](https://www.npmjs.com/package/unocss-preset-filter)

## Install

```bash
npm i unocss-preset-filter -D
```

```bash
yarn add unocss-preset-filter -D
```

```bash
pnpm add unocss-preset-filter -D
```

## Usage

use `presetFilter` in your `{uno,unocss}.config.{js,ts}`:

```ts
import { defineConfig } from 'unocss'
import { presetFilter } from 'unocss-preset-filter'

export default defineConfig({
  presets: [presetFilter()],
})
```

Then use `easing-<filter-name-in-kekab-case>`

```html
<div class="filter-aden"></div>
```

## Options

```ts
export interface PresetFilterOptions {
  /**
   * customize filter selector prefix
   *
   * @default 'filter-'
   */
  prefix?: string
}
```

## Credits

- [instagram.css](https://github.com/picturepan2/instagram.css)

## License

[MIT](./LICENSE) License © 2023-PRESENT [ntnyq](https://github.com/ntnyq)
