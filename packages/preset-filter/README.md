# unocss-preset-filter

[![NPM VERSION](https://img.shields.io/npm/v/unocss-preset-filter.svg)](https://www.npmjs.com/package/unocss-preset-filter)
[![NPM DOWNLOADS](https://img.shields.io/npm/dy/unocss-preset-filter.svg)](https://www.npmjs.com/package/unocss-preset-filter)

> Unocss preset for pure CSS filters from [instagram.css](https://github.com/picturepan2/instagram.css).

## Online demo

[Try it online](https://unocss.dev/play/#html=DwWwhglgdgBAxgGzAZ2QXgEQAsC0y4BOApkbAGYJEAeMAVgK7IAuEZAnjnKU0QTBDxDJO3XhgB8AKBgxgEEAHMY0mTGQE4mLEyYAHZAC4A9EfpQA9nFQ5dxZESbIAdFCZQ2ARydxzII-LAFImQjKmgFJnMoBSddaIxlVXgkVEwAdxwAJgAGbN0aACMESwBrGDIIBB4CHDAAE1IElSMpYCNwaHEgA&config=JYWwDg9gTgLgBAbwFBzgEwKYDNgDsMDCEuOA5gDQpxhQYDOGMAqrhJQL5xZQQhwDkAV1YBjOnX5JQkWImq0GMAGLAANjAxQ4nbrwHCIYugFoa9RsZzrNkpBgAeM%2BJiwBDQevTY8hYmQAUyKhminQAXHAA2lTBCowsEP4AlJSosebKahpQyalwALocSUhAA&css=PQKgBA6gTglgLgUzAYwK4Gc4HsC2YDCAyoWABYJQIA0YAhgHYAmYcUD6AZllDhWOqgAOg7nAB0YAGLcwCAB60cggDYIAXGBDAAUKDBi0mXGADe2sGC704AWgDuCGAHNScDQFYADJ4Dc5sAACtMLKAJ5gggCMLPK2ABR2pPBIcsoAlH4WAEa0yADWTlBYqEw2yFjK3Bpw5LxxAOTllVDoYpSMYgAs3vUZ2gC%2BmsBAA&options=N4XyA)

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
