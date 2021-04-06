import {
  buttonTestkitFactory,
  headingTestkitFactory,
} from 'wix-style-react/dist/testkit/puppeteer';
import http from 'http';

describe('React application to be interacted with puppeteer testkit', () => {
  beforeAll(async () => {
    await page.goto('http://localhost:3105/?type=puppeteer-testkit');
  });

  it('should use a valid puppeter testkit', async () => {
    const actionButtonDataHook = 'action-button';
    const approvalTextDataHook = 'approval-text';

    await page.waitForSelector(`[data-hook=${actionButtonDataHook}]`);
    const actionButtonDriver = await buttonTestkitFactory({
      page,
      dataHook: actionButtonDataHook,
    });
    await actionButtonDriver.click();

    await page.waitForSelector(`[data-hook=${approvalTextDataHook}]`);
    const approvalTextDriver = await headingTestkitFactory({
      page,
      dataHook: approvalTextDataHook,
    });

    expect(await approvalTextDriver.getValue()).toContain('It was clicked!');
  });

  // This test makes sure that no css files or similar are imported by the drivers. kind of an SSR test
  it('should be imported in node-env', async () => {
    let error;
    try {
      await http.get('http://localhost:3105/puppeteer-testkit-require');
    } catch (e) {
      error = `${e.response.data.errorMessage} ${e.response.data.errorLog}`;
    }
    expect(error).not.toBeDefined();
  });
});
