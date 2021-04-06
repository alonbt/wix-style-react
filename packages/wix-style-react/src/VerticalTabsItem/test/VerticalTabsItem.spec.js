import React from 'react';
import { createRendererWithUniDriver, cleanup } from '../../../test/utils/unit';

import VerticalTabsItem from '../VerticalTabsItem';
import { verticalTabsItemPrivateDriverFactory } from './VerticalTabsItem.private.uni.driver';

describe('VerticalTabsItem', () => {
  const render = createRendererWithUniDriver(
    verticalTabsItemPrivateDriverFactory,
  );

  afterEach(() => {
    cleanup();
  });

  it('should render', async () => {
    const { driver } = render(<VerticalTabsItem>Item</VerticalTabsItem>);

    expect(await driver.exists()).toBe(true);
  });

  it('should get the items text', async () => {
    const { driver } = render(<VerticalTabsItem>Item</VerticalTabsItem>);

    expect(await driver.getText()).toEqual('Item');
  });
});
