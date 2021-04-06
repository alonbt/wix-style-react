import React from 'react';
import { createRendererWithUniDriver, cleanup } from '../../../test/utils/unit';

import StyledNestableList from '../StyledNestableList';
import { styledNestableListPrivateDriverFactory } from './StyledNestableList.private.uni.driver';

describe(StyledNestableList.displayName, () => {
  const render = createRendererWithUniDriver(
    styledNestableListPrivateDriverFactory,
  );

  afterEach(cleanup);

  it('should render', async () => {
    const { driver } = render(<StyledNestableList />);

    expect(await driver.exists()).toBe(true);
  });
});
