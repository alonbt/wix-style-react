import React from 'react';
import { createRendererWithUniDriver, cleanup } from '../../../test/utils/unit';
import SidePanel from '../SidePanel';
import { sidePanelPrivateDriverFactory } from './SidePanel.private.uni.driver';

describe('SidePanel', () => {
  const render = createRendererWithUniDriver(sidePanelPrivateDriverFactory);

  afterEach(() => {
    cleanup();
  });

  it('should render', async () => {
    const { driver } = render(<SidePanel />);
    expect(await driver.exists()).toBe(true);
  });

  it('should pass the class name', async () => {
    const expectedClassName = 'some-selector';
    const { driver } = render(<SidePanel className={expectedClassName} />);
    expect(await driver.hasClass(expectedClassName)).toBe(true);
  });

  describe('SidePanel.Content', () => {
    it('should have content', async () => {
      const content = 'Any Content';
      const { driver } = render(
        <SidePanel>
          <SidePanel.Content>{content}</SidePanel.Content>
        </SidePanel>,
      );

      expect(await driver.content.exists()).toBe(true);
    });
  });

  describe('SidePanel.Header', () => {
    it('should have header', async () => {
      const { driver } = render(
        <SidePanel>
          <SidePanel.Header />
        </SidePanel>,
      );

      expect(await driver.header.exists()).toBe(true);
    });

    it('should have string title', async () => {
      const title = 'some text';
      const { driver } = render(
        <SidePanel>
          <SidePanel.Header title={title} />
        </SidePanel>,
      );

      expect(await driver.getTitleText()).toBe(title);
    });

    it('should have string title with infoTooltipContent ', async () => {
      const infoTooltipContent = 'infoTooltipContent';
      const { driver } = render(
        <SidePanel>
          <SidePanel.Header
            title={'title'}
            infoTooltipContent={infoTooltipContent}
          />
        </SidePanel>,
      );
      expect(await driver.getTooltipContent()).toBe(infoTooltipContent);
    });

    it('should have custom node title', async () => {
      const title = 'some text';
      const { driver } = render(
        <SidePanel>
          <SidePanel.Header
            title={<div data-hook={'custom-node'}>{title}</div>}
          />
        </SidePanel>,
      );

      expect(await driver.header.getCustomNodeText()).toBe(title);
    });

    it('should show divider by default', async () => {
      const title = 'some text';
      const { driver } = render(
        <SidePanel>
          <SidePanel.Header title={title} />
        </SidePanel>,
      );

      expect(await driver.isHeaderDividerExists()).toBe(true);
    });

    it('should show divider', async () => {
      const title = 'some text';
      const { driver } = render(
        <SidePanel>
          <SidePanel.Header title={title} showDivider />
        </SidePanel>,
      );

      expect(await driver.isHeaderDividerExists()).toBe(true);
    });

    it('should not show divider', async () => {
      const title = 'some text';
      const { driver } = render(
        <SidePanel>
          <SidePanel.Header title={title} showDivider={false} />
        </SidePanel>,
      );

      expect(await driver.isHeaderDividerExists()).toBe(false);
    });

    it('should have close button', async () => {
      const { driver } = render(
        <SidePanel>
          <SidePanel.Header />
        </SidePanel>,
      );

      expect(await driver.isCloseButtonExists()).toBe(true);
    });

    it('should call onCloseButtonClick when close button clicked', async () => {
      const onCloseButtonClick = jest.fn();
      const { driver } = render(
        <SidePanel onCloseButtonClick={onCloseButtonClick}>
          <SidePanel.Header />
        </SidePanel>,
      );

      await driver.clickClose();

      expect(onCloseButtonClick).toHaveBeenCalled();
    });

    it('should have children', async () => {
      const title = 'some text';
      const { driver } = render(
        <SidePanel>
          <SidePanel.Header>
            <div data-hook={'custom-node'}>{title}</div>
          </SidePanel.Header>
        </SidePanel>,
      );

      expect(await driver.header.getCustomNodeText()).toBe(title);
    });
  });

  describe('SidePanel.Footer', () => {
    it('should have footer', async () => {
      const content = 'Any Content';
      const { driver } = render(
        <SidePanel>
          <SidePanel.Footer>{content}</SidePanel.Footer>
        </SidePanel>,
      );

      expect(await driver.footer.exists()).toBe(true);
    });

    it('should show divider by default', async () => {
      const { driver } = render(
        <SidePanel>
          <SidePanel.Footer></SidePanel.Footer>
        </SidePanel>,
      );

      expect(await driver.isFooterDividerExists()).toBe(true);
    });

    it('should show divider', async () => {
      const { driver } = render(
        <SidePanel>
          <SidePanel.Footer showDivider></SidePanel.Footer>
        </SidePanel>,
      );

      expect(await driver.isFooterDividerExists()).toBe(true);
    });

    it('should not show divider', async () => {
      const { driver } = render(
        <SidePanel>
          <SidePanel.Footer showDivider={false}></SidePanel.Footer>
        </SidePanel>,
      );

      expect(await driver.isFooterDividerExists()).toBe(false);
    });
  });
});
