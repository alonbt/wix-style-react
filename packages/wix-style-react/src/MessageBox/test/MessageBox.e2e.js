import { waitForVisibilityOf } from 'wix-ui-test-utils/protractor';
import {
  buttonTestkitFactory,
  messageBoxFunctionalLayoutTestkitFactory,
} from '../../../testkit/protractor';
import { eyesItInstance } from '../../../test/utils/eyes-it';
import { createTestStoryUrl } from '../../../test/utils/storybook-helpers';
import { storySettings, testStories } from '../docs/storySettings';

const byDataHook = dataHook => $(`[data-hook="${dataHook}"]`);
const eyes = eyesItInstance();

describe('MessageBox', () => {
  describe('Alert', () => {
    const dataHook = 'alert-scrollable';

    eyes.it(
      'should show footer border for scrollable modal and hide the border when scroll is on the bottom',
      async () => {
        await browser.get(
          createTestStoryUrl({
            testName: testStories.alert,
            category: storySettings.alert.kind,
            storyName: storySettings.alert.story,
          }),
        );
        const element = byDataHook(dataHook);
        await waitForVisibilityOf(element, `Cannot find ${dataHook}`);
        await eyes.checkWindow(dataHook);

        const driver = messageBoxFunctionalLayoutTestkitFactory({
          dataHook,
        });
        const SMALL_SCROLL_OFFSET = 50;
        const MAX_SCROLL_OFFSET = 500;

        expect(await driver.toHaveFooterBorder()).toBe(true);

        await driver.scrollBodyDown(SMALL_SCROLL_OFFSET);
        expect(await driver.toHaveFooterBorder()).toBe(true);

        await driver.scrollBodyDown(MAX_SCROLL_OFFSET);
        expect(await driver.toHaveFooterBorder()).toBe(false);
      },
    );
  });

  describe('Custom Modal', () => {
    const modalDataHook = 'fullscreen-modal';
    eyes.it('should open full screen modal', async () => {
      await browser.get(
        createTestStoryUrl({
          testName: testStories.fullScreenModal,
          category: storySettings.custom.kind,
          storyName: storySettings.custom.story,
        }),
      );
      const button = buttonTestkitFactory({
        dataHook: 'open-full-screen-modal-button',
      });
      button.click();
      const element = byDataHook(modalDataHook);
      await waitForVisibilityOf(element, `Cannot find ${modalDataHook}`);
    });
  });
});
