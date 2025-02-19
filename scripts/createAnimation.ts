import { writeFile } from 'node:fs/promises'
import { relative } from 'node:path'
import process from 'node:process'
import { consola } from 'consola'
import { getColor } from 'consola/utils'
import { exists, resolve } from './utils'

const cyan = getColor('cyan')
const ROOT = process.cwd()

async function main() {
  const animationName = process.argv[2]

  if (typeof animationName !== 'string') {
    consola.error('Expect an animationName')
    process.exit(1)
  }

  const filePath = resolve(
    'packages/preset-animate/src/animations',
    `${animationName}.ts`,
  )
  const relativePath = relative(ROOT, filePath)
  const fileContent = `import type { Animation } from '../types'

export const ${animationName}: Animation = {
  name: '${animationName}',
  keyframes: \`@keyframes %ANIMATION_NAME% {

  }\`,
}`

  if (await exists(filePath)) {
    return consola.warn(`${cyan(relativePath)} already exists`)
  }

  await writeFile(filePath, fileContent, 'utf8')

  consola.success(`${cyan(relativePath)} created successfully`)
}

await main()
