import { defineConfig, presetUno } from 'unocss'
import { presetAnimate } from 'unocss-preset-animate'

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
  ],
})
