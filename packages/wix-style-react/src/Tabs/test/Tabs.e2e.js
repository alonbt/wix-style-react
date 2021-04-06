import { waitForVisibilityOf } from 'wix-ui-test-utils/protractor';
import { tabsTestkitFactory } from '../../../testkit/protractor';
import { eyesItInstance } from '../../../test/utils/eyes-it';
import { createTestStoryUrl } from '../../../test/utils/storybook-helpers';
import { storySettings, testStories } from '../docs/storySettings';

describe('Tabs', () => {
  const eyes = eyesItInstance();
  const storyUrl = createTestStoryUrl({
    ...storySettings,
    testName: testStories.tabs,
  });
  const { dataHook } = storySettings;

  eyes.it('renders enough tab items', () => {
    const tabsDriver = tabsTestkitFactory({ dataHook });

    browser.get(storyUrl);

    return waitForVisibilityOf(tabsDriver.element()).then(() => {
      expect(tabsDriver.getItemsCount()).toBe(7);
    });
  });
});
