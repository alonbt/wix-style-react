import React from 'react';
import { createRendererWithUniDriver, cleanup } from '../../../test/utils/unit';

import Pagination from '../Pagination';
import { paginationPrivateDriverFactory } from './Pagination.private.uni.driver';

describe('Pagination', () => {
  const render = createRendererWithUniDriver(paginationPrivateDriverFactory);

  afterEach(() => {
    cleanup();
  });

  it('should render', async () => {
    const { driver } = render(<Pagination totalPages={5} />);

    expect(await driver.exists()).toBe(true);
  });
});
