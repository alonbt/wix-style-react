import { datePickerTestkitFactory } from '../../../testkit/protractor';
import { createTestStoryUrl } from '../../../test/utils/storybook-helpers';
import { eyesItInstance } from '../../../test/utils/eyes-it';
import { storySettings, testStories } from '../docs/storySettings';

const testStoryUrl = testName =>
  createTestStoryUrl({ ...storySettings, testName });

describe('DatePicker', () => {
  const eyes = eyesItInstance();
  const { dataHook } = storySettings;
  const { inputDriver, calendarDriver } = datePickerTestkitFactory({
    dataHook,
  });

  eyes.it(
    'should not close calendar on selecting date with click when shouldCloseOnSelect prop set to false',
    async () => {
      await browser.get(testStoryUrl(testStories.notClosing));
      await inputDriver.click();

      await calendarDriver.clickOnNthAvailableDay(10);

      expect(await calendarDriver.exists()).toBe(true);
      expect(await calendarDriver.isVisible()).toBe(true);
      expect(await inputDriver.isVisible()).toBe(true);
    },
  );

  describe('default', () => {
    beforeEach(
      async () => await browser.get(testStoryUrl(testStories.datepicker)),
    );

    eyes.it('should not change date', async () => {
      await inputDriver.click();
      await calendarDriver.pressEnterKey();

      expect(await inputDriver.getValue()).toBe('2017/05/01');
    });

    eyes.it('should close calendar on selecting date with click', async () => {
      await inputDriver.click();
      await calendarDriver.clickOnNthAvailableDay(1);
      expect(await calendarDriver.exists()).toBe(false);
    });

    eyes.it('should close calendar on Escape key', async () => {
      await inputDriver.click();
      expect(await calendarDriver.exists()).toBe(true);

      await calendarDriver.pressEscKey();
      expect(await calendarDriver.exists()).toBe(false);
    });

    eyes.it('should close calendar on Tab key', async () => {
      await inputDriver.click();
      expect(await calendarDriver.exists()).toBe(true);

      await calendarDriver.pressTabKey();
      expect(await calendarDriver.exists()).toBe(false);
    });

    eyes.it('should select next day date', async () => {
      await inputDriver.click();
      await calendarDriver.pressArrowRightKey();

      await calendarDriver.pressEnterKey();

      expect(await inputDriver.getValue()).toBe('2017/05/02');
    });
  });

  describe('with year and month dropdown', () => {
    beforeEach(
      async () => await browser.get(testStoryUrl(testStories.withDropdowns)),
    );

    eyes.it('should be scrolled to current year', async () => {
      await inputDriver.click();
      await calendarDriver.openYearDropdownOptions();
      expect(await calendarDriver.isYearInViewPort('2017')).toBeTruthy();
    });

    eyes.it('should select 2027 year', async () => {
      await inputDriver.click();

      await calendarDriver.openYearDropdownOptions();
      await calendarDriver.clickOnNthYear();
      await calendarDriver.clickOnNthAvailableDay();

      expect(await inputDriver.getValue()).toBe('2027/05/01');
    });

    eyes.it('should select February', async () => {
      await inputDriver.click();

      await calendarDriver.openMonthDropdownOptions();
      await calendarDriver.clickOnNthMonth(2);
      await calendarDriver.clickOnNthAvailableDay();

      expect(await inputDriver.getValue()).toBe('2017/02/01');
    });

    eyes.it('should select February and 2026 year', async () => {
      await inputDriver.click();

      await calendarDriver.openYearDropdownOptions();
      await calendarDriver.clickOnNthYear(2);
      await calendarDriver.openMonthDropdownOptions();
      await calendarDriver.clickOnNthMonth(2);
      await calendarDriver.clickOnNthAvailableDay();

      expect(await inputDriver.getValue()).toBe('2026/02/01');
    });
  });
});
