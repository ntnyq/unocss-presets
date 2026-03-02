import Vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import { defineConfig } from 'vite'
import VueRouter from 'vue-router/vite'

export default defineConfig(({ mode }) => ({
  plugins: [
    VueRouter({
      dts: 'src/routes.d.ts',
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
