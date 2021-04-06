import React from 'react';

import SidebarHeader from '../SidebarHeader';
import { sidebarHeaderPrivateDriverFactory } from './SidebarHeader.private.uni.driver';
import { createRendererWithUniDriver, cleanup } from '../../../test/utils/unit';

describe('SidebarHeader', () => {
  const render = createRendererWithUniDriver(sidebarHeaderPrivateDriverFactory);
  const title = 'Some title';

  afterEach(() => {
    cleanup();
  });

  it('should render', async () => {
    const { driver } = render(<SidebarHeader title={title} />);

    expect(await driver.exists()).toBe(true);
  });

  it('should render the `title` prop', async () => {
    const { driver } = render(<SidebarHeader title={title} />);

    expect(await driver.getTitle()).toBe(title);
  });

  it('should render the `subtitle` prop', async () => {
    const subtitle = 'Some subtitle';
    const { driver } = render(
      <SidebarHeader title={title} subtitle={subtitle} />,
    );

    expect(await driver.getSubtitle()).toBe(subtitle);
  });

  it('should render the `children` prop', async () => {
    const sampleText = 'Some child';
    const { driver } = render(
      <SidebarHeader title={title}>
        <span>{sampleText}</span>
      </SidebarHeader>,
    );

    expect(await driver.getChildren().text()).toBe(sampleText);
  });
});
