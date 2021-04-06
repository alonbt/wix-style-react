import { waitForVisibilityOf } from 'wix-ui-test-utils/protractor';

import { createTestStoryUrl } from '../../../test/utils/storybook-helpers';
import {
  SidebarTestkit,
  ButtonTestkit,
  SidebarSectionItemTestkit,
} from '../../../testkit/protractor';
import { storySettings } from './storySettings';

const createStoryUrl = testName =>
  createTestStoryUrl({ ...storySettings, testName });
const testStoryNames = storySettings.testStoryNames;

describe('Sidebar', () => {
  let driver;

  const createDriver = async (dataHook = storySettings.dataHooks.sidebar) => {
    driver = SidebarTestkit({ dataHook });

    await waitForVisibilityOf(await driver.element(), 'Cannot find Sidebar');

    return driver;
  };

  describe('Sidebar gradient', () => {
    beforeEach(async () => {
      await browser.get(createStoryUrl(testStoryNames.GRADIENT));
      await createDriver();
    });

    const clickAddItemButton = async () => {
      const buttonDriver = ButtonTestkit({
        dataHook: storySettings.dataHooks.addItemButton,
      });
      await buttonDriver.click();
    };

    const clickInnerMenuItem = async () => {
      const sidebatItemDriver = SidebarSectionItemTestkit({
        dataHook: storySettings.dataHooks.innerMenuItem,
      });
      await sidebatItemDriver.click();
    };

    const clickSetHeightButton = async () => {
      const buttonDriver = ButtonTestkit({
        dataHook: storySettings.dataHooks.setBoxHeightButton,
      });
      await buttonDriver.click();
    };

    it('Should not show gradient when items list is smaller than list container', async () => {
      expect(driver.isGradientDisplayed()).toBe(false);
    });

    it('Should show gradient when items list is larger than list container', async () => {
      expect(driver.isGradientDisplayed()).toBe(false);
      await clickAddItemButton();
      expect(driver.isGradientDisplayed()).toBe(true);
    });

    it('Should show gradient on inner menu when items list is larger than list container', async () => {
      expect(driver.isGradientDisplayed()).toBe(false);
      await clickInnerMenuItem();
      expect(driver.isGradientDisplayed()).toBe(true);
    });

    it('Should show gradient when container is resized to be smaller than items list', async () => {
      expect(driver.isGradientDisplayed()).toBe(false);
      await clickSetHeightButton();
      expect(driver.isGradientDisplayed()).toBe(true);
    });
  });
});
