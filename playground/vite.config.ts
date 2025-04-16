import Vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import VueRouter from 'unplugin-vue-router/vite'
import { defineConfig } from 'vite'

export default defineConfig(({ mode }) => ({
  plugins: [
    VueRouter({
      dts: 'src/typed-router.d.ts',
    }),

    Vue(),

    UnoCSS({
      inspector: false,
    }),
  ],
  server: {
    open: true,
  },
  ssr: {
    noExternal: mode === 'development' ? ['vue-router'] : [],
  },
}))
