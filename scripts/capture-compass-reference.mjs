import { chromium } from 'playwright';
import fs from 'node:fs/promises';
import path from 'node:path';

const outDir = path.resolve(process.cwd(), 'reference-captures');
await fs.mkdir(outDir, { recursive: true });

const browser = await chromium.launch({ headless: true });
const context = await browser.newContext({
  viewport: { width: 1440, height: 1200 },
  deviceScaleFactor: 1,
  recordVideo: { dir: outDir, size: { width: 1440, height: 1200 } },
  userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36',
});
const page = await context.newPage();
page.setDefaultTimeout(45000);

const responses = [];
page.on('response', async (response) => {
  const url = response.url();
  if (/\.(css|js|woff2?|png|jpe?g|webp|avif|svg|mp4)(\?|$)/i.test(url)) {
    responses.push({ url, status: response.status(), contentType: response.headers()['content-type'] || '' });
  }
});

async function closeOverlays(targetPage) {
  const selectors = [
    'button:has-text("Accept")',
    'button:has-text("I Accept")',
    'button:has-text("Accept All")',
    'button:has-text("Agree")',
    'button:has-text("Got it")',
    'button:has-text("Close")',
    '[aria-label="Close"]',
    '[aria-label="close"]',
    '[data-testid*="close"]',
  ];
  for (const selector of selectors) {
    try {
      const loc = targetPage.locator(selector).first();
      if (await loc.isVisible({ timeout: 1200 })) await loc.click({ timeout: 1200 });
    } catch {}
  }
}

await page.goto('https://www.compass.com/', { waitUntil: 'domcontentloaded' });
await page.waitForLoadState('networkidle', { timeout: 45000 }).catch(() => {});
await closeOverlays(page);
await page.waitForTimeout(2500);

await page.screenshot({ path: path.join(outDir, 'homepage-full.png'), fullPage: true });
await page.locator('header, nav').first().screenshot({ path: path.join(outDir, 'nav.png') }).catch(async () => {
  await page.screenshot({ path: path.join(outDir, 'nav.png'), clip: { x: 0, y: 0, width: 1440, height: 140 } });
});
await page.screenshot({ path: path.join(outDir, 'hero.png') });

const docHeight = await page.evaluate(() => Math.max(document.body.scrollHeight, document.documentElement.scrollHeight));
const viewportShot = async (fileName, y) => {
  await page.evaluate((scrollY) => window.scrollTo(0, scrollY), Math.max(0, y));
  await page.waitForTimeout(800);
  await page.screenshot({ path: path.join(outDir, fileName) });
};
await viewportShot('capabilities.png', Math.min(900, Math.max(0, docHeight - 1200)));
await viewportShot('cta-band.png', Math.min(1700, Math.max(0, docHeight - 900)));
await viewportShot('footer.png', Math.max(0, docHeight - 1200));
await page.evaluate(() => window.scrollTo(0, 0));

