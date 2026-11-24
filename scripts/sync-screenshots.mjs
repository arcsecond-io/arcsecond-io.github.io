// The screenshots of the app pages (`npm run screenshots`).
//
// arcsecond-homes' platformApps.json decides which tools are illustrated, by
// which shots, with which alt text and caption. For each of these shots:
//   1. the newest version found in arcsecond-screenshots/output/<tag>/ wins,
//      whatever tag the gallery names;
//   2. otherwise the older image the gallery names: in
//      arcsecond-screenshots/output/old, then from statics.arcsecond.io.
// Both themes must exist for a shot to be taken.
//
// Writes docs/public/images/tools/<tool>-<index>-<dark|light>.webp, and
// docs/.vitepress/screenshots.json, which ToolShot.vue reads. Both are
// committed: the site and its embedded copy build without the sibling
// repositories, and the embedded copy shows its images offline.
//
// Needs cwebp, and the two repositories beside this one (or HOMES_DIR and
// SCREENSHOTS_DIR).
import { execFileSync } from 'node:child_process'
import { existsSync, mkdirSync, mkdtempSync, readFileSync, readdirSync, rmSync, statSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { basename, dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const homes = process.env.HOMES_DIR || join(root, '../arcsecond-homes')
const screenshots = process.env.SCREENSHOTS_DIR || join(root, '../arcsecond-screenshots')
const outDir = join(root, 'docs/public/images/tools')
const manifestFile = join(root, 'docs/.vitepress/screenshots.json')
const STATICS = 'https://statics.arcsecond.io/screenshots'
const THEMES = ['dark', 'light']
const WIDTH = 2000

// An older image arcsecond-homes shows elsewhere than in the gallery, newer
// than the one its gallery still names.
const REPLACED = { 'platform62-nightstudio-nightexplorer': 'arcsecond-nightstudio-epxlorer-71-6panes' }
// In the gallery, but not documented: no such tool in the app today, or
// documented elsewhere (the open-source ecosystem).
const SKIPPED = ['queue-mode']
const SKIPPED_APPS = ['Open Source Ecosystem']

const bySemver = (a, b) => {
  const [x, y] = [a, b].map(tag => tag.split('.').map(Number))
  return y[0] - x[0] || y[1] - x[1] || y[2] - x[2]
}
const output = join(screenshots, 'output')
const tags = readdirSync(output).filter(name => /^\d+\.\d+\.\d+$/.test(name)).sort(bySemver)

function * walk (dir) {
  if (!existsSync(dir)) return
  for (const name of readdirSync(dir)) {
    const path = join(dir, name)
    if (statSync(path).isDirectory()) yield * walk(path)
    else yield path
  }
}
const oldFiles = new Map([...walk(join(output, 'old'))].map(path => [basename(path), path]))
const tmp = mkdtempSync(join(tmpdir(), 'screenshots-'))

async function locate (src) {
  const name = basename(src)
  const shot = name.match(/^local-\d+\.\d+\.\d+-(.+)$/)?.[1]
  if (shot) {
    for (const tag of tags) {
      const files = THEMES.map(theme => join(output, tag, `local-${tag}-${shot}-${theme}.png`))
      if (files.every(f => existsSync(f))) return { files, source: tag }
    }
  }
  const old = REPLACED[name] || name
  const files = THEMES.map(theme => oldFiles.get(`${old}-${theme}.png`))
  if (files.every(Boolean)) return { files, source: old }
  const fetched = []
  for (const theme of THEMES) {
    const url = `${STATICS}/${shot ? src : old}-${theme}.png`
    const response = await fetch(url)
    if (!response.ok) throw new Error(`${src}: not found locally, and ${url} answers ${response.status}`)
    const file = join(tmp, `${old}-${theme}.png`)
    writeFileSync(file, Buffer.from(await response.arrayBuffer()))
    fetched.push(file)
  }
  return { files: fetched, source: `statics: ${old}` }
}

const apps = JSON.parse(readFileSync(join(homes, 'src/homes/arcsecond/welcome/platformApps.json'), 'utf8'))
const manifest = {}
const jobs = []
for (const app of apps) {
  if (SKIPPED_APPS.includes(app.name)) continue
  for (const tool of app.tools) {
    if (SKIPPED.includes(tool.id)) continue
    manifest[tool.id] = []
    for (const [index, shot] of tool.screenshots.entries()) {
      const { files, source } = await locate(shot.src)
      const name = `${tool.id}-${index}`
      manifest[tool.id].push({ name, source, alt: shot.alt || tool.name, caption: shot.caption || '' })
      THEMES.forEach((theme, i) => jobs.push([files[i], join(outDir, `${name}-${theme}.webp`)]))
      console.log(`${name.padEnd(30)} ${source}`)
    }
  }
}

// Everything was found: only now is the previous set replaced.
rmSync(outDir, { recursive: true, force: true })
mkdirSync(outDir, { recursive: true })
for (const [from, to] of jobs) execFileSync('cwebp', ['-quiet', '-q', '82', '-resize', String(WIDTH), '0', from, '-o', to])
writeFileSync(manifestFile, JSON.stringify(manifest, null, 2) + '\n')
rmSync(tmp, { recursive: true, force: true })
