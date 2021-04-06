import React from 'react';
import { createRendererWithUniDriver, cleanup } from '../../../test/utils/unit';

import VerticalTabs from '../VerticalTabs';
import { verticalTabsPrivateDriverFactory } from './VerticalTabs.private.uni.driver';

describe('VerticalTabs', () => {
  const render = createRendererWithUniDriver(verticalTabsPrivateDriverFactory);

  afterEach(() => {
    cleanup();
  });

  it('should render', async () => {
    const { driver } = render(
      <VerticalTabs>
        <VerticalTabs.TabsGroup title="Group Title">
          <VerticalTabs.TabItem>Tab 1</VerticalTabs.TabItem>
          <VerticalTabs.TabItem>Tab 2</VerticalTabs.TabItem>
          <VerticalTabs.TabItem>Tab 3</VerticalTabs.TabItem>
        </VerticalTabs.TabsGroup>
        <VerticalTabs.Footer>Footer</VerticalTabs.Footer>
      </VerticalTabs>,
    );

    expect(await driver.exists()).toBe(true);
  });
});
