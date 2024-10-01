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
<div class="w-100px h-100px bg-red"></div>
```

## Options

```ts
export interface PresetTransitionOptions {}
```

## License

[MIT](./LICENSE) License © 2023-PRESENT [ntnyq](https://github.com/ntnyq)
