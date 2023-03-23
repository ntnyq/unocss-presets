import { defineConfig, presetUno } from 'unocss'
import { presetAnimate } from 'unocss-preset-animate'
import { presetEasing } from 'unocss-preset-easing'

export default defineConfig({
  presets: [
    presetUno(),
    presetAnimate({
      extendAnimations: [
        {
          name: 'fooBar',
          keyframes: `
            from {
              transform: rotate(0deg);
            }

            to {
              transform: rotate(360deg);
            }
          `,
        },
      ],
    }),
    presetEasing({
      prefix: 'e-',
    }),
  ],
})
