/**
 * @file utils
 */

export const minify = (css: string) => css.replace(/\n/g, '').replace(/\s+/g, '').trim()

export const capitalize = (input: string) => `${input[0].toUpperCase()}${input.slice(1)}`

export const kekabCase = (input: string) =>
  input
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase()
