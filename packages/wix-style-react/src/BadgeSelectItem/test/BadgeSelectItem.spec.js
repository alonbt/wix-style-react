import React from 'react';
import BadgeSelectItem from '../BadgeSelectItem';
import { SKINS } from '../constants';
import { cleanup, createRendererWithUniDriver } from '../../../test/utils/unit';

import { badgeSelectItemDriverFactory } from '../BadgeSelectItem.uni.driver';

describe('BadgeSelectItem', () => {
  const render = createRendererWithUniDriver(badgeSelectItemDriverFactory);

  const requiredProps = {
    id: 0,
    skin: SKINS.success,
    text: 'text',
  };

  afterEach(cleanup);

  it('should render text', async () => {
    const { driver } = render(<BadgeSelectItem {...requiredProps} />);
    expect(await driver.getText()).toBe(requiredProps.text);
  });

  it('should render subtitle', async () => {
    const subtitle = 'subtitle';
    const { driver } = render(
      <BadgeSelectItem {...requiredProps} subtitle={subtitle} />,
    );
    expect(await driver.getSubtitleText()).toBe(subtitle);
  });
});
