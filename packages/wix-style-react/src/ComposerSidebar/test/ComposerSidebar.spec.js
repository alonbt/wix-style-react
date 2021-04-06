import React from 'react';
import { createRendererWithUniDriver, cleanup } from '../../../test/utils/unit';

import ComposerSidebar from '../ComposerSidebar';
import { composerSidebarPrivateDriverFactory } from './ComposerSidebar.private.uni.driver';
import { items, disabledItems } from '../docs/examples';

describe(ComposerSidebar.displayName, () => {
  const render = createRendererWithUniDriver(
    composerSidebarPrivateDriverFactory,
  );

  afterEach(cleanup);

  it('should render', async () => {
    const { driver } = render(<ComposerSidebar selectedId={2} items={items} />);

    expect(await driver.exists()).toBe(true);
    expect(await driver.getItemLabel(1)).toBe('Enhance');
    expect(await driver.getItemLabel(2)).toBe('Adjust');
  });

  it('should call default onClick component callback', async () => {
    const defaultOnClickFn = jest.fn();
    const { driver } = render(
      <ComposerSidebar
        onClick={defaultOnClickFn}
        selectedId={2}
        items={items}
      />,
    );

    await driver.clickOnItem(1);

    expect(defaultOnClickFn).toHaveBeenCalledWith(expect.any(Object), {
      id: 1,
      label: 'Enhance',
    });
  });

  it('should call item onClick callback', async () => {
    const defaultOnClickFn = jest.fn();
    const itemOnClickFn = jest.fn();
    const modifiedItems = [...items];
    modifiedItems[1].onClick = itemOnClickFn;
    const { driver } = render(
      <ComposerSidebar
        onClick={defaultOnClickFn}
        selectedId={2}
        items={modifiedItems}
      />,
    );

    await driver.clickOnItem(1);

    expect(defaultOnClickFn).not.toHaveBeenCalled();
    expect(itemOnClickFn).toHaveBeenCalledWith(expect.any(Object), {
      id: 1,
      label: 'Enhance',
    });
  });

  it('should have a selected item', async () => {
    const { driver } = render(<ComposerSidebar selectedId={2} items={items} />);

    expect(await driver.getSelectedItemId()).toBe('2');
  });

  it('should have a disabled item', async () => {
    const { driver } = render(
      <ComposerSidebar selectedId={2} items={disabledItems} />,
    );

    expect(await driver.isItemDisabled(0)).toBe(false);
    expect(await driver.isItemDisabled(1)).toBe(true);
  });
});
