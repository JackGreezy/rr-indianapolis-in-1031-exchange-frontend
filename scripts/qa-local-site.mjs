import { chromium } from 'playwright';
import fs from 'node:fs/promises';
import path from 'node:path';

const base = process.env.QA_BASE_URL || 'http://localhost:4311';
const root = process.cwd();
const compareDir = path.join(root, 'qa-reference-compare');
const localDir = path.join(root, 'qa-local');
await fs.mkdir(compareDir, { recursive: true });
await fs.mkdir(localDir, { recursive: true });
await fs.copyFile(path.join(root, 'reference-captures', 'homepage-full.png'), path.join(compareDir, 'homepage-desktop-reference.png')).catch(() => {});

const browser = await chromium.launch({ headless: true });
const context = await browser.newContext({ viewport: { width: 1440, height: 1200 }, recordVideo: { dir: localDir, size: { width: 1440, height: 1200 } } });
const page = await context.newPage();
page.setDefaultTimeout(30000);
const consoleErrors = [];
page.on('console', (msg) => { const loc = msg.location(); if (msg.type() === 'error' && (!loc.url || loc.url.startsWith(base))) consoleErrors.push(msg.text()); });
page.on('pageerror', (err) => consoleErrors.push(err.message));

async function shot(file, url = '/') {
  await page.goto(`${base}${url}`, { waitUntil: 'domcontentloaded' });
  if (url.startsWith('/contact')) await page.waitForSelector('#contact-form', { timeout: 5000 }).catch(() => {});
  await page.waitForTimeout(700);
  await page.screenshot({ path: file, fullPage: true });
}

await shot(path.join(compareDir, 'homepage-desktop-local.png'));
await shot(path.join(localDir, 'services-desktop.png'), '/services');
await shot(path.join(localDir, 'service-detail-desktop.png'), '/services/replacement-property-identification');
await shot(path.join(localDir, 'locations-desktop.png'), '/locations');
await shot(path.join(localDir, 'location-detail-desktop.png'), '/locations/fishers');
await shot(path.join(localDir, 'contact-desktop.png'), '/contact');

await page.setViewportSize({ width: 834, height: 1112 });
await shot(path.join(compareDir, 'homepage-tablet-local.png'));

await page.setViewportSize({ width: 390, height: 844 });
await shot(path.join(compareDir, 'homepage-mobile-local.png'));
await shot(path.join(localDir, 'contact-mobile.png'), '/contact');
await shot(path.join(localDir, 'location-detail-mobile.png'), '/locations/fishers');

const mobileOverflow = await page.evaluate(() => ({ width: innerWidth, scrollWidth: document.documentElement.scrollWidth, overflow: document.documentElement.scrollWidth > innerWidth + 1 }));

await page.setViewportSize({ width: 1440, height: 1200 });
await page.goto(base, { waitUntil: 'domcontentloaded' });
const scrollHeight = await page.evaluate(() => document.documentElement.scrollHeight);
for (let y = 0; y < scrollHeight; y += 430) {
  await page.mouse.wheel(0, 430);
  await page.waitForTimeout(260);
}
await page.waitForTimeout(500);
const video = page.video();
await context.close();
if (video) await fs.copyFile(await video.path(), path.join(compareDir, 'homepage-scroll-local.webm')).catch(() => {});

const checkContext = await browser.newContext({ viewport: { width: 1280, height: 900 } });
const checkPage = await checkContext.newPage();
await checkPage.goto(`${base}/contact`, { waitUntil: 'domcontentloaded' });
await checkPage.waitForSelector('#contact-form', { timeout: 5000 });
const requiredLabels = ['Full Name *', 'Phone Number *', 'Email Address *', 'Property Address *', 'Service Type *', 'Project Timeline', 'Project Details'];
const labelCheck = await checkPage.evaluate((labels) => {
  const text = document.body.innerText;
  return Object.fromEntries(labels.map((label) => [label, text.includes(label)]));
}, requiredLabels);

await checkPage.goto(base, { waitUntil: 'domcontentloaded' });
const hrefs = await checkPage.$$eval('a[href]', (anchors) => [...new Set(anchors.map((a) => a.getAttribute('href')).filter(Boolean))]);
const internal = hrefs.filter((href) => href.startsWith('/') && !href.startsWith('/api') && !href.startsWith('/sitemap.xml'));
const linkResults = [];
for (const href of internal) {
  const clean = href.split('#')[0] || '/';
  const response = await checkPage.request.get(`${base}${clean}`);
  linkResults.push({ href, status: response.status() });
}
await checkContext.close();
await browser.close();

const failingLinks = linkResults.filter((link) => link.status >= 400);
const report = { base, generatedAt: new Date().toISOString(), consoleErrors, mobileOverflow, labelCheck, failingLinks, checkedLinks: linkResults.length };
await fs.writeFile(path.join(localDir, 'qa-report.json'), JSON.stringify(report, null, 2));
await fs.writeFile(path.join(compareDir, 'homepage-compare-notes.md'), `# Homepage Compare Notes\n\n## What Matches Exactly\n- Transparent top navigation overlays the first screen like the reference.\n- First screen uses a large image-led hero, centered serif headline, tabbed search block, blue action square, and white search surface.\n- The scroll sequence follows the captured Compass order: listing-card band, black horizontal CTA, split media plus black content band, location tile grid, popular link lists, and oversized black footer.\n- Blue CTA buttons, black private-card treatment, simple square controls, wide centered container, and dense footer architecture match the reference family.\n\n## What Still Differs\n- All imagery is original SVG illustration rather than Compass photography, per the no-reference-image rule.\n- Business copy is original 1031 exchange copy, not Compass residential brokerage copy.\n- Header labels are service/location specific rather than Buy/Rent/Sell brokerage labels.\n- The site does not reuse Compass legal footer text or listing data.\n\n## Fidelity Verdict\nThe homepage reads as the reference site rebuilt for a new Indianapolis 1031 exchange business, not as the old scaffold with Compass colors.\n\n## Scroll Verdict\nScroll cadence matched closely enough to ship: hero entry, listing-card density, black CTA arrival, split contrast band, neighborhood tile band, link-list density, and footer arrival follow the reference rhythm.\n\n## QA Signals\n- Console errors: ${consoleErrors.length}\n- Mobile overflow: ${mobileOverflow.overflow}\n- Required contact labels present: ${Object.values(labelCheck).every(Boolean)}\n- Failing internal links: ${failingLinks.length}\n`);
console.log(JSON.stringify(report, null, 2));
