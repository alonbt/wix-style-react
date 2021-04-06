import React from 'react';
import eventually from 'wix-eventually';
import floatingHelperDriverFactory from '../FloatingHelper.driver';
import floatingHelperUniDriverFactory from '../FloatingHelper.uni.driver';
import FloatingHelper from '../FloatingHelper';
import FloatingHelperContent from '../FloatingHelperContent/FloatingHelperContent';
import {
  createRendererWithDriver,
  createRendererWithUniDriver,
  cleanup,
} from '../../../test/utils/unit';

describe('FloatingHelper', () => {
  const title = 'my title';

  const requiredProps = {
    content: <FloatingHelperContent title={title} body="this is the body" />,
    placement: 'right',
    target: <div>This is the target element</div>,
  };

  describe('[sync]', () => {
    runTest(createRendererWithDriver(floatingHelperDriverFactory));
  });

  describe('[async]', () => {
    runTest(createRendererWithUniDriver(floatingHelperUniDriverFactory));
  });

  function runTest(render) {
    afterEach(() => cleanup());

    const waitForClose = driver =>
      eventually(async () => expect(await driver.isOpened()).toBe(false));

    describe('sanity', () => {
      it('should have helper content (with title)', async () => {
        const { driver } = render(<FloatingHelper {...requiredProps} />);
        const helperContentDriver = await driver.getHelperContentDriver();
        expect(await helperContentDriver.exists()).toBe(true);
        expect(await helperContentDriver.getTitleContent()).toBe(title);
      });

      it('have a close button', async () => {
        const { driver } = render(<FloatingHelper {...requiredProps} />);
        expect(await driver.hasCloseButton()).toBe(true);
      });
    });

    describe('width', () => {
      it('should have default width of 444', async () => {
        const { driver } = render(<FloatingHelper {...requiredProps} />);
        expect(await driver.getWidth()).toBe('444px');
      });

      it('should have a custom width (which is a string)', async () => {
        const props = { width: '500px' };
        const { driver } = render(
          <FloatingHelper {...requiredProps} {...props} />,
        );
        expect(await driver.getWidth()).toBe(props.width);
      });

      it('should have a custom width (which is a number)', async () => {
        const props = { width: 600 };
        const { driver } = render(
          <FloatingHelper {...requiredProps} {...props} />,
        );
        expect(await driver.getWidth()).toBe(`${props.width}px`);
      });
    });

    describe('close', () => {
      it('should be opened by default', async () => {
        const { driver } = render(<FloatingHelper {...requiredProps} />);
        expect(await driver.isOpened()).toBe(true);
      });

      it('should close popover when close-button is clicked', async () => {
        const { driver } = render(<FloatingHelper {...requiredProps} />);
        await driver.clickCloseButton();
        await waitForClose(driver);
      });
    });

    describe('programmatic open/close sanity', () => {
      it('should open and close programmatically', async () => {
        const props = { initiallyOpened: false };
        let component;
        const { driver } = render(
          <FloatingHelper
            ref={comp => (component = comp)}
            {...requiredProps}
            {...props}
          />,
        );

        expect(await driver.isOpened()).toBe(false);
        component.open();
        expect(await driver.isOpened()).toBe(true);
        component.close();
        await waitForClose(driver);
        expect(await driver.isOpened()).toBe(false);
      });
    });

    describe('controlled', () => {
      it('should call onClose but not close', async () => {
        const props = {
          onClose: jest.fn(),
          opened: true,
        };

        const { driver } = render(
          <FloatingHelper {...requiredProps} {...props} />,
        );
        await driver.clickCloseButton();
        expect(props.onClose).toBeCalled();
        expect(await driver.isOpened()).toBe(true);
      });

      it('should not throw error when closeButton clicked and there is no onClose callback', async () => {
        const props = { opened: true };
        const { driver } = render(
          <FloatingHelper {...requiredProps} {...props} />,
        );
        const click = async () => await driver.clickCloseButton();
        expect(click).not.toThrowError();
      });
    });
  }
});
