import React from 'react';
import { createRendererWithUniDriver, cleanup } from '../../../test/utils/unit';

import Subheader from './Subheader';
import { cardSubheaderDriverFactory } from './Subheader.uni.driver';

describe('Subheader', () => {
  const render = createRendererWithUniDriver(cardSubheaderDriverFactory);

  afterEach(() => {
    cleanup();
  });

  it('should render', async () => {
    const { driver } = render(<Subheader title="title" />);

    expect(await driver.exists()).toBe(true);
  });

  describe('`title` prop', () => {
    it('should render as string', async () => {
      const { driver } = render(<Subheader title="title" />);
      expect(await driver.title()).toBe('title');
    });

    it('should render as component', async () => {
      const { driver } = render(
        <Subheader title={<span data-hook="custom-node">hello world</span>} />,
      );
      expect(await (await driver.titleNode()).text()).toBe('hello world');
    });
  });

  describe('`suffix` prop', () => {
    it('should render as component', async () => {
      const { driver } = render(
        <Subheader
          title="hi there"
          suffix={<span data-hook="custom-node">hello world</span>}
        />,
      );
      expect(await (await driver.suffixNode()).text()).toBe('hello world');
    });
  });
});
