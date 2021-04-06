import { createTestStoryUrl } from './storybook-helpers';
import { browser } from 'protractor';
import { waitForVisibilityOf } from 'wix-ui-test-utils/protractor';

export const navigateToTestUrl = async ({
  testName,
  category,
  storyName,
  rtl,
}) => {
  const testStoryUrl = createTestStoryUrl({
    testName,
    category,
    storyName,
    rtl,
  });
  await browser.get(testStoryUrl);
};

export const setupBeforeEach = (testName, settings, createTestkit) =>
  beforeEach(() => setupForTest(testName, settings, createTestkit));

export const setupForTest = async (testName, settings, createTestkit) => {
  await navigateToTestUrl({ testName, ...settings });

  const testkit = createTestkit(settings);
  await waitForVisibilityOf(
    await testkit.element(),
    `Cant find ${settings.dataHook}`,
  );
};
