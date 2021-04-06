import React from 'react';
import { createRendererWithUniDriver, cleanup } from '../../../test/utils/unit';

import MarketingPageLayoutContent from '../MarketingPageLayoutContent';
import { marketingPageLayoutContentDriverFactory } from '../MarketingPageLayoutContent.uni.driver';

describe(MarketingPageLayoutContent.displayName, () => {
  const render = createRendererWithUniDriver(
    marketingPageLayoutContentDriverFactory,
  );

  afterEach(() => {
    cleanup();
  });

  it('should render', async () => {
    const { driver } = render(<MarketingPageLayoutContent />);

    expect(await driver.exists()).toBe(true);
  });

  describe('overline', () => {
    it('should render the provided `overline` text', async () => {
      const overline = 'Overline Text';
      const { driver } = render(
        <MarketingPageLayoutContent overline={overline} />,
      );

      expect(await driver.getOverlineText()).toBe(overline);
    });

    it('should render the provided `overline` node', async () => {
      const overlineNode = <div data-hook="overline">Outline Text</div>;
      const { driver } = render(
        <MarketingPageLayoutContent overline={overlineNode} />,
      );

      expect(await driver.childExists('[data-hook="overline"]')).toBe(true);
    });

    it('should not display overline', async () => {
      const { driver } = render(<MarketingPageLayoutContent />);

      expect(await driver.hasOverline()).toBe(false);
    });
  });

  describe('title', () => {
    it('should render the provided `title` text', async () => {
      const title = 'Title Text';
      const { driver } = render(<MarketingPageLayoutContent title={title} />);

      expect(await driver.getTitleText()).toBe(title);
    });

    it('should render the provided `title` node', async () => {
      const titleNode = <div data-hook="title">Outline Text</div>;
      const { driver } = render(
        <MarketingPageLayoutContent title={titleNode} />,
      );

      expect(await driver.childExists('[data-hook="title"]')).toBe(true);
    });

    it('should not display title', async () => {
      const { driver } = render(<MarketingPageLayoutContent />);

      expect(await driver.hasTitle()).toBe(false);
    });
  });

  describe('subtitle', () => {
    it('should render the provided `subtitle` text', async () => {
      const subtitle = 'Subtitle Text';
      const { driver } = render(
        <MarketingPageLayoutContent subtitle={subtitle} />,
      );

      expect(await driver.getSubtitleText()).toBe(subtitle);
    });

    it('should render the provided `subtitle` node', async () => {
      const subtitleNode = <div data-hook="subtitle">Outline Text</div>;
      const { driver } = render(
        <MarketingPageLayoutContent subtitle={subtitleNode} />,
      );

      expect(await driver.childExists('[data-hook="subtitle"]')).toBe(true);
    });

    it('should not display subtitle', async () => {
      const { driver } = render(<MarketingPageLayoutContent />);

      expect(await driver.hasSubtitle()).toBe(false);
    });
  });

  describe('content area', () => {
    it('should render the provided `content` text', async () => {
      const content = 'content text';
      const { driver } = render(
        <MarketingPageLayoutContent content={content} />,
      );

      expect(await driver.getContentText()).toBe(content);
    });

    it('should render the provided `content` node', async () => {
      const contentNode = <div data-hook="content">Content Node</div>;
      const { driver } = render(
        <MarketingPageLayoutContent content={contentNode} />,
      );

      expect(await driver.childExists('[data-hook="content"]')).toBe(true);
    });

    it('should not display content area', async () => {
      const { driver } = render(<MarketingPageLayoutContent />);

      expect(await driver.hasContent()).toBe(false);
    });
  });

  describe('actions', () => {
    it('should render the provided `actions` node', async () => {
      const actionsNode = (
        <button data-hook="actionButton">action button</button>
      );
      const { driver } = render(
        <MarketingPageLayoutContent actions={actionsNode} />,
      );

      expect(await driver.childExists('[data-hook="actionButton"]')).toBe(true);
    });

    it('should not display actions', async () => {
      const { driver } = render(<MarketingPageLayoutContent />);

      expect(await driver.hasActions()).toBe(false);
    });
  });
});
