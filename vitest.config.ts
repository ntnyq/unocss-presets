import { defaultExclude, defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    reporters: ['dot'],
    coverage: {
      include: ['**/src/**/*.ts'],
      exclude: [...defaultExclude, '**/playground/**/*.ts'],
      reporter: ['lcov', 'text'],
    },
  },
})
