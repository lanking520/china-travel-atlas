import { chromium, devices } from 'playwright';
import fs from 'node:fs';

const base = process.env.UX_BASE || 'http://127.0.0.1:3000';
const errors = [];
fs.mkdirSync('research/raw', { recursive: true });

async function check(name, fn) {
  try {
    await fn();
    console.log('OK', name);
  } catch (e) {
    console.log('FAIL', name, e.message.split('\n')[0]);
    errors.push(`${name}: ${e.message.split('\n')[0]}`);
  }
}

const browser = await chromium.launch({ headless: true });
const context = await browser.newContext({ ...devices['iPhone 12'] });
const page = await context.newPage();
page.on('pageerror', (e) => errors.push(`pageerror: ${e.message}`));

await check('home', async () => {
  const res = await page.goto(base + '/', { waitUntil: 'domcontentloaded', timeout: 30000 });
  if (!res || !res.ok()) throw new Error('status ' + res?.status());
  await page.waitForTimeout(1500);
  const body = await page.locator('body').innerText();
  if (!/旅游|路线|探索|季节/.test(body)) throw new Error('home copy missing');
  await page.screenshot({ path: 'research/raw/ux-home-mobile.png', fullPage: true });
});

await check('filter-click', async () => {
  const buttons = page.getByRole('button');
  const n = await buttons.count();
  if (n < 3) throw new Error('too few buttons ' + n);
  // click a season / region chip if present
  for (const label of ['冬', '夏', '华北', '华南', '长旅行', '短途']) {
    const b = page.getByRole('button', { name: label });
    if (await b.count()) {
      await b.first().click();
      await page.waitForTimeout(400);
      break;
    }
  }
});

await check('open-route', async () => {
  const link = page.locator('a[href*="routes"]').first();
  await link.waitFor({ timeout: 10000 });
  await link.click();
  await page.waitForTimeout(1200);
  if (!page.url().includes('routes')) throw new Error('url ' + page.url());
  await page.screenshot({ path: 'research/raw/ux-route-mobile.png', fullPage: true });
});

await check('about', async () => {
  const res = await page.goto(base + '/about', { waitUntil: 'domcontentloaded' });
  if (!res || !res.ok()) throw new Error('status ' + res?.status());
});

await check('overview', async () => {
  const res = await page.goto(base + '/overview', { waitUntil: 'domcontentloaded' });
  if (!res || !res.ok()) throw new Error('status ' + res?.status());
});

await check('new-route-xian', async () => {
  const res = await page.goto(base + '/routes/huazhong-xian-slow', { waitUntil: 'domcontentloaded' });
  if (!res || !res.ok()) throw new Error('status ' + res?.status());
  const t = await page.locator('body').innerText();
  if (!/西安/.test(t)) throw new Error('xian page missing');
});

await check('new-route-xinjiang', async () => {
  const res = await page.goto(base + '/routes/xibei-xinjiang-north', { waitUntil: 'domcontentloaded' });
  if (!res || !res.ok()) throw new Error('status ' + res?.status());
});

await browser.close();
if (errors.length) {
  console.log('UX_ERRORS', errors.length);
  errors.forEach((e) => console.log('-', e));
  process.exit(1);
}
console.log('UX_SMOKE_PASS');
