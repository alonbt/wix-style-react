import React from 'react';
import { createRendererWithUniDriver, cleanup } from '../../../test/utils/unit';

import SidebarSectionTitle from '../SidebarSectionTitle';
import { sidebarSectionTitlePrivateDriverFactory } from './SidebarSectionTitle.private.uni.driver';

describe('SidebarSectionTitle', () => {
  const render = createRendererWithUniDriver(
    sidebarSectionTitlePrivateDriverFactory,
  );

  afterEach(() => {
    cleanup();
  });

  it('should render the text when passing `children` prop', async () => {
    const text = 'Some title';
    const { driver } = render(
      <SidebarSectionTitle>{text}</SidebarSectionTitle>,
    );

    expect(await driver.exists()).toBe(true);
    expect(await driver.getText()).toBe(text);
  });
});
