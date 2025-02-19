import { readdir, readFile, writeFile } from 'node:fs/promises'
import { consola } from 'consola'
import { exec } from 'tinyexec'
import { resolve } from './utils'

interface PackageJson {
  name: string
  description: string
}
type TableRow = [string, string, string, string]

export async function updateReadme() {
  const packages = (await readdir(resolve('packages'))).filter(
    v => !v.startsWith('.'),
  )

  const table: {
    header: TableRow
    separator: TableRow
    body: TableRow[]
  } = {
    header: ['Name', 'Description', 'Version', 'Last Release'],
    separator: [':---', ':---', ':---:', ':---:'],
    body: [],
  }

  for await (const pkg of packages) {
    const packageJson: PackageJson = JSON.parse(
      await readFile(resolve(`packages/${pkg}/package.json`), 'utf8'),
    )

    table.body.push([
      `[${packageJson.name}](./packages/${pkg})`,
      packageJson.description,
      `[![NPM VERSION](https://img.shields.io/npm/v/${packageJson.name})](https://www.npmjs.com/package/${packageJson.name})`,
      ` [![Last release](https://img.shields.io/npm/last-update/${packageJson.name}?label=Last%20release)](https://www.npmjs.com/package/${packageJson.name}?activeTab=versions) `,
    ])
  }

  const markdownTable = `
| ${table.header.join(' | ')} |
| ${table.separator.join(' | ')} |
${table.body.map(row => `| ${row.join(' | ')} |`).join('\n')}
  `.trim()

  const rawReadme = await readFile(resolve('README.md'), 'utf8')
  const content = rawReadme.replace(
    /<!-- packages -->[\s\S]*<!-- packages -->/,
    `<!-- packages -->\n\n${markdownTable}\n\n<!-- packages -->`,
  )
  await writeFile(resolve('README.md'), content)
  await exec('prettier', ['--write', 'README.md'])
}

;(async () => {
  await updateReadme()
  consola.success('Updated successfully!')
})()
