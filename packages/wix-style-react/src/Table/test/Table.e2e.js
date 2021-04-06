import eyes from 'eyes.it';

import {
  tableTestkitFactory,
  tableActionCellTestkitFactory,
} from '../../../testkit/protractor';
import {
  waitForVisibilityOf,
  scrollToElement,
} from 'wix-ui-test-utils/protractor';
import { createTestStoryUrl } from '../../../test/utils/storybook-helpers';
import { flattenInternalDriver } from '../../../test/utils/private-drivers';
import { storySettings } from '../docs/storySettings';

describe('Table', () => {
  const testStoryUrl = testName =>
    createTestStoryUrl({ ...storySettings, testName });

  const init = async (url, dataHook = 'storybook-table') => {
    await browser.get(url);
    const driver = tableTestkitFactory({ dataHook });
    await waitForVisibilityOf(driver.element, 'Can not find Table Component');
    await scrollToElement(driver.element);
    return flattenInternalDriver(driver);
  };

  it('should be able to use DataTable driver methods', async () => {
    const storyUrl = testStoryUrl(storySettings.testStoryNames.table);
    const driver = await init(storyUrl);
    expect(await driver.rowsCount()).toBe(4);
  });

  describe('Action cell', () => {
    describe('Primary and secondary actions', () => {
      const createDriver = () =>
        init(
          testStoryUrl(storySettings.testStoryNames.actionCell),
          'story-action-cell-primary-secondary-example',
        );

      eyes.it(
        'should always show the PopoverMenu, and show the primary and secondary actions only on hover',
        async () => {
          const tableDriver = await createDriver();
          const actionCellDriver = tableActionCellTestkitFactory({
            dataHook: 'action-cell-component-secondary',
          });

          expect(actionCellDriver.getPrimaryActionButton().isDisplayed()).toBe(
            false,
          );
          expect(
            actionCellDriver.getVisibleActionsWrapper().isDisplayed(),
          ).toBe(false);
          expect(
            actionCellDriver.getHiddenActionsPopoverMenu().isDisplayed(),
          ).toBe(true);

          tableDriver.hoverRow(0);

          expect(actionCellDriver.getPrimaryActionButton().isDisplayed()).toBe(
            true,
          );
          expect(
            actionCellDriver.getVisibleActionsWrapper().isDisplayed(),
          ).toBe(true);
          expect(
            actionCellDriver.getHiddenActionsPopoverMenu().isDisplayed(),
          ).toBe(true);

          tableDriver.hoverRow(1);
        },
      );
    });
  });
});
