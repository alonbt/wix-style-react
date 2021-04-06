import React from 'react';
import { mount } from 'enzyme';

import headerDriverFactory from './Header.driver';
import { headerUniDriverFactory } from './Header.uni.driver';
import Header from './Header';
import { headerTestkitFactory } from '../../../testkit';
import { headerTestkitFactory as enzymeHeaderTestkitFactory } from '../../../testkit/enzyme';
import {
  isTestkitExists,
  isEnzymeTestkitExists,
} from '../../../test/utils/testkit-sanity';
import {
  createRendererWithDriver,
  createRendererWithUniDriver,
} from '../../../test/utils/unit';

describe('Header', () => {
  describe('[sync]', () => {
    runTests(createRendererWithDriver(headerDriverFactory));
  });

  describe('[async]', () => {
    runTests(createRendererWithUniDriver(headerUniDriverFactory));
  });

  function runTests(render) {
    const createDriver = jsx => render(jsx).driver;

    describe('`title` prop', () => {
      it('should render as string', async () => {
        const driver = createDriver(<Header title="Header Title" />);
        expect(await driver.title()).toBe('Header Title');
      });

      it('should render as component', async () => {
        const driver = createDriver(<Header title={<div>hello world</div>} />);
        expect(await driver.title()).toBe('hello world');
      });
    });

    describe('`subtitle` prop', () => {
      it('should render as string', async () => {
        const driver = createDriver(
          <Header subtitle="Header Subtitle" title="Header Title" />,
        );
        expect(await driver.subtitle()).toBe('Header Subtitle');
      });

      it('should render as component', async () => {
        const driver = createDriver(
          <Header subtitle={<div>hello world</div>} title="Header Title" />,
        );
        expect(await driver.subtitle()).toBe('hello world');
      });
    });

    describe('testkits', () => {
      it('should exist', async () => {
        expect(
          isTestkitExists(<Header title="dummy" />, headerTestkitFactory),
        ).toBe(true);
      });

      it('should exist for enzyme', async () => {
        expect(
          isEnzymeTestkitExists(
            <Header title="dummy" />,
            enzymeHeaderTestkitFactory,
            mount,
          ),
        ).toBe(true);
      });
    });
  }
});
