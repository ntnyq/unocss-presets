# unocss-preset-filter

> Unocss preset for pure CSS filters from [instagram.css](https://github.com/picturepan2/instagram.css).

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

Then use `filter-<filter-name-in-kebab-case>`

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

## Filters

All filters from [instagram.css](https://github.com/picturepan2/instagram.css) are supported.

- filter-1977
- filter-aden
- filter-amaro
- filter-ashby
- filter-brannan
- filter-brooklyn
- filter-charmes
- filter-clarendon
- filter-crema
- filter-dogpatch
- filter-earlybird
- filter-gingham
- filter-ginza
- filter-hefe
- filter-helena
- filter-hudson
- filter-inkwell
- filter-juno
- filter-kelvin
- filter-lark
- filter-lofi
- filter-ludwig
- filter-maven
- filter-mayfair
- filter-moon
- filter-nashville
- filter-perpetua
- filter-poprocket
- filter-reyes
- filter-rise
- filter-sierra
- filter-skyline
- filter-slumber
- filter-stinson
- filter-sutro
- filter-toaster
- filter-valencia
- filter-vesper
- filter-walden
- filter-willow
- filter-xpro-ii

## Credits

- [instagram.css](https://github.com/picturepan2/instagram.css)

## License

[MIT](./LICENSE) License © 2023-PRESENT [ntnyq](https://github.com/ntnyq)
