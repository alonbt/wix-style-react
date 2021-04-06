import React from 'react';
import {
  createRendererWithUniDriver,
  createRendererWithDriver,
  cleanup,
} from '../../../test/utils/unit';
import BaseModalLayout from '../index';
import { baseModalLayoutPrivateDriverFactory } from './BaseModalLayout.private.uni.driver';
import { baseModalLayoutDriverFactory } from '../BaseModalLayout.legacy.driver';
import Text from '../../Text';

describe('BaseModalLayout', () => {
  describe('[sync]', () => {
    runTests(createRendererWithDriver(baseModalLayoutDriverFactory));
  });

  describe('[async]', () => {
    runTests(createRendererWithUniDriver(baseModalLayoutPrivateDriverFactory));
  });

  function runTests(render) {
    afterEach(() => cleanup());

    it('should render', async () => {
      const { driver } = render(<BaseModalLayout />);
      expect(await driver.exists()).toBe(true);
    });

    it('should render children', async () => {
      const children = <div data-hook="child">Child</div>;
      const { driver } = render(<BaseModalLayout>{children}</BaseModalLayout>);
      expect(await driver.childExists('child')).toBe(true);
    });

    it('should receive class name', async () => {
      const expectedClass = 'classy';
      const { driver } = render(<BaseModalLayout className={expectedClass} />);
      expect(await driver._hasClass(expectedClass)).toBe(true);
    });

    it('should not render the close button when no `onCloseButtonClick` provided', async () => {
      const { driver } = render(<BaseModalLayout />);
      expect(await driver._closeButtonExists()).toBe(false);
    });

    it('should render the close button', async () => {
      const { driver } = render(
        <BaseModalLayout onCloseButtonClick={() => {}} />,
      );
      expect(await driver._closeButtonExists()).toBe(true);
    });

    it('should click on the close button', async () => {
      const onCloseButtonClickSpy = jest.fn();
      const { driver } = render(
        <BaseModalLayout onCloseButtonClick={onCloseButtonClickSpy}>
          Content
        </BaseModalLayout>,
      );
      await driver.clickCloseButton();
      expect(onCloseButtonClickSpy).toHaveBeenCalledTimes(1);
    });

    it('should not render the help button when no `onHelpButtonClick` provided', async () => {
      const { driver } = render(<BaseModalLayout />);
      expect(await driver._helpButtonExists()).toBe(false);
    });

    it('should render the help button', async () => {
      const { driver } = render(
        <BaseModalLayout onHelpButtonClick={() => {}} />,
      );
      expect(await driver._helpButtonExists()).toBe(true);
    });

    it('should click on the help button', async () => {
      const onHelpButtonClickSpy = jest.fn();
      const { driver } = render(
        <BaseModalLayout onHelpButtonClick={onHelpButtonClickSpy}>
          Content
        </BaseModalLayout>,
      );
      await driver.clickHelpButton();
      expect(onHelpButtonClickSpy).toHaveBeenCalledTimes(1);
    });

    it('should set the layout `theme`', async () => {
      const theme = 'premium';
      const { driver } = render(<BaseModalLayout theme={theme} />);
      expect(await driver.getTheme()).toBe(theme);
    });

    it('should override the props of internal components that use the context consumer', async () => {
      const theRightTitle = 'The right title';
      const { driver } = render(
        <BaseModalLayout title={theRightTitle}>
          <BaseModalLayout.Header title={'The wrong title'} />
        </BaseModalLayout>,
      );
      expect(await driver.getTitleText()).toEqual(theRightTitle);
    });

    /* Testing the BaseModalLayout Blocks here */
    describe('Layout Blocks', () => {
      describe('Header', () => {
        it('should not render the header when `title` and `subtitle` are not provided', async () => {
          const { driver } = render(
            <BaseModalLayout>
              <BaseModalLayout.Header dataHook={'header'} />
            </BaseModalLayout>,
          );
          expect(await driver.childExists('header')).toBe(false);
        });

        it('should render the header when `title` is provided', async () => {
          const { driver } = render(
            <BaseModalLayout title={'title'}>
              <BaseModalLayout.Header dataHook={'header'} />
            </BaseModalLayout>,
          );
          expect(await driver.childExists('header')).toBe(true);
        });

        it('should render the provided `title` text', async () => {
          const title = 'Modal Title';
          const { driver } = render(
            <BaseModalLayout title={title}>
              <BaseModalLayout.Header />
            </BaseModalLayout>,
          );
          expect(await driver.getTitleText()).toEqual(title);
        });

        it('should render the provided `title` node', async () => {
          const titleNode = <div data-hook={'title'}>Title Text</div>;
          const { driver } = render(
            <BaseModalLayout title={titleNode}>
              <BaseModalLayout.Header />
            </BaseModalLayout>,
          );
          expect(await driver.childExists('title')).toBe(true);
        });

        it('should render the header when `subtitle` is provided', async () => {
          const { driver } = render(
            <BaseModalLayout subtitle={'subtitle'}>
              <BaseModalLayout.Header dataHook={'header'} />
            </BaseModalLayout>,
          );
          expect(await driver.childExists('header')).toBe(true);
        });

        it('should render `subtitle` text', async () => {
          const subtitle = 'Subtitle here';
          const { driver } = render(
            <BaseModalLayout subtitle={subtitle}>
              <BaseModalLayout.Header />
            </BaseModalLayout>,
          );
          expect(await driver.getSubtitleText()).toEqual(subtitle);
        });
      });

      describe('Content', () => {
        it('should render the content with the provided `content` prop', async () => {
          const contentNode = <div data-hook="content">Content Text</div>;
          const { driver } = render(
            <BaseModalLayout content={contentNode}>
              <BaseModalLayout.Content />
            </BaseModalLayout>,
          );
          expect(await driver.childExists('content')).toBe(true);
        });

        it('should render the content with the provided `children`', async () => {
          const contentText = 'Content Text';
          const contentNode = <div data-hook="content">{contentText}</div>;
          const { driver } = render(
            <BaseModalLayout>
              <BaseModalLayout.Content>{contentNode}</BaseModalLayout.Content>
            </BaseModalLayout>,
          );
          expect(await driver.childExists('content')).toBe(true);
        });

        it('should not render the content when no `content` passed', async () => {
          const { driver } = render(
            <BaseModalLayout>
              <BaseModalLayout.Content dataHook={'content'} />
            </BaseModalLayout>,
          );
          expect(await driver.childExists('content')).toBe(false);
        });
      });

      describe('Footer', () => {
        it('should not render `footer` when no actions-related props passed', async () => {
          const { driver } = render(
            <BaseModalLayout>
              <BaseModalLayout.Footer dataHook={'footer'} />
            </BaseModalLayout>,
          );
          expect(await driver.childExists('footer')).toBe(false);
        });

        it('should render `footer` when `sideActions` passed', async () => {
          const sideActionsNode = (
            <Text dataHook={'side-actions'}>Side Actions</Text>
          );
          const { driver } = render(
            <BaseModalLayout sideActions={sideActionsNode}>
              <BaseModalLayout.Footer />
            </BaseModalLayout>,
          );
          expect(await driver.childExists('side-actions')).toBe(true);
        });

        it('should render `footer` when `secondaryButtonText` passed', async () => {
          const secondaryButtonText = 'secondaryButtonText';
          const { driver } = render(
            <BaseModalLayout secondaryButtonText={secondaryButtonText}>
              <BaseModalLayout.Footer />
            </BaseModalLayout>,
          );
          const secondaryButtonDriver = await driver.getSecondaryButtonDriver();
          expect(await secondaryButtonDriver.getButtonTextContent()).toBe(
            secondaryButtonText,
          );
        });

        it('should render `footer` and the secondary-button when `secondaryButtonOnClick` passed', async () => {
          const secondaryButtonOnClickSpy = jest.fn();
          const { driver } = render(
            <BaseModalLayout secondaryButtonOnClick={secondaryButtonOnClickSpy}>
              <BaseModalLayout.Footer />
            </BaseModalLayout>,
          );
          const secondaryButtonDriver = await driver.getSecondaryButtonDriver();
          await secondaryButtonDriver.click();
          expect(secondaryButtonOnClickSpy).toHaveBeenCalled();
        });

        it('should render `footer` and the secondary-button when `secondaryButtonProps` passed', async () => {
          const secondaryButtonProps = { disabled: true };
          const { driver } = render(
            <BaseModalLayout secondaryButtonProps={secondaryButtonProps}>
              <BaseModalLayout.Footer />
            </BaseModalLayout>,
          );
          const secondaryButtonDriver = await driver.getSecondaryButtonDriver();
          expect(await secondaryButtonDriver.isButtonDisabled()).toBe(true);
        });

        it('should render `footer` and the primary-button when `primaryButtonText` passed', async () => {
          const primaryButtonText = 'primaryButtonText';
          const { driver } = render(
            <BaseModalLayout primaryButtonText={primaryButtonText}>
              <BaseModalLayout.Footer />
            </BaseModalLayout>,
          );
          const primaryButtonDriver = await driver.getPrimaryButtonDriver();
          expect(await primaryButtonDriver.getButtonTextContent()).toBe(
            primaryButtonText,
          );
        });

        it('should render `footer` and the primary-button when `primaryButtonOnClick` passed', async () => {
          const primaryButtonOnClickSpy = jest.fn();
          const { driver } = render(
            <BaseModalLayout primaryButtonOnClick={primaryButtonOnClickSpy}>
              <BaseModalLayout.Footer />
            </BaseModalLayout>,
          );
          const primaryButtonDriver = await driver.getPrimaryButtonDriver();
          await primaryButtonDriver.click();
          expect(primaryButtonOnClickSpy).toHaveBeenCalled();
        });

        it('should render `footer` and the primary-button when `primaryButtonProps` passed', async () => {
          const primaryButtonProps = { disabled: true };
          const { driver } = render(
            <BaseModalLayout primaryButtonProps={primaryButtonProps}>
              <BaseModalLayout.Footer />
            </BaseModalLayout>,
          );
          const primaryButtonDriver = await driver.getPrimaryButtonDriver();
          expect(await primaryButtonDriver.isButtonDisabled()).toBe(true);
        });

        it('should render primary buttons children from `primaryButtonProps` when primaryTextButton is not passed', async () => {
          const primaryButtonProps = {
            children: <div data-hook="test-data-hook">test</div>,
          };
          const { driver } = render(
            <BaseModalLayout primaryButtonProps={primaryButtonProps}>
              <BaseModalLayout.Footer />
            </BaseModalLayout>,
          );
          expect(await driver.childExists('test-data-hook')).toBe(true);
        });

        it('should render secondary buttons children from `secondaryButtonProps` when secondaryTextButton is not passed', async () => {
          const secondaryButtonProps = {
            children: <div data-hook="test-data-hook">test</div>,
          };
          const { driver } = render(
            <BaseModalLayout secondaryButtonProps={secondaryButtonProps}>
              <BaseModalLayout.Footer />
            </BaseModalLayout>,
          );
          expect(await driver.childExists('test-data-hook')).toBe(true);
        });

        it('should render text as primary buttons children when both `primaryButtonProps` and primaryTextButton are passed', async () => {
          const primaryButtonProps = {
            children: <div data-hook="test-data-hook">test</div>,
          };
          const primaryButtonText = 'primaryButtonText';
          const { driver } = render(
            <BaseModalLayout
              primaryButtonText={primaryButtonText}
              primaryButtonProps={primaryButtonProps}
            >
              <BaseModalLayout.Footer />
            </BaseModalLayout>,
          );
          const primaryButtonDriver = await driver.getPrimaryButtonDriver();
          expect(await primaryButtonDriver.getButtonTextContent()).toBe(
            primaryButtonText,
          );
          expect(await driver.childExists('test-data-hook')).toBe(false);
        });

        it('should render text as secondary buttons children when both `secondaryButtonProps` and secondaryTextButton are passed', async () => {
          const secondaryButtonProps = {
            children: <div data-hook="test-data-hook">test</div>,
          };
          const secondaryButtonText = 'primaryButtonText';
          const { driver } = render(
            <BaseModalLayout
              secondaryButtonText={secondaryButtonText}
              secondaryButtonProps={secondaryButtonProps}
            >
              <BaseModalLayout.Footer />
            </BaseModalLayout>,
          );
          const secondaryButtonDriver = await driver.getSecondaryButtonDriver();
          expect(await secondaryButtonDriver.getButtonTextContent()).toBe(
            secondaryButtonText,
          );
          expect(await driver.childExists('test-data-hook')).toBe(false);
        });
      });

      describe('Footnote', () => {
        it('should not render `footnote` when prop is not provided', async () => {
          const { driver } = render(
            <BaseModalLayout>
              <BaseModalLayout.Footnote dataHook={'footnote'} />
            </BaseModalLayout>,
          );
          expect(await driver.childExists('footnote')).toBe(false);
        });

        it('should render `footnote` when prop is passed', async () => {
          const footnoteNode = <div data-hook={'footnote'} />;
          const { driver } = render(
            <BaseModalLayout footnote={footnoteNode}>
              <BaseModalLayout.Footnote />
            </BaseModalLayout>,
          );
          expect(await driver.childExists('footnote')).toBe(true);
        });

        it('should render `footnote` when `children` was passed', async () => {
          const footnoteNode = <div data-hook={'footnote'} />;
          const { driver } = render(
            <BaseModalLayout>
              <BaseModalLayout.Footnote>
                {footnoteNode}
              </BaseModalLayout.Footnote>
            </BaseModalLayout>,
          );
          expect(await driver.childExists('footnote')).toBe(true);
        });
      });

      describe('Illustration', () => {
        it('should not render `illustration` when prop is not provided', async () => {
          const { driver } = render(
            <BaseModalLayout>
              <BaseModalLayout.Illustration dataHook={'illustration'} />
            </BaseModalLayout>,
          );
          expect(await driver.childExists('illustration')).toBe(false);
        });

        it('should render `illustration` when text prop is passed', async () => {
          const illustrationSrc = 'illustration-source';
          const { driver } = render(
            <BaseModalLayout illustration={illustrationSrc}>
              <BaseModalLayout.Illustration />
            </BaseModalLayout>,
          );
          expect(await driver.getIllustrationSrc()).toBe(illustrationSrc);
        });

        it('should render `illustration` when node prop is passed', async () => {
          const illustrationNode = <img data-hook="illustration" />;
          const { driver } = render(
            <BaseModalLayout illustration={illustrationNode}>
              <BaseModalLayout.Illustration />
            </BaseModalLayout>,
          );
          expect(await driver.childExists('illustration')).toBe(true);
        });

        it('should render `illustration` when node is passed as children', async () => {
          const illustrationNode = <img data-hook="illustration" />;
          const { driver } = render(
            <BaseModalLayout>
              <BaseModalLayout.Illustration>
                {illustrationNode}
              </BaseModalLayout.Illustration>
            </BaseModalLayout>,
          );
          expect(await driver.childExists('illustration')).toBe(true);
        });
      });
    });
  }
});
