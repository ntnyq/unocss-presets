/**
 * @file utils
 */

export const kekabCase = (input: string) =>
  input
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase()

export const camelCase = (input: string) =>
  input.replace(/[._-](\w)/g, (_, c) => (c ? c.toUpperCase() : ''))
