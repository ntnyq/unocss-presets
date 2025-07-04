import { access } from 'node:fs/promises'
import path from 'node:path'

export const resolve = (...args: string[]) =>
  path.resolve(import.meta.dirname, '..', ...args)

/**
 * Check if a file or directory exists
 * @param path - The path to the file or directory
 * @returns A promise that resolves to a boolean
 */
export const exists = async (path: string) =>
  access(path)
    .then(() => true)
    .catch(() => false)
