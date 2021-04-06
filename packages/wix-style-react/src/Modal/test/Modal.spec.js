import React from 'react';
import eventually from 'wix-eventually';

import Modal from '../Modal';
import ModalFactory from '../Modal.driver';
import { modalUniDriverFactory } from '../Modal.uni.driver';
import {
  createRendererWithDriver,
  createRendererWithUniDriver,
  cleanup,
} from '../../../test/utils/react/index';

const MODAL_CLOSE_TIMEOUT = 10;

describe('Modal', () => {
  describe('[sync]', () => {
    runTests(createRendererWithDriver(ModalFactory));
  });

  describe('[async]', () => {
    runTests(createRendererWithUniDriver(modalUniDriverFactory));
  });

  function runTests(renderer) {
    let testDriver; //  used for cleanup
    const render = jsx => {
      const rendered = renderer(jsx);
      testDriver = rendered.driver;

      return rendered;
    };

    afterEach(async () => {
      cleanup();
      if (testDriver !== null) {
        await eventually(
          async () => !(await testDriver.isOpen()) || Promise.reject(),
          {
            timeout: MODAL_CLOSE_TIMEOUT * 2,
            interval: 10,
          },
        );
      }
      testDriver = null;
      document.body.innerHTML = '';
    });

    let props = {};

    beforeEach(() => {
      props = {};
      props.isOpen = true;
      props.closeTimeoutMS = MODAL_CLOSE_TIMEOUT;
    });

    describe('content', () => {
      it(`should not render the modal content if not open by default`, async () => {
        props.isOpen = false;

        const { driver } = render(
          <Modal dataHook="dataHook" {...props}>
            <div data-hook="inner-div" />
          </Modal>,
        );

        expect(await driver.exists()).toBe(true);

        expect(
          await driver.getChildBySelector('[data-hook="inner-div"]'),
        ).toBeNull();
      });

      it(`should render the passed children in the markup`, async () => {
        props.isOpen = true;
        const { driver } = render(
          <Modal {...props}>
            <div data-hook="inner-div" />
          </Modal>,
        );
        expect(
          await driver.getChildBySelector('[data-hook="inner-div"]'),
        ).not.toBeNull();
      });

      it(`should pass contentLabel property for a11y support`, async () => {
        props.isOpen = true;
        props.contentLabel = 'test content label';
        const { driver } = render(
          <Modal {...props}>
            <div data-hook="inner-div">Dummy Content</div>
          </Modal>,
        );
        expect(await driver.getContentLabel()).toEqual(props.contentLabel);
      });

      describe('maxHeight', () => {
        it('should render maxHeight passed in props', async () => {
          const { driver } = render(
            <Modal
              {...props}
              scrollableContent
              maxHeight="calc(100vh - 48px)"
            />,
          );

          expect((await driver.getContent()).style.maxHeight).toBe(
            'calc(100vh - 48px)',
          );
        });

        it('should render maxHeight passed in props when content is not scrollable', async () => {
          const { driver } = render(
            <Modal
              {...props}
              scrollableContent={false}
              maxHeight="calc(100vh - 48px)"
            />,
          );
          expect((await driver.getContentStyle()).maxHeight).toBe(
            'calc(100vh - 48px)',
          );
        });

        it('should render 100vh maxHeight when maxHeight is set to auto and content is scrollable', async () => {
          const { driver } = render(
            <Modal {...props} scrollableContent maxHeight="auto" />,
          );
          expect((await driver.getContentStyle()).maxHeight).toBe('100vh');
        });

        it('content position should be relative', async () => {
          const { driver } = render(<Modal {...props} />);
          expect((await driver.getContentStyle()).position).toBe('relative');
        });
      });
    });

    describe('callbacks', () => {
      it(`should trigger the onAfterOpen function`, async () => {
        props.onAfterOpen = jest.fn();

        render(<Modal {...props} />);
        expect(props.onAfterOpen).toHaveBeenCalledTimes(1);
      });

      it(`should trigger the onRequestClose function when clicking the overlay`, async () => {
        props.onRequestClose = jest.fn();
        props.shouldCloseOnOverlayClick = true;
        props.closeTimeoutMS = 0;

        const { driver } = render(<Modal {...props} />);
        await driver.clickOnOverlay();

        expect(props.onRequestClose).toHaveBeenCalledTimes(1);
      });

      it(`should trigger the onRequestClose function when clicking the close button`, async () => {
        props.onRequestClose = jest.fn();
        props.shouldDisplayCloseButton = true;
        props.closeTimeoutMS = 0;

        const { driver } = render(<Modal {...props} />);
        await driver.clickOnCloseButton();

        expect(props.onRequestClose).toHaveBeenCalledTimes(1);
      });

      describe('timeout', () => {
        beforeAll(() => {
          jest.useFakeTimers();
        });
        afterAll(() => {
          jest.useRealTimers();
        });
        it(`should wait closeTimeoutMS before removing the modal`, async () => {
          props.closeTimeoutMS = 100;

          const { rerender, driver } = render(<Modal {...props} />);
          expect(await driver.isOpen()).toBe(true);
          rerender(<Modal {...props} isOpen={false} />);

          jest.advanceTimersByTime(props.closeTimeoutMS - 50);
          expect(await driver.isOpen()).toBe(true);

          jest.advanceTimersByTime(100);
          expect(await driver.isOpen()).toBe(false);
        });
      });
    });

    describe('scrollable', () => {
      it('should be set to true by default', async () => {
        const { driver } = render(<Modal {...props} />);
        expect(await driver.isScrollable()).toBe(true);
      });
      it('should allow disabling the scrolling', async () => {
        const { driver } = render(<Modal {...props} scrollable={false} />);
        expect(await driver.isScrollable()).toBe(false);
      });
    });

    describe('close button', () => {
      it('should not have a close button', async () => {
        props.shouldDisplayCloseButton = false;
        const { driver } = render(<Modal {...props} />);
        expect(await driver.closeButtonExists()).toBe(false);
      });
      it('should have a close button', async () => {
        props.shouldDisplayCloseButton = true;
        const { driver } = render(<Modal {...props} />);
        expect(await driver.closeButtonExists()).toBe(true);
      });
    });

    describe('appName', () => {
      it('should add aria-hidden body if appElement is not specified', async () => {
        render(<Modal {...props} />);
        expect(
          document.getElementsByTagName('body')[0].getAttribute('aria-hidden'),
        ).toBe('true');
      });

      it('should add aria-hidden to selected element', async () => {
        const appElement = document.createElement('div');
        appElement.setAttribute('id', 'app');
        document.body.appendChild(appElement);
        props.appElement = '#app';
        render(<Modal {...props} />);
        expect(appElement.getAttribute('aria-hidden')).toBe('true');
      });
    });

    describe('zIndex', () => {
      it('should have default z-index', async () => {
        const { driver } = render(<Modal {...props} />);
        expect(await driver.getZIndex()).toBe('5000');
      });

      it('should have custom z-index', async () => {
        const { driver } = render(<Modal {...props} zIndex={2500} />);
        expect(await driver.getZIndex()).toBe('2500');
      });
    });
  }
});
