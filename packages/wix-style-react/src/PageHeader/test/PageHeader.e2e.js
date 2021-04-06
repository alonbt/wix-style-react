import { waitForVisibilityOf } from 'wix-ui-test-utils/protractor';
import { eyesItInstance } from '../../../test/utils/eyes-it';
import {
  pageHeaderTestkitFactory,
  dropdownTestkitFactory,
} from '../../../testkit/protractor';
import { createTestStoryUrl } from '../../../test/utils/storybook-helpers';
import { storySettings } from '../docs/storySettings';

describe('PageHeader', () => {
  const eyes = eyesItInstance();

  const testStoryUrl = ({ testName, rtl }) =>
    createTestStoryUrl({ ...storySettings, testName, rtl });

  const initTest = async ({ testName, rtl }) => {
    await browser.get(testStoryUrl({ testName, rtl }));
    const dataHook = 'story-page-header';
    const driver = pageHeaderTestkitFactory({ dataHook });
    await waitForVisibilityOf(driver.element(), 'Cannot find PageHeader');
    return driver;
  };

  describe('Ellipsis', () => {
    eyes.it(
      'should display an opened dropdown in title (no ellipsis)',
      async () => {
        await initTest({ testName: '1. Title with Dropdown' });
        const dropdownTestkit = dropdownTestkitFactory({
          dataHook: 'title-dropdown',
        });
        await dropdownTestkit.click();
      },
    );

    eyes.it(
      'should display an opened dropdown in subtitle (no ellipsis)',
      async () => {
        await initTest({ testName: '2. Subtitle with Dropdown' });
        const dropdownTestkit = dropdownTestkitFactory({
          dataHook: 'subtitle-dropdown',
        });
        await dropdownTestkit.click();
      },
    );
  });
});
