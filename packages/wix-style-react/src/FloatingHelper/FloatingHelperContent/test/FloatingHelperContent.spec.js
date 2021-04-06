import React from 'react';
import { floatingHelperContentDriverFactory } from '../FloatingHelperContent.driver';
import { floatingHelperContentUniDriverFactory } from '../FloatingHelperContent.uni.driver';
import FloatingHelperContent from '../FloatingHelperContent';
import { mount } from 'enzyme';
import {
  createRendererWithUniDriver,
  createRendererWithDriver,
  cleanup,
} from '../../../../test/utils/unit';

describe('FloatingHelperContent', () => {
  const requiredProps = { body: 'this is the body' };

  describe('[sync]', () => {
    runTests(createRendererWithDriver(floatingHelperContentDriverFactory));
  });

  describe('[async]', () => {
    runTests(
      createRendererWithUniDriver(floatingHelperContentUniDriverFactory),
    );
  });

  function runTests(render) {
    afterEach(() => cleanup());

    it('should render', async () => {
      const { driver } = render(<FloatingHelperContent {...requiredProps} />);
      expect(await driver.exists()).toBe(true);
    });

    describe('title prop', () => {
      it('should not have title by default', async () => {
        const { driver } = render(<FloatingHelperContent {...requiredProps} />);
        expect(await driver.hasTitle()).toBe(false);
      });

      it('should have title with proper content', async () => {
        const props = { title: 'title' };
        const { driver } = render(
          <FloatingHelperContent {...requiredProps} {...props} />,
        );
        expect(await driver.hasTitle()).toBe(true);
        expect(await driver.getTitleContent()).toBe(props.title);
      });
    });

    describe('body prop', () => {
      it('should have body with simple text content', async () => {
        const props = { body: 'body' };
        const { driver } = render(
          <FloatingHelperContent {...requiredProps} {...props} />,
        );
        expect(await driver.hasBody()).toBe(true);
        expect(await driver.getBodyContent()).toBe(props.body);
      });
    });

    describe('action button', () => {
      it('should not have action button by default', async () => {
        const { driver } = render(<FloatingHelperContent {...requiredProps} />);
        expect(await driver.hasActionButton()).toBe(false);
      });

      it('should not have action button if only actionText is passed', async () => {
        const props = { actionText: 'Click Me!' };
        const { driver } = render(
          <FloatingHelperContent {...requiredProps} {...props} />,
        );
        expect(await driver.hasActionButton()).toBe(false);
      });

      it('should not have action button if only onActionClick is passed', async () => {
        const props = { onActionClick: () => null };
        const { driver } = render(
          <FloatingHelperContent {...requiredProps} {...props} />,
        );
        expect(await driver.hasActionButton()).toBe(false);
      });

      it('should not have action button if actionText is an empty string', async () => {
        const props = { onActionClick: () => null, actionText: '' };
        const { driver } = render(
          <FloatingHelperContent {...requiredProps} {...props} />,
        );
        expect(await driver.hasActionButton()).toBe(false);
      });

      it('should have action button with correct text', async () => {
        const props = { onActionClick: () => null, actionText: 'Click Me!' };
        const { driver } = render(
          <FloatingHelperContent {...requiredProps} {...props} />,
        );
        expect(await driver.hasActionButton()).toBe(true);
        expect(await driver.getActionButtonText()).toBe(props.actionText);
      });

      it('should call onClick when action button clicked', async () => {
        const props = { onActionClick: jest.fn(), actionText: 'Click Me!' };
        const { driver } = render(
          <FloatingHelperContent {...requiredProps} {...props} />,
        );
        await driver.clickActionButton();
        expect(props.onActionClick).toHaveBeenCalledTimes(1);
      });
    });

    describe('footer prop', () => {
      it('should not be visible by default', async () => {
        const { driver } = render(<FloatingHelperContent {...requiredProps} />);
        expect(await driver.hasFooter()).toBe(false);
      });

      it('should display footer content', async () => {
        const props = { footer: <div>footer</div> };
        const { driver } = render(
          <FloatingHelperContent {...requiredProps} {...props} />,
        );
        expect(await driver.hasFooter()).toBe(true);
        expect(await driver.getFooter()).toEqual(
          mount(props.footer).getDOMNode(),
        );
      });
    });

    describe('image prop', () => {
      it('should not be visible by default', async () => {
        const { driver } = render(<FloatingHelperContent {...requiredProps} />);
        expect(await driver.hasImage()).toBe(false);
      });

      it('should render the image', async () => {
        const props = { image: <div>🤔</div> };
        const { driver } = render(
          <FloatingHelperContent {...requiredProps} {...props} />,
        );
        expect(await driver.hasImage()).toBe(true);
        expect(await driver.getImage()).toEqual(
          mount(props.image).getDOMNode(),
        );
      });
    });
  }
});
