import { defineConfig } from 'tsdown'

export default defineConfig({
  clean: true,
  deps: {
    neverBundle: true,
  },
  dts: {
    tsconfig: './tsconfig.build.json',
  },
  entry: ['src/index.ts'],
  platform: 'neutral',
})
