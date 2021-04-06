import {
  waitForVisibilityOf,
  protractorUniTestkitFactoryCreator,
} from 'wix-ui-test-utils/protractor';

import { eyesItInstance } from '../../../test/utils/eyes-it';
import { createTestStoryUrl } from '../../../test/utils/storybook-helpers';
import richTextInputAreaPrivateDriverFactory from '../RichTextInputArea.private.uni.driver';
import { storySettings, testStories } from '../docs/storySettings';

const eyes = eyesItInstance();

describe('RichTextInputArea', () => {
  const testStoryUrl = createTestStoryUrl({
    ...storySettings,
    testName: testStories.richTextInputArea,
  });
  const createDriver = async (dataHook = storySettings.dataHook) => {
    const driver = protractorUniTestkitFactoryCreator(
      richTextInputAreaPrivateDriverFactory,
    )({
      dataHook,
    });

    await waitForVisibilityOf(
      await driver.element(),
      `Cannot find <RichTextInputArea/> component with dataHook of ${dataHook}`,
    );

    return driver;
  };

  beforeAll(async () => {
    await browser.get(testStoryUrl);
  });

  describe('Editor', () => {
    eyes.it(
      `should change the editor's background color on hover`,
      async () => {
        const driver = await createDriver();
        await driver.hoverTextArea();
      },
    );

    eyes.it(`should change the editor's border on click`, async () => {
      const driver = await createDriver();
      await driver.clickTextArea();
    });
  });
});
