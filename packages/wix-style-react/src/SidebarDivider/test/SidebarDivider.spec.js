import React from 'react';

import SidebarDivider from '../SidebarDivider';
import { createRendererWithUniDriver, cleanup } from '../../../test/utils/unit';
import { SidebarDividerPrivateDriverFactory } from './SidebarDivider.private.uni.driver';

describe('SidebarDivider', () => {
  const render = createRendererWithUniDriver(
    SidebarDividerPrivateDriverFactory,
  );

  afterEach(() => {
    cleanup();
  });

  it('should render', async () => {
    const { driver } = render(<SidebarDivider />);

    expect(await driver.exists()).toBe(true);
  });

  it('should render as full width', async () => {
    const { driver } = render(<SidebarDivider fullWidth />);

    expect(await driver.isFullWidth()).toBe(true);
  });
});
