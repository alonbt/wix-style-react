import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';
import { ReactBase } from '../../test/utils/unidriver';
import {
  enterRichTextValue,
  focusOnRichEditor,
  getContent,
} from '../../test/utils/unidriver/DraftJS';
import { statusIndicatorDriverFactory } from '../StatusIndicator/StatusIndicator.uni.driver';
import { dataHooks } from './constants';

export const getPlaceholder = base =>
  base.$('.public-DraftEditorPlaceholder-root');

export default (base, body) => {
  const getStatusIndicatorDriver = () =>
    statusIndicatorDriverFactory(
      base.$(`[data-hook="${dataHooks.indicator}"]`),
      body,
    );

  const baseUniDriver = baseUniDriverFactory(base);

  return {
    ...baseUniDriver,
    click: async () => {
      await baseUniDriver.click();
      await focusOnRichEditor(base);
    },
    isDisabled: async () =>
      (await getContent(base).attr('contenteditable')) === 'false',
    getContent: () => getContent(base).text(),
    getPlaceholder: () => getPlaceholder(base).text(),
    enterText: text => enterRichTextValue(base, text),
    blur: async () => {
      if (base.type === 'react') {
        return ReactBase(getContent(base)).blur();
      } else if (base.type === 'puppeteer') {
        await page.$eval('.public-DraftEditor-content', e => e.blur());
      }
    },
    focus: () => focusOnRichEditor(base),
    // Status
    /** Return true if there's a status */
    hasStatus: async status => {
      const statusIndicatorDriver = getStatusIndicatorDriver();
      if (await statusIndicatorDriver.exists()) {
        return status === (await statusIndicatorDriver.getStatus());
      }

      return false;
    },
    /** If there's a status message, returns its text value */
    getStatusMessage: async () => {
      const statusIndicatorDriver = getStatusIndicatorDriver();
      let tooltipText = null;

      if (await statusIndicatorDriver.hasMessage()) {
        tooltipText = await statusIndicatorDriver.getMessage();
      }

      return tooltipText;
    },
  };
};
