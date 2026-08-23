import { writeFile } from 'node:fs/promises'
import { dirname, relative } from 'node:path'
import process from 'node:process'
import { consola } from 'consola'
import { getColor } from 'consola/utils'
import { exists, resolve } from './utils'

const cyan = getColor('cyan')
const ROOT = process.cwd()
const ANIMATION_NAME_RE = /^[a-z][A-Za-z0-9]*$/u

async function main() {
  const animationName = process.argv[2]

  if (typeof animationName !== 'string') {
    consola.error('Expect an animationName')
    process.exitCode = 1
    return
  }

  if (!ANIMATION_NAME_RE.test(animationName)) {
    consola.error(
      'animationName must be a camelCase JavaScript identifier starting with a lowercase letter',
    )
    process.exitCode = 1
    return
  }

  const animationDirectory = resolve('packages/preset-animate/src/animations')
  const filePath = resolve(animationDirectory, `${animationName}.ts`)

  if (dirname(filePath) !== animationDirectory) {
    consola.error(
      'Refusing to create an animation outside the animation directory',
    )
    process.exitCode = 1
    return
  }

  const relativePath = relative(ROOT, filePath)
  const fileContent = `import type { Animation } from '../types'

export const ${animationName}: Animation = {
  name: '${animationName}',
  keyframes: \`
    from {
    }

    to {
    }
  \`,
}
`

  if (await exists(filePath)) {
    return consola.warn(`${cyan(relativePath)} already exists`)
  }

  await writeFile(filePath, fileContent, 'utf8')

  consola.success(`${cyan(relativePath)} created successfully`)
}

async function run() {
  try {
    await main()
  } catch (error) {
    consola.error(error)
    process.exitCode = 1
  }
}

run()
