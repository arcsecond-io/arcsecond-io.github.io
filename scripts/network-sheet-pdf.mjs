#!/usr/bin/env node
// Print the network sheet to a PDF, and refuse anything but one page.
//
// The sheet itself is docs/public/network/network-sheet.html, written by
// `arcsecond docs network` from the command-line tool's network manifest.
// This only prints it, with whatever Chromium-family browser the machine
// has, so the PDF can never say anything the manifest does not.
//
//   node scripts/network-sheet-pdf.mjs [output.pdf ...]
//
// With no argument it writes beside the sheet. Each argument is one more
// place to write the same file — the landing site keeps a copy:
//
//   npm run sheet:pdf -- ../arcsecond-homes/public/arcsecond-local-network-sheet.pdf

import { execFileSync } from 'node:child_process'
import { copyFileSync, existsSync, mkdirSync, readdirSync, readFileSync } from 'node:fs'
import { homedir } from 'node:os'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const here = dirname(fileURLToPath(import.meta.url))
const sheet = join(here, '../docs/public/network/network-sheet.html')
const pdf = join(here, '../docs/public/network/arcsecond-local-network-sheet.pdf')

function onPath (name) {
  try {
    return execFileSync('which', [name], { encoding: 'utf8' }).trim() || null
  } catch {
    return null
  }
}

function playwrightBrowsers () {
  const cache = process.platform === 'darwin'
    ? join(homedir(), 'Library/Caches/ms-playwright')
    : join(homedir(), '.cache/ms-playwright')
  if (!existsSync(cache)) return []
  return readdirSync(cache)
    .filter(name => name.startsWith('chromium-'))
    .flatMap(name => [
      join(cache, name, 'chrome-mac-arm64/Google Chrome for Testing.app/Contents/MacOS/Google Chrome for Testing'),
      join(cache, name, 'chrome-mac/Chromium.app/Contents/MacOS/Chromium'),
      join(cache, name, 'chrome-linux/chrome'),
      join(cache, name, 'chrome-linux64/chrome')
    ])
}

function findBrowser () {
  const candidates = [
    process.env.CHROME,
    onPath('google-chrome'),
    onPath('google-chrome-stable'),
    onPath('chromium'),
    onPath('chromium-browser'),
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    '/Applications/Chromium.app/Contents/MacOS/Chromium',
    '/Applications/Brave Browser.app/Contents/MacOS/Brave Browser',
    '/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge',
    ...playwrightBrowsers()
  ]
  return candidates.find(path => path && existsSync(path))
}

if (!existsSync(sheet)) {
  console.error(`No sheet at ${sheet}. Write it first:\n  arcsecond docs network --out docs/reference/network --static docs/public/network`)
  process.exit(1)
}
const browser = findBrowser()
if (!browser) {
  console.error('No Chromium-family browser found. Set CHROME to the path of one.')
  process.exit(1)
}

execFileSync(browser, [
  '--headless=new',
  '--disable-gpu',
  '--no-sandbox',
  '--no-pdf-header-footer',
  `--print-to-pdf=${pdf}`,
  pathToFileURL(sheet).href
], { stdio: 'ignore' })

// One page is the whole point of the sheet. Chromium writes the page tree's
// count in clear.
const pages = Number((readFileSync(pdf, 'latin1').match(/\/Type\s*\/Pages[^>]*\/Count (\d+)|\/Count (\d+)/) || []).slice(1).find(Boolean))
if (pages !== 1) {
  console.error(`The network sheet prints on ${pages || 'an unknown number of'} pages, not one. Shorten the manifest's lines, or the sheet's.`)
  process.exit(1)
}
console.log(`One page: ${pdf}`)

for (const target of process.argv.slice(2)) {
  const to = resolve(target)
  mkdirSync(dirname(to), { recursive: true })
  copyFileSync(pdf, to)
  console.log(`Copied to ${to}`)
}
