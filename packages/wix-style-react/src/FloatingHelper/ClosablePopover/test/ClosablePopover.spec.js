import React from 'react';
import eventually from 'wix-eventually';
import { closablePopoverDriverFactory } from '../ClosablePopover.driver';
import { closablePopoverUniDriverFactory } from '../ClosablePopover.uni.driver';
import ClosablePopover from '../ClosablePopover';
import { enzymeTestkitFactoryCreator } from 'wix-ui-test-utils/enzyme';
import { mount } from 'enzyme';
import {
  createRendererWithDriver,
  createRendererWithUniDriver,
  cleanup,
} from '../../../../test/utils/react/index';

describe('ClosablePopover', () => {
  const requiredProps = {
    target: <div>this is the target</div>,
    content: () => <div>this is the popover content</div>,
    placement: 'right',
  };

  describe('[sync]', () => {
    runTests(createRendererWithDriver(closablePopoverDriverFactory));
  });

  describe('[async]', () => {
    runTests(createRendererWithUniDriver(closablePopoverUniDriverFactory));
  });

  function runTests(render) {
    afterEach(() => cleanup());

    describe('open/close on hover', () => {
      it('should display content on hover and hide it on leave, after closed', async () => {
        let triggerClose;
        const props = {
          content: ({ close }) => {
            triggerClose = close;
            return <div>the content</div>;
          },
        };

        const { driver } = render(
          <ClosablePopover {...requiredProps} {...props} />,
        );
        triggerClose();
        await driver.mouseEnter();
        expect(await driver.isContentElementExists()).toBe(true);
        await driver.mouseLeave();
        await eventually(async () =>
          expect(await driver.isContentElementExists()).toBe(false),
        );
      });

      it('should NOT close on mouse leave when initially opened', async () => {
        const { driver } = render(<ClosablePopover {...requiredProps} />);
        await driver.mouseEnter();
        await driver.mouseLeave();

        await eventually(async () =>
          expect(await driver.isContentElementExists()).toBe(true),
        );
      });

      it('should display content on hover and hide it on leave, when initially closed', async () => {
        const props = {
          initiallyOpened: false,
        };
        const { driver } = render(
          <ClosablePopover {...requiredProps} {...props} />,
        );
        await driver.mouseEnter();
        expect(await driver.isContentElementExists()).toBe(true);
        await driver.mouseLeave();
        await eventually(async () =>
          expect(await driver.isContentElementExists()).toBe(false),
        );
      });

      it('should not hide on mouse-leave, given closeOnMouseLeave is false', async () => {
        let triggerClose;

        const props = {
          content: ({ close }) => {
            triggerClose = close;
            return <div>the content</div>;
          },
          initiallyOpened: true,
          closeOnMouseLeave: false,
        };

        const { driver } = render(
          <ClosablePopover {...requiredProps} {...props} />,
        );
        triggerClose();
        await eventually(async () =>
          expect(await driver.isContentElementExists()).toBe(false),
        );
        await driver.mouseEnter();
        expect(await driver.isContentElementExists()).toBe(true);
        await driver.mouseLeave();

        await eventually(async () =>
          expect(await driver.isContentElementExists()).toBe(true),
        );
      });
    });

    describe('onOpened/onClosed callbacks', () => {
      it('should call onClosed when closed by close-action', () => {
        let triggerClose;
        const props = {
          onClose: jest.fn(),
          content: ({ close }) => {
            triggerClose = close;
            return <div>the content</div>;
          },
        };

        const { driver } = render(
          <ClosablePopover {...requiredProps} {...props} />,
        );
        triggerClose();

        expect(props.onClose).toBeCalled();
      });

      it('should call onOpened when hovered by mouse', async () => {
        let triggerClose;

        const props = {
          content: ({ close }) => {
            triggerClose = close;
            return <div>the content</div>;
          },
          onOpen: jest.fn(),
        };

        const { driver } = render(
          <ClosablePopover {...requiredProps} {...props} />,
        );

        triggerClose();
        await driver.mouseEnter();
        expect(props.onOpen).toBeCalled();
      });

      it('should call onClosed when mouse leaves after closed by close-action', async () => {
        let triggerClose;

        const props = {
          content: ({ close }) => {
            triggerClose = close;
            return <div>the content</div>;
          },
          onClose: jest.fn(),
        };

        const { driver } = render(
          <ClosablePopover {...requiredProps} {...props} />,
        );

        triggerClose();
        await driver.mouseEnter();
        await driver.mouseLeave();
        expect(props.onClose.mock.calls.length).toBe(2);
      });
    });

    describe('initiallyOpened', () => {
      it('should be initially opened', async () => {
        const props = {
          initiallyOpened: true,
        };
        const { driver } = render(
          <ClosablePopover {...requiredProps} {...props} />,
        );
        expect(await driver.isOpened()).toBe(true);
      });

      it('should be initially closed', async () => {
        const props = {
          initiallyOpened: false,
        };
        const { driver } = render(
          <ClosablePopover {...requiredProps} {...props} />,
        );
        expect(await driver.isOpened()).toBe(false);
      });

      it('should NOT close on mouse leave when initially opened', async () => {
        const { driver } = render(<ClosablePopover {...requiredProps} />);
        await driver.mouseEnter();
        await driver.mouseLeave();
        await eventually(async () =>
          expect(await driver.isContentElementExists()).toBe(true),
        );
      });
    });

    describe('close', () => {
      it('should be opened by default', async () => {
        const { driver } = render(<ClosablePopover {...requiredProps} />);
        expect(await driver.isOpened()).toBe(true);
      });

      it('should close when closeAction called', async () => {
        let triggerClose;
        const props = {
          content: ({ close }) => {
            triggerClose = close;
            return <div>the content</div>;
          },
        };
        const { driver } = render(
          <ClosablePopover {...requiredProps} {...props} />,
        );
        expect(await driver.isOpened()).toBe(true);
        triggerClose();
        await eventually(async () =>
          expect(await driver.isOpened()).toBe(false),
        );
      });
    });
  }

  describe('enzyme tests', () => {
    const enzymeTestkitFactory = enzymeTestkitFactoryCreator(
      closablePopoverDriverFactory,
    );
    const dataHook = 'closable-popover-data-hook';
    let wrapper;

    afterEach(() => wrapper.unmount());

    describe('programmatic open', () => {
      it('should be opened by programmatic open, when initially closed', () => {
        const props = {
          initiallyOpened: false,
          dataHook,
        };

        wrapper = mount(<ClosablePopover {...requiredProps} {...props} />);
        const driver = enzymeTestkitFactory({ wrapper, dataHook });

        expect(driver.isOpened()).toBe(false);
        wrapper.instance().open();
        expect(driver.isOpened()).toBe(true);
      });

      it('should be closed by programmatic close, after initially opened', async () => {
        const props = {
          initiallyOpened: true,
          dataHook,
        };

        wrapper = mount(<ClosablePopover {...requiredProps} {...props} />);
        const driver = enzymeTestkitFactory({ wrapper, dataHook });

        expect(driver.isOpened()).toBe(true);
        wrapper.instance().close();
        await eventually(() => expect(driver.isOpened()).toBe(false));
      });

      it('should NOT close on mouseLeave, after programmatic open', async () => {
        const props = { initiallyOpened: false, dataHook };

        wrapper = mount(<ClosablePopover {...requiredProps} {...props} />);
        const driver = enzymeTestkitFactory({ wrapper, dataHook });

        expect(driver.isOpened()).toBe(false);
        wrapper.instance().open();
        expect(driver.isOpened()).toBe(true);
        driver.mouseEnter();
        driver.mouseLeave();
        await eventually(() =>
          expect(driver.isContentElementExists()).toBe(true),
        );
      });

      it('should open/close on hover after click to close, after programmatic open', async () => {
        let triggerClose;

        const props = {
          initiallyOpened: false,
          dataHook,
          content: ({ close }) => {
            triggerClose = close;
            return <div>the content</div>;
          },
        };
        wrapper = mount(<ClosablePopover {...requiredProps} {...props} />);
        const driver = enzymeTestkitFactory({ wrapper, dataHook });

        wrapper.instance().open();
        triggerClose();

        driver.mouseEnter();
        expect(driver.isContentElementExists()).toBe(true);

        driver.mouseLeave();
        await eventually(() =>
          expect(driver.isContentElementExists()).toBe(false),
        );
      });
    });

    describe('controlled', () => {
      it('should be opened', () => {
        const props = { opened: true, dataHook };

        wrapper = mount(<ClosablePopover {...requiredProps} {...props} />);
        const driver = enzymeTestkitFactory({ wrapper, dataHook });

        expect(driver.isOpened()).toBe(true);
      });

      it('should be closed', () => {
        const props = { opened: false, dataHook };
        wrapper = mount(<ClosablePopover {...requiredProps} {...props} />);
        const driver = enzymeTestkitFactory({ wrapper, dataHook });
        expect(driver.isOpened()).toBe(false);
      });
    });

    describe('Controlled Error', () => {
      it('should throw error on open', () => {
        const props = { opened: false, dataHook };
        wrapper = mount(<ClosablePopover {...requiredProps} {...props} />);
        const driver = enzymeTestkitFactory({ wrapper, dataHook });
        expect(() => wrapper.instance().open()).toThrow();
      });

      it('should throw error on close', () => {
        const props = { opened: true, dataHook };
        wrapper = mount(<ClosablePopover {...requiredProps} {...props} />);
        const driver = enzymeTestkitFactory({ wrapper, dataHook });
        expect(() => wrapper.instance().close()).toThrow();
      });
    });
  });
});
