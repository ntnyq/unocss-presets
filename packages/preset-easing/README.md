# unocss-preset-easing

> Unocss preset for easing transition cubic-bezier function.

[![NPM VERSION](https://img.shields.io/npm/v/unocss-preset-easing.svg)](https://www.npmjs.com/package/unocss-preset-easing)
[![NPM DOWNLOADS](https://img.shields.io/npm/dy/unocss-preset-easing.svg)](https://www.npmjs.com/package/unocss-preset-easing)

## Install

```bash
npm i unocss-preset-easing -D
```

```bash
yarn add unocss-preset-easing -D
```

```bash
pnpm add unocss-preset-easing -D
```

## Usage

use `presetEasing` in your `{uno,unocss}.config.{js,ts}`:

```ts
import { defineConfig } from 'unocss'
import { presetEasing } from 'unocss-preset-easing'

export default defineConfig({
  presets: [
    presetEasing()
  ],
})
```

Then use `easing-<easing-name-in-kekab-case>`

```html
<div class="easing-in-back"></div>
```

## Options

```ts
export interface PresetEasingOptions {
  /**
   * customize easing selector prefix
   *
   * @default 'easing-'
   */
  prefix?: string
}
```

## Selectors

```css
.easing-in-back {
  transition-timing-function: cubic-bezier(0.6, -0.28, 0.735, 0.045);
}

.easing-in-circ {
  transition-timing-function: cubic-bezier(0.6, 0.04, 0.98, 0.335);
}

.easing-in-cubic {
  transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
}

.easing-in-expo {
  transition-timing-function: cubic-bezier(0.95, 0.05, 0.795, 0.035);
}

.easing-in-out-back {
  transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.easing-in-out-circ {
  transition-timing-function: cubic-bezier(0.785, 0.135, 0.15, 0.86);
}

.easing-in-out-cubic {
  transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
}

.easing-in-out-expo {
  transition-timing-function: cubic-bezier(1, 0, 0, 1);
}

.easing-in-out-quad {
  transition-timing-function: cubic-bezier(0.455, 0.03, 0.515, 0.955);
}

.easing-in-out-quart {
  transition-timing-function: cubic-bezier(0.77, 0, 0.175, 1);
}

.easing-in-out-quint {
  transition-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
}

.easing-in-out-sine {
  transition-timing-function: cubic-bezier(0.445, 0.05, 0.55, 0.95);
}

.easing-in-quad {
  transition-timing-function: cubic-bezier(0.55, 0.085, 0.68, 0.53);
}

.easing-in-quart {
  transition-timing-function: cubic-bezier(0.895, 0.03, 0.685, 0.22);
}

.easing-in-quint {
  transition-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
}

.easing-in-sine {
  transition-timing-function: cubic-bezier(0.47, 0, 0.745, 0.715);
}

.easing-out-back {
  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.easing-out-circ {
  transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
}

.easing-out-cubic {
  transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
}

.easing-out-expo {
  transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
}

.easing-out-quad {
  transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.easing-out-quint {
  transition-timing-function: cubic-bezier(0.23, 1, 0.32, 1);
}

.easing-out-sine {
  transition-timing-function: cubic-bezier(0.39, 0.575, 0.565, 1);
}
```

## License

[MIT](./LICENSE) License © 2023-PRESENT [ntnyq](https://github.com/ntnyq)
