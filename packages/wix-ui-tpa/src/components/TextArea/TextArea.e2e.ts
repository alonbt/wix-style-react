import { browser, by, element, Key } from 'protractor';
import * as eyes from 'eyes.it';
import {
  createStoryUrl,
  waitForVisibilityOf,
} from 'wix-ui-test-utils/protractor';
import { textAreaTestkitFactory } from '../../testkit/protractor';
import { StoryCategory } from '../../../stories/storyHierarchy';

describe('TextArea', () => {
  const storyUrl = createStoryUrl({
    kind: `${StoryCategory.TESTS}/TextArea`,
    story: 'Max Length and focus',
    withExamples: true,
  });
  const dataHook = 'storybook-e2e-TextArea';
  const initialFocusElementId = 'initial-focus';

  beforeEach(async () => {
    await browser.get(storyUrl);
  });

  it('should set max length of characters', async () => {
    const driver = textAreaTestkitFactory({ dataHook });
    await waitForVisibilityOf(await driver.element(), 'Cannot find TextArea');
    const someLongText = 'some very very long text';
    await driver.typeText(someLongText);

    expect(await driver.value()).toBe(someLongText.substr(0, 3));
  });

  eyes.it('should show the correct design on focus theme box', async () => {
    const focusElement = element(by.id(initialFocusElementId));

    await waitForVisibilityOf(await focusElement, 'Cannot find TextArea');

    await focusElement.click();
    await browser.actions().sendKeys(Key.TAB, Key.chord(Key.SHIFT, Key.TAB));
  });
});
