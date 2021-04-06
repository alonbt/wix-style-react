import React from 'react';
import { createRendererWithUniDriver, cleanup } from '../../../test/utils/unit';

import AnnouncementModalLayout from '../AnnouncementModalLayout';
import { announcementModalLayoutPrivateDriverFactory } from './AnnouncementModalLayout.private.uni.driver';

describe('AnnouncementModalLayout', () => {
  const render = createRendererWithUniDriver(
    announcementModalLayoutPrivateDriverFactory,
  );

  afterEach(() => {
    cleanup();
  });

  it('should render the Illustration component when illustration-related props are passed', async () => {
    const illustration = 'some illustration';
    const { driver } = render(
      <AnnouncementModalLayout illustration={illustration} />,
    );
    expect(await driver.getIllustrationSrc()).toBe(illustration);
  });

  it('should render the Header component when header-related props are passed', async () => {
    const title = 'some title';
    const { driver } = render(<AnnouncementModalLayout title={title} />);
    expect(await driver.getTitleText()).toBe(title);
  });

  it('should render the Content component with provided children', async () => {
    const children = <div data-hook={'children'} />;
    const { driver } = render(
      <AnnouncementModalLayout>{children}</AnnouncementModalLayout>,
    );
    expect(await driver.childExists('children')).toBe(true);
  });

  it('should render the Footer component when footer-related props are passed', async () => {
    const pButtonText = 'pButtonText';
    const { driver } = render(
      <AnnouncementModalLayout primaryButtonText={pButtonText} />,
    );
    const pButtonDriver = await driver.getPrimaryButtonDriver();
    expect(await pButtonDriver.getButtonTextContent()).toBe(pButtonText);
  });

  it('should render the Footnote component when footnote-related props are passed', async () => {
    const footnoteNode = <div data-hook={'footnote'} />;
    const { driver } = render(
      <AnnouncementModalLayout footnote={footnoteNode} />,
    );
    expect(await driver.childExists('footnote')).toBe(true);
  });

  it('should render the Link component when link-related props are passed', async () => {
    const linkText = 'link text';
    const { driver } = render(<AnnouncementModalLayout linkText={linkText} />);
    expect(await driver.getLinkText()).toBe(linkText);
  });

  it('should trigger the `linkOnClick` handler when link clicked', async () => {
    const linkOnClickSpy = jest.fn();
    const { driver } = render(
      <AnnouncementModalLayout linkOnClick={linkOnClickSpy} />,
    );
    await driver.clickLink();
    expect(linkOnClickSpy).toHaveBeenCalled();
  });
});
