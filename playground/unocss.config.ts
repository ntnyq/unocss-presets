import { defineConfig, presetUno } from 'unocss'
import { presetAnimate } from 'unocss-preset-animate'

export default defineConfig({
  presets: [presetUno(), presetAnimate()],
})
