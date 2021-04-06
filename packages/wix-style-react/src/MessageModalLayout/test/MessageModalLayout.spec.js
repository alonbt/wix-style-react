import React from 'react';
import { createRendererWithUniDriver, cleanup } from '../../../test/utils/unit';

import MessageModalLayout from '../MessageModalLayout';
import { messageModalLayoutPrivateDriverFactory } from './MessageModalLayout.private.uni.driver';

describe('MessageModalLayout', () => {
  const render = createRendererWithUniDriver(
    messageModalLayoutPrivateDriverFactory,
  );

  afterEach(() => {
    cleanup();
  });

  it('should render the Illustration component when illustration-related props are passed', async () => {
    const illustration = 'some illustration';
    const { driver } = render(
      <MessageModalLayout illustration={illustration} />,
    );
    expect(await driver.getIllustrationSrc()).toBe(illustration);
  });

  it('should render the Header component when header-related props are passed', async () => {
    const title = 'some title';
    const { driver } = render(<MessageModalLayout title={title} />);
    expect(await driver.getTitleText()).toBe(title);
  });

  it('should render the Content component with provided children', async () => {
    const children = <div data-hook={'children'} />;
    const { driver } = render(
      <MessageModalLayout>{children}</MessageModalLayout>,
    );
    expect(await driver.childExists('children')).toBe(true);
  });

  it('should render the Footer component when footer-related props are passed', async () => {
    const pButtonText = 'pButtonText';
    const { driver } = render(
      <MessageModalLayout primaryButtonText={pButtonText} />,
    );
    const pButtonDriver = await driver.getPrimaryButtonDriver();
    expect(await pButtonDriver.getButtonTextContent()).toBe(pButtonText);
  });

  it('should render the Footnote component when footnote-related props are passed', async () => {
    const footnoteNode = <div data-hook={'footnote'} />;
    const { driver } = render(<MessageModalLayout footnote={footnoteNode} />);
    expect(await driver.childExists('footnote')).toBe(true);
  });
});
