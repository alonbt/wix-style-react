import * as eyes from 'eyes.it';
import { browser, by, element, Key } from 'protractor';
import {
  createStoryUrl,
  waitForVisibilityOf,
} from 'wix-ui-test-utils/protractor';
import { StoryCategory } from '../../../stories/storyHierarchy';

describe('ColorPicker', () => {
  const storyUrl = createStoryUrl({
    kind: StoryCategory.TESTS,
    story: 'ColorPicker',
  });
  const initialFocusElementId = 'initial-focus';

  beforeEach(async () => {
    browser.get(storyUrl);
    const focusElement = element(by.id(initialFocusElementId));

    await waitForVisibilityOf(await focusElement, 'Cannot find ColorPicker');

    return focusElement.click();
  });

  eyes.it('should show the correct design on focus', async () => {
    await browser.actions().sendKeys(Key.TAB, Key.ARROW_DOWN, Key.ARROW_DOWN);
  });
});
