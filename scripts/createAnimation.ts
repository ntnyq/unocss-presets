import process from 'node:process'
import { resolve } from 'node:path'
import c from 'picocolors'
import { exists, writeFile } from 'fs-extra'

async function main() {
  const animationName = process.argv[2]

  if (typeof animationName !== 'string') {
    console.log(c.red('\nExpect an animationName'))
    process.exit(1)
  }

  const filePath = resolve(
    __dirname,
    '../packages/preset-animate/src/animations',
    `${animationName}.ts`,
  )
  const fileContent = `import type { Animation } from '../types'

export const ${animationName}: Animation = {
  name: '${animationName}',
  keyframes: \`@keyframes %ANIMATION_NAME% {

  }\`,
}`

  if (await exists(filePath)) {
    console.log(c.red('\n file already exists'))
  }

  await writeFile(filePath, fileContent, 'utf8')

  console.log(c.green('\n created successfully'))
}

main().catch(err => {
  console.log(err)
})
