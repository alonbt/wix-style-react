import { ElementHandle } from 'puppeteer';

export interface TextPuppeteerDriver {
  element: () => ElementHandle;
  getValue: () => Promise<string>;
}