const styleDna = await page.evaluate(() => {
  const styles = [...document.querySelectorAll('style,link[rel="stylesheet"]')].map((el) => el.href || 'inline-style');
  const fontLinks = [...document.querySelectorAll('link[href*="font"], link[href*="typekit"], link[href*="fonts"]')].map((el) => el.href);
  const pick = (selector) => {
    const el = document.querySelector(selector);
    if (!el) return null;
    const cs = getComputedStyle(el);
    const rect = el.getBoundingClientRect();
    return {
      selector,
      fontFamily: cs.fontFamily,
      fontSize: cs.fontSize,
      fontWeight: cs.fontWeight,
      lineHeight: cs.lineHeight,
      letterSpacing: cs.letterSpacing,
      color: cs.color,
      background: cs.backgroundColor,
      borderRadius: cs.borderRadius,
      boxShadow: cs.boxShadow,
      textTransform: cs.textTransform,
      width: Math.round(rect.width),
      height: Math.round(rect.height),
    };
  };
  const colors = new Map();
  const fonts = new Map();
  for (const el of [...document.querySelectorAll('body, header, main, section, footer, h1, h2, h3, p, a, button, input')].slice(0, 500)) {
    const cs = getComputedStyle(el);
    [cs.color, cs.backgroundColor, cs.borderColor].forEach((c) => colors.set(c, (colors.get(c) || 0) + 1));
    fonts.set(cs.fontFamily, (fonts.get(cs.fontFamily) || 0) + 1);
  }
  const buttons = [...document.querySelectorAll('a,button')].filter((el) => {
    const r = el.getBoundingClientRect();
    const txt = (el.textContent || '').trim();
    return txt && r.width > 40 && r.height > 20;
  }).slice(0, 24).map((el) => {
    const cs = getComputedStyle(el);
    const r = el.getBoundingClientRect();
    return {
      text: (el.textContent || '').trim().replace(/\s+/g, ' ').slice(0, 80),
      fontFamily: cs.fontFamily,
      fontSize: cs.fontSize,
      fontWeight: cs.fontWeight,
      color: cs.color,
      background: cs.backgroundColor,
      border: cs.border,
      borderRadius: cs.borderRadius,
      padding: cs.padding,
      textTransform: cs.textTransform,
      letterSpacing: cs.letterSpacing,
      width: Math.round(r.width),
      height: Math.round(r.height),
    };
  });
  const header = document.querySelector('header, nav');
  const headerRect = header?.getBoundingClientRect();
  const sections = [...document.querySelectorAll('main section, section, [class*="section"], [class*="module"]')].slice(0, 20).map((el, index) => {
    const cs = getComputedStyle(el);
    const r = el.getBoundingClientRect();
    return {
      index,
      tag: el.tagName.toLowerCase(),
      className: el.className?.toString().slice(0, 160),
      top: Math.round(r.top + scrollY),
      height: Math.round(r.height),
      background: cs.backgroundColor,
      display: cs.display,
      position: cs.position,
    };
  });
  return {
    url: location.href,
    title: document.title,
    cssBundleUrls: styles,
    fontUrls: fontLinks,
    dominantColors: [...colors.entries()].sort((a, b) => b[1] - a[1]).slice(0, 24),
    fontFamilies: [...fonts.entries()].sort((a, b) => b[1] - a[1]).slice(0, 12),
    typography: [pick('body'), pick('h1'), pick('h2'), pick('h3'), pick('p'), pick('a')],
    buttonStyles: buttons,
    spacingRhythm: sections,
    header: headerRect ? { height: Math.round(headerRect.height), width: Math.round(headerRect.width), position: getComputedStyle(header).position } : null,
    viewport: { width: innerWidth, height: innerHeight },
    scrollHeight: document.documentElement.scrollHeight,
  };
});
await fs.writeFile(path.join(outDir, 'style-dna.json'), JSON.stringify(styleDna, null, 2));

const inventory = await page.evaluate(() => ({
  images: [...document.images].map((img) => ({ src: img.currentSrc || img.src, alt: img.alt || '', width: img.naturalWidth, height: img.naturalHeight })).filter((img) => img.src).slice(0, 120),
  videos: [...document.querySelectorAll('video source, video')].map((v) => v.currentSrc || v.src).filter(Boolean),
  backgroundImages: [...document.querySelectorAll('*')].map((el) => getComputedStyle(el).backgroundImage).filter((bg) => bg && bg !== 'none').slice(0, 120),
}));
inventory.networkAssets = responses;
await fs.writeFile(path.join(outDir, 'asset-inventory.json'), JSON.stringify(inventory, null, 2));

for (const [name, viewport] of Object.entries({
  'homepage-tablet.png': { width: 834, height: 1112 },
  'homepage-mobile.png': { width: 390, height: 844 },
})) {
  await page.setViewportSize(viewport);
  await page.goto('https://www.compass.com/', { waitUntil: 'domcontentloaded' });
  await page.waitForLoadState('networkidle', { timeout: 45000 }).catch(() => {});
  await closeOverlays(page);
  await page.waitForTimeout(1800);
  await page.screenshot({ path: path.join(outDir, name), fullPage: true });
}

await page.setViewportSize({ width: 1440, height: 1200 });
await page.goto('https://www.compass.com/', { waitUntil: 'domcontentloaded' });
await page.waitForLoadState('networkidle', { timeout: 45000 }).catch(() => {});
await closeOverlays(page);
await page.waitForTimeout(1200);
const scrollHeight = await page.evaluate(() => document.documentElement.scrollHeight);
for (let y = 0; y <= scrollHeight - 1200; y += 420) {
  await page.mouse.wheel(0, 420);
  await page.waitForTimeout(450);
}
await page.waitForTimeout(1000);
const video = page.video();
await context.close();
if (video) {
  const videoPath = await video.path();
  await fs.copyFile(videoPath, path.join(outDir, 'homepage-scroll.webm')).catch(() => {});
}
await browser.close();
