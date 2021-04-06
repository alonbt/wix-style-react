import React from 'react';
import { createRendererWithUniDriver, cleanup } from '../../../test/utils/unit';

import AvatarGroup from '../AvatarGroup';
import { avatarGroupPrivateDriverFactory } from './AvatarGroup.private.uni.driver';

const avatarItems = [
  {
    ariaLabel: 'Avatar for John Doe',
    color: 'A1',
    name: 'John Doe',
    title: 'Wix Account: John Doe (johndoe@gmail.com)',
  },
  {
    ariaLabel: 'Avatar for Snoop Dogg',
    name: 'Snoop Dogg',
    title: 'Wix Account: Snoop Dogg (dog@gmail.com)',
  },
  {
    ariaLabel: 'Avatar for Sia Kate',
    imgProps: {
      src:
        'https://lh3.googleusercontent.com/proxy/EI3faU3-0hCPyjBKktiVuPKfZTMXx6BsDFE0f7UBr_8CKSMRWL28dLZJrWGWExcTRgWI2v3pcuBT19YpJ-xdmxla4mmqWw',
    },
    name: 'Sia Kate',
  },
  {
    ariaLabel: 'Avatar for Steven Tyler',
    title: 'Wix Account: Steven Tyler (steventyler@gmail.com)',
  },
  {
    ariaLabel: 'Avatar for Karen Carpenter',
    name: 'Karen Carpenter',
    title: 'Wix Account: Karen Carpenter (karencarpenter@gmail.com)',
  },
  {
    name: 'Levon Helm',
    title: 'Wix Account: Levon Helm (levonhelm@gmail.com)',
  },
  {
    ariaLabel: 'Avatar for Willie Nelson',
    name: 'Willie Nelson',
    title: 'Wix Account: Willie Nelson (willienelson@gmail.com)',
  },
  {
    ariaLabel: 'Avatar for Patti Smith',
    name: 'Patti Smith',
  },
];

describe(AvatarGroup.displayName, () => {
  const render = createRendererWithUniDriver(avatarGroupPrivateDriverFactory);
  afterEach(cleanup);

  it('should render', async () => {
    const { driver } = render(<AvatarGroup items={avatarItems} />);
    expect(await driver.exists()).toBe(true);
  });

  it('should render 5 avatars by default', async () => {
    const { driver } = render(<AvatarGroup items={avatarItems} />);
    expect(await driver.getVisibleAvatarsCount()).toBe(5);
  });

  it('should render 4 avatars if maxItems prop is set to 4', async () => {
    const { driver } = render(<AvatarGroup items={avatarItems} maxItems={4} />);
    expect(await driver.getVisibleAvatarsCount()).toBe(4);
  });

  describe('moreIndicator', () => {
    it('should render moreIndicator', async () => {
      const { driver } = render(<AvatarGroup items={avatarItems} />);
      expect(await driver.getVisibleAvatarsCount()).toBe(5);
      expect(await driver.isMoreIndicatorExist()).toBe(true);
    });

    it('should not render moreIndicator', async () => {
      const { driver } = render(
        <AvatarGroup items={avatarItems} maxItems={8} />,
      );
      expect(await driver.getVisibleAvatarsCount()).toBe(8);
      expect(await driver.isMoreIndicatorExist()).toBe(false);
    });

    it('should return the number of the rest avatars on the moreIndicator avatar', async () => {
      const { driver } = render(
        <AvatarGroup items={avatarItems} maxItems={7} />,
      );
      const expectedText = '2+';
      expect(await driver.getVisibleAvatarsCount()).toBe(7);
      expect(await driver.getMoreIndicatorContent()).toBe(expectedText);
    });
  });

  it('should return the text content of the avatar', async () => {
    const expectedTextContent = 'SD';
    const { driver } = render(<AvatarGroup items={avatarItems} />);
    expect(await driver.getVisibleAvatarTextContentByIndex(1)).toBe(
      expectedTextContent,
    );
  });
});
