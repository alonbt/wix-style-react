import React from 'react';
import { mount } from 'enzyme';
import notificationDriverFactory from '../Notification.driver';
import { notificationUniDriverFactory } from '../Notification.uni.driver';
import {
  notificationTestkitFactory as enzymeNotificationTestkitFactory,
  buttonTestkitFactory as enzymeButtonTestkitFactory,
} from '../../../testkit/enzyme';
import {
  createRendererWithDriver,
  createRendererWithUniDriver,
  cleanup,
} from '../../../test/utils/unit';

import Notification, {
  LOCAL_NOTIFICATION,
  GLOBAL_NOTIFICATION,
  STICKY_NOTIFICATION,
} from '../Notification';
import Button from '../../Button';
import TextButton from '../../TextButton';
import eventually from 'wix-eventually';

const renderNotificationWithProps = (props = {}) => (
  <Notification {...props}>
    <Notification.TextLabel>label</Notification.TextLabel>
    <Notification.CloseButton />
  </Notification>
);

describe('Notification', () => {
  describe('[sync]', () => {
    runTests(createRendererWithDriver(notificationDriverFactory));
  });

  describe('[async]', () => {
    runTests(createRendererWithUniDriver(notificationUniDriverFactory));
  });

  function runTests(render) {
    afterEach(cleanup);

    describe('Visibility', () => {
      it('should verify component exists', async () => {
        const { driver } = render(renderNotificationWithProps());
        expect(await driver.exists()).toBe(true);
      });

      it('should be visible', async () => {
        const { driver } = render(renderNotificationWithProps({ show: true }));
        expect(await driver.visible()).toBe(true);
      });

      it('should not be visible', async () => {
        const { driver } = render(renderNotificationWithProps({ show: false }));
        expect(await driver.visible()).toBe(false);
      });
    });

    describe('Themes', () => {
      it('should support default theme', async () => {
        const { driver } = render(renderNotificationWithProps({ show: true }));

        expect(await driver.isStandardNotification()).toBe(true);
        expect(await driver.hasTheme('standard')).toBe(true);
      });

      it('should support standard theme', async () => {
        const { driver } = render(
          renderNotificationWithProps({ show: true, theme: 'standard' }),
        );
        expect(await driver.isStandardNotification()).toBe(true);
      });

      it('should support error theme', async () => {
        const { driver } = render(
          renderNotificationWithProps({ show: true, theme: 'error' }),
        );
        expect(await driver.isErrorNotification()).toBe(true);
      });

      it('should support success theme', async () => {
        const { driver } = render(
          renderNotificationWithProps({ show: true, theme: 'success' }),
        );
        expect(await driver.isSuccessNotification()).toBe(true);
      });

      it('should support warning theme', async () => {
        const { driver } = render(
          renderNotificationWithProps({ show: true, theme: 'warning' }),
        );
        expect(await driver.isWarningNotification()).toBe(true);
      });

      it('should support premium theme', async () => {
        const { driver } = render(
          renderNotificationWithProps({ show: true, theme: 'premium' }),
        );
        expect(await driver.isPremiumNotification()).toBe(true);
      });
    });

    describe('Content', () => {
      describe('Label', () => {
        it('should show have a text to show', async () => {
          const labelText = 'Label Text';
          const { driver } = render(
            <Notification show>
              <Notification.TextLabel>{labelText}</Notification.TextLabel>
              <Notification.CloseButton />
            </Notification>,
          );
          expect(await driver.getLabelText()).toEqual(labelText);
        });
      });

      describe('Action Button', () => {
        it('should have an action button', async () => {
          const actionButtonText = 'Action Button Text';
          const { driver } = render(
            <Notification show>
              <Notification.TextLabel>label</Notification.TextLabel>
              <Notification.ActionButton>
                {actionButtonText}
              </Notification.ActionButton>
              <Notification.CloseButton />
            </Notification>,
          );
          expect(await driver.getActionButtonText()).toEqual(actionButtonText);
        });

        it('should not have an action button', async () => {
          const { driver } = render(
            renderNotificationWithProps({ show: true }),
          );
          expect(await driver.hasActionButton()).toBe(false);
        });

        it('should call the supplied onClick handler when clicked', async () => {
          const onClickMock = jest.fn();

          const { driver } = render(
            <Notification show>
              <Notification.TextLabel>label</Notification.TextLabel>
              <Notification.ActionButton onClick={onClickMock}>
                action
              </Notification.ActionButton>
              <Notification.CloseButton />
            </Notification>,
          );

          await driver.clickOnActionButton();

          expect(onClickMock).toBeCalled();
        });
      });

      describe('Close Button', () => {
        it('should have a close button (with action button)', async () => {
          const { driver } = render(
            renderNotificationWithProps({ show: true }),
          );
          expect(await driver.hasCloseButton()).toBe(true);
        });

        it('should have a close button (without action button)', async () => {
          const { driver } = render(
            renderNotificationWithProps({ show: true }),
          );
          expect(await driver.hasActionButton()).toBe(false);
          expect(await driver.hasCloseButton()).toBe(true);
        });

        it('should allow no CloseButton', async () => {
          const labelText = 'Label Text';
          const { driver } = render(
            <Notification show>
              <Notification.TextLabel>{labelText}</Notification.TextLabel>
            </Notification>,
          );
          expect(await driver.hasCloseButton()).toBe(false);
        });
      });
    });

    describe('Type', () => {
      it('should set default type to global and position relative', async () => {
        const { driver } = render(renderNotificationWithProps({ show: true }));
        expect(await driver.isRelativelyPositioned()).toBe(true);
      });

      it('should set the type to global and position relative', async () => {
        const { driver } = render(
          renderNotificationWithProps({
            show: true,
            type: GLOBAL_NOTIFICATION,
          }),
        );
        expect(await driver.isRelativelyPositioned()).toBe(true);
      });

      it('should set the type to local and position absolute', async () => {
        const { driver } = render(
          renderNotificationWithProps({ show: true, type: LOCAL_NOTIFICATION }),
        );
        expect(await driver.isAbsolutePositioned()).toBe(true);
      });

      it('should set the type to sticky and position fixed', async () => {
        const { driver } = render(
          renderNotificationWithProps({
            show: true,
            type: STICKY_NOTIFICATION,
          }),
        );
        expect(await driver.isFixedPositioned()).toBe(true);
      });
    });

    describe(`Closing`, () => {
      describe('Closing when clicking on close button', () => {
        it('should close the notification', async () => {
          const { driver } = render(
            renderNotificationWithProps({ show: true }),
          );
          await driver.clickOnCloseButton();

          await eventually(async () =>
            expect(await driver.visible()).toBe(false),
          );
        });

        it('should allow reopening the notification after closed by close button', async () => {
          const { driver, rerender } = render(
            renderNotificationWithProps({ show: true }),
          );
          await driver.clickOnCloseButton();

          await eventually(async () =>
            expect(await driver.visible()).toBe(false),
          );

          rerender(renderNotificationWithProps({ show: true }));

          await eventually(async () =>
            expect(await driver.visible()).toBe(true),
          );
        });
      });

      describe(`AutoHide`, () => {
        const someTimeout = 132;
        const renderNewNotification = props =>
          renderNotificationWithProps({ ...props });

        it(`should keep notification shown regardless of any timers`, async () => {
          const { driver } = render(renderNewNotification({ show: true }));
          expect(await driver.visible()).toBe(true);
          setTimeout(
            async () => expect(await driver.visible()).toBe(true),
            someTimeout,
          );
        });

        it('should auto-hide after a given timeout', async () => {
          const { driver } = render(
            renderNewNotification({
              show: true,
              autoHideTimeout: someTimeout,
            }),
          );

          expect(await driver.visible()).toBe(true);
          await eventually(async () =>
            expect(await driver.visible()).toBe(false),
          );
        });

        it('should be able to show notification again after timeout', async () => {
          const { driver, rerender } = render(
            renderNewNotification({
              show: true,
              autoHideTimeout: someTimeout,
            }),
          );

          await eventually(async () =>
            expect(await driver.visible()).toBe(false),
          );

          rerender(
            renderNewNotification({
              show: true,
              autoHideTimeout: someTimeout,
            }),
          );
          expect(await driver.visible()).toBe(true);
        });

        it('should auto-hide after starting from a closed status', async () => {
          const { driver, rerender } = render(
            renderNewNotification({
              show: false,
              autoHideTimeout: someTimeout,
            }),
          );

          await eventually(async () =>
            expect(await driver.visible()).toBe(false),
          );

          rerender(
            renderNewNotification({
              show: true,
              autoHideTimeout: someTimeout,
            }),
          );
          expect(await driver.visible()).toBe(true);

          await eventually(async () =>
            expect(await driver.visible()).toBe(false),
          );
        });
      });
    });

    describe('Style', () => {
      it('should accept a z-index', async () => {
        const zIndex = 999;
        const { driver } = render(
          renderNotificationWithProps({ show: true, zIndex }),
        );
        expect(await driver.getZIndex()).toEqual(zIndex);
      });
    });
  }

  describe('Notification.ActionButton', () => {
    it('should display a Button when passing by default', async () => {
      const component = mount(
        <Notification.ActionButton>Action Button</Notification.ActionButton>,
      );

      expect(component.find('Button')).toHaveLength(1);
    });

    it('should display a Button when explicitly required', async () => {
      const component = mount(
        <Notification.ActionButton type="button">
          Action Button
        </Notification.ActionButton>,
      );

      expect(component.find('Button')).toHaveLength(1);
    });

    it('should display a TextButton when explicitly required', () => {
      const component = mount(
        <Notification.ActionButton type="textLink" link="some link">
          Action Button
        </Notification.ActionButton>,
      );

      expect(component.find(TextButton)).toHaveLength(1);
    });

    it('should render TextButton with target received from props', () => {
      const target = 'some target';
      const component = mount(
        <Notification.ActionButton
          type="textLink"
          link="some link"
          target={target}
        >
          Action Button
        </Notification.ActionButton>,
      );

      expect(component.find(TextButton).props().target).toEqual(target);
    });

    it('should render TextButton with target _self as default', () => {
      const component = mount(
        <Notification.ActionButton type="textLink" link="some link">
          Action Button
        </Notification.ActionButton>,
      );

      expect(component.find(TextButton).props().target).toEqual('_self');
    });
  });

  describe('enzyme testkit', () => {
    class ControlledNotification extends React.Component {
      constructor(props) {
        super(props);

        this.state = { showNotification: false };
      }

      render() {
        return (
          <div>
            <Button
              dataHook="button_dh"
              onClick={() =>
                this.setState({
                  showNotification: !this.state.showNotification,
                })
              }
            >
              button
            </Button>
            <Notification
              dataHook="notification_dh"
              show={this.state.showNotification}
            >
              <Notification.TextLabel>label</Notification.TextLabel>
              <Notification.CloseButton />
            </Notification>
          </div>
        );
      }
    }

    it('should exist', async () => {
      const component = mount(<ControlledNotification />);

      const enzymeNotificationTestkit = enzymeNotificationTestkitFactory({
        wrapper: component,
        dataHook: 'notification_dh',
      });
      const enzymeButtonTestkit = enzymeButtonTestkitFactory({
        wrapper: component,
        dataHook: 'button_dh',
      });

      expect(enzymeNotificationTestkit.visible()).toBe(false);
      expect(await enzymeButtonTestkit.exists()).toBe(true);

      await enzymeButtonTestkit.click();

      expect(enzymeNotificationTestkit.visible()).toBe(true);
    });
  });
});
