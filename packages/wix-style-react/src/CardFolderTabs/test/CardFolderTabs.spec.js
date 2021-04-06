import React from 'react';
import { createRendererWithUniDriver, cleanup } from '../../../test/utils/unit';

import CardFolderTabs from '../CardFolderTabs';
import { cardFolderTabsPrivateDriverFactory } from './CardFolderTabs.private.uni.driver';

describe(CardFolderTabs.displayName, () => {
  const render = createRendererWithUniDriver(
    cardFolderTabsPrivateDriverFactory,
  );

  const simpleExample = ({
    content1 = 'content 1',
    content2 = 'content 2',
    disableTab2,
    ...rest
  }) => (
    <CardFolderTabs activeId="tab-1" {...rest}>
      <CardFolderTabs.Tab id="tab-1" name="First Tab">
        {content1}
      </CardFolderTabs.Tab>
      <CardFolderTabs.Tab id="tab-2" name="Second Tab" disabled={disableTab2}>
        {content2}
      </CardFolderTabs.Tab>
    </CardFolderTabs>
  );

  afterEach(cleanup);

  it('should render', async () => {
    const { driver } = render(simpleExample({}));

    expect(await driver.exists()).toBe(true);
  });

  it('should render correct content by selected tab', async () => {
    const onTabChange = jest.fn();
    const dataHook1 = 'my-data-hook1';
    const dataHook2 = 'my-data-hook2';

    const { driver } = render(
      simpleExample({
        onTabChange,
        content1: <div data-hook={dataHook1} />,
        content2: <div data-hook={dataHook2} />,
      }),
    );

    // First tab is selected (by default)
    expect(
      (await driver.element()).querySelector(`[data-hook="${dataHook1}"]`),
    ).toBeTruthy();
    expect(
      (await driver.element()).querySelector(`[data-hook="${dataHook2}"]`),
    ).toBe(null);
  });

  it('should call onTabChange when tab is selected', async () => {
    const onTabChange = jest.fn();
    const { driver } = render(simpleExample({ onTabChange }));

    await driver.selectTabById('tab-2');

    expect(onTabChange).toBeCalled();
  });

  it('should not call onTabChange when clicking on tab which is disabled', async () => {
    const onTabChange = jest.fn();
    const { driver } = render(
      simpleExample({ onTabChange, disableTab2: true }),
    );

    expect(await driver.isTabDisabledById('tab-1')).toBe(false);
    expect(await driver.isTabDisabledById('tab-2')).toBe(true);

    await driver.selectTabById('tab-2');

    expect(onTabChange).not.toBeCalled();
  });
});
