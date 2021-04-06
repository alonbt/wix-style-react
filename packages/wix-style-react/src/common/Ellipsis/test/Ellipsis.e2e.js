import { browser, $ } from 'protractor';
import { createTestStoryUrl } from '../../../../test/utils/storybook-helpers';
import { Category } from '../../../../stories/storiesHierarchy';
import { inputTestkitFactory } from '../../../../testkit/protractor';

describe('Ellipsis', () => {
  const navigateToTestUrl = async testName => {
    const testStoryUrl = createTestStoryUrl({
      category: Category.INTERNAL,
      storyName: 'Ellipsis',
      testName,
      withExamples: false,
    });
    await browser.get(testStoryUrl);
  };

  const isTextRendered = () =>
    browser.isElementPresent($('[data-hook="text-element"]'));

  const isEllipsisRendered = () =>
    browser.isElementPresent($('[data-hook="popover-element"]'));

  const getEllipsisContent = () => $('[data-hook="popover-element"]').getText();

  it('should have ellipsis', async () => {
    await navigateToTestUrl('with ellipsis');

    // Text element
    expect(isTextRendered()).toBe(true);

    // Ellipsis element
    expect(isEllipsisRendered()).toBe(true);
  });

  it('should not have ellipsis', async () => {
    await navigateToTestUrl('without ellipsis');

    // Text element
    expect(isTextRendered()).toBe(true);

    // Ellipsis element
    expect(isEllipsisRendered()).toBe(false);
  });

  it('should update tooltip text when content changes', async () => {
    await navigateToTestUrl('with dynamic text');

    const { enterText } = inputTestkitFactory({ dataHook: 'input-element' });

    // Text element
    expect(isTextRendered()).toBe(true);

    // Ellipsis element
    expect(isEllipsisRendered()).toBe(true);

    // Ellipsis content
    expect(getEllipsisContent()).toBe('Hello World');

    await enterText('New Text');

    expect(isEllipsisRendered()).toBe(true);

    expect(getEllipsisContent()).toBe('New Text');
  });
});
