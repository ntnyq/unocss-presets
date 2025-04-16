import {
  defineConfig,
  presetIcons,
  presetWind4,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'
import { presetAnimate } from 'unocss-preset-animate'
import { presetEasing } from 'unocss-preset-easing'
import { presetFilter } from 'unocss-preset-filter'
import { presetShape } from 'unocss-preset-shape'
import { presetTransition } from 'unocss-preset-transition'

export default defineConfig({
  transformers: [transformerDirectives(), transformerVariantGroup()],

  presets: [
    presetWind4(),
    presetIcons({
      autoInstall: true,
      scale: 1.2,
    }),
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
    presetShape(),
    presetEasing(),
    presetFilter(),
    presetTransition(),
  ],

  shortcuts: {
    'bg-base': 'bg-$c-bg-base',
    'border-base': 'border-$c-border',
    'border-bg-base': 'border-$c-bg-base',
    'text-base': 'text-$c-text-base',
    'btn-action':
      'min-w-140px rounded-md bg-$c-text-base px-3 py-2 text-$c-bg-base transition hover:opacity-90',
    'btn-icon':
      'h-10 w-10 inline-flex items-center justify-center text-lg rounded-md hover:bg-zinc-200 dark:hover:bg-zinc-700',

    // @pg
    'flex-center': 'flex justify-center items-center',
    'wh-full': 'w-full h-full',
  },
})
