import eyes from 'eyes.it';
import { waitForVisibilityOf } from 'wix-ui-test-utils/protractor';
import { searchTestkitFactory } from '../../../testkit/protractor';
import { createTestStoryUrl } from '../../../test/utils/storybook-helpers';
import { storySettings, testStories } from './storySettings';

describe('Search', () => {
  const storyUrl = createTestStoryUrl({
    ...storySettings,
    testName: testStories.search,
  });
  const driver = searchTestkitFactory({ dataHook: storySettings.dataHook });

  beforeEach(done => {
    browser.get(storyUrl);
    waitForVisibilityOf(driver.element(), 'Can not find Search').then(done);
  });

  eyes.it('should filter search options by input', async () => {
    expect((await driver.getSearchDropdown()).isDisplayed()).toBe(false);
    await driver.clickOnInput();
    await driver.enterText('z');
    expect((await driver.getSearchDropdown()).isDisplayed()).toBe(true);
    expect(driver.getSearchOptionsCount()).toBe(1);
    expect(driver.getSearchOptionAt(0)).toBe('Option z');
  });

  eyes.it('should choose one of search options', async () => {
    await driver.clickOnInput();
    await driver.enterText('z');
    await driver.clickSearchOptionAt(0);
    expect(await driver.getText()).toBe('Option z');
    await driver.clickOutside();
  });

  eyes.it('should clear input after clear button click', async () => {
    await driver.clickOnInput();
    await driver.enterText('z');
    expect(await driver.hasClearButton()).toBe(true);
    await driver.clickClear();
    expect((await driver.getSearchDropdown()).isDisplayed()).toBe(false);
    expect(await driver.getText()).toBe('');
  });
});
