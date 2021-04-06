import * as React from 'react';
import { createUniDriverFactory } from 'wix-ui-test-utils/uni-driver-factory';
import { isUniEnzymeTestkitExists } from 'wix-ui-test-utils/enzyme';
import { isUniTestkitExists } from 'wix-ui-test-utils/vanilla';
import { mount } from 'enzyme';
import { mobileDrawerDriverFactory } from './MobileDrawer.driver';
import { mobileDrawerTestkitFactory } from '../../testkit';
import { mobileDrawerTestkitFactory as enzymeMobileDrawerTestkitFactory } from '../../testkit/enzyme';
import { MobileDrawer, MobileDrawerProps } from './';

describe('MobileDrawer', () => {
  const createDriver = createUniDriverFactory(mobileDrawerDriverFactory);

  const bootstrap = (props: Partial<MobileDrawerProps> = {}) => {
    return createDriver(<MobileDrawer {...props} />);
  };

  it('should render', async () => {
    const driver = bootstrap();
    expect(await driver.exists()).toBe(true);
  });

  it('should render children', async () => {
    const driver = createDriver(
      <MobileDrawer isOpen>
        <div data-hook="drawer-children">Drawer children</div>
      </MobileDrawer>,
    );
    expect(await driver.childExists('[data-hook="drawer-children"]')).toBe(
      true,
    );
  });

  it('should NOT render children if MobileDrawer not open', async () => {
    const driver = createDriver(
      <MobileDrawer>
        <div data-hook="drawer-children">Drawer children</div>
      </MobileDrawer>,
    );
    expect(await driver.childExists('[data-hook="drawer-children"]')).toBe(
      false,
    );
  });

  it('expect mobileDrawer to be isOpen false as default', async () => {
    const driver = createDriver(<MobileDrawer>Cildren</MobileDrawer>);

    expect(await driver.isOpen()).toBe(false);
  });

  it('expect mobileDrawer to be isOpen if open', async () => {
    const driver = createDriver(<MobileDrawer isOpen>Cildren</MobileDrawer>);

    expect(await driver.isOpen()).toBe(true);
  });

  describe('testkit', () => {
    it('should exist', async () => {
      expect(
        await isUniTestkitExists(
          <MobileDrawer>Children</MobileDrawer>,
          mobileDrawerTestkitFactory,
          {
            dataHookPropName: 'data-hook',
          },
        ),
      ).toBe(true);
    });
  });

  describe('enzyme testkit', () => {
    it('should exist', async () => {
      expect(
        await isUniEnzymeTestkitExists(
          <MobileDrawer>Children</MobileDrawer>,
          enzymeMobileDrawerTestkitFactory,
          mount,
          {
            dataHookPropName: 'data-hook',
          },
        ),
      ).toBe(true);
    });
  });
});
