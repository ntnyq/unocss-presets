import { kebabCase } from '@ntnyq/utils'

interface CreateCSSVarOptions {
  use?: boolean
}

export const createCSSVar =
  (prefix: string, options: CreateCSSVarOptions = {}) =>
  (value: string, defaultValue?: string) =>
    options.use
      ? defaultValue
        ? `var(--${kebabCase(prefix + value)}, ${defaultValue})`
        : `var(--${kebabCase(prefix + value)})`
      : `--${kebabCase(prefix + value)}`
