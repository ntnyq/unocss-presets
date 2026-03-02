import { access } from 'node:fs/promises'
import path from 'node:path'

export const resolve = (...args: string[]) =>
  path.resolve(import.meta.dirname, '..', ...args)

/**
 * Check if a file or directory exists
 * @param urlOrPath - The path to the file or directory
 * @returns A promise that resolves to a boolean
 */
export const exists = async (urlOrPath: string) =>
  access(urlOrPath)
    .then(() => true)
    .catch(() => false)
