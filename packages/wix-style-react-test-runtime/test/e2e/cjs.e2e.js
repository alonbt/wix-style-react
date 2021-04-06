describe('React application with commonjs requires', () => {
  beforeAll(async () => {
    await page.goto('http://localhost:3105/?type=cjs');
  });
  it('should load App with commonjs requires', async () => {
    const selector = '[data-name="App"]';
    await page.waitForSelector(selector);
    expect(await page.$eval(selector, e => !!e)).toBe(true);
  });

  it('should load components with commonjs requires', async () => {
    const selector = '[data-name="CJS-Text"]';
    await page.waitForSelector(selector);

    expect(await page.$eval(selector, e => !!e)).toBe(true);
  });

  it('should load Tooltip after statusMessage set', async () => {
    const buttonSelector = '[data-name="button"]';
    const tooltipSelector = '[data-hook="popover-content"]';
    const textSelector = '[data-name="CJS-Text"]';
    await page.waitForSelector(buttonSelector);

    expect((await page.$(tooltipSelector)) !== null).toBe(false);
    await page.click(buttonSelector);
    await page.waitForSelector(textSelector);
    await page.waitFor(50);
    await page.hover(textSelector);
    await page.waitForSelector(tooltipSelector);

    expect((await page.$(tooltipSelector)) !== null).toBe(true);
  });
});
