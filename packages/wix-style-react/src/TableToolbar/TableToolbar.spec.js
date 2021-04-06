import React from 'react';
import { createUniDriverFactory } from 'wix-ui-test-utils/uni-driver-factory';
import { TableToolbar } from './TableToolbar';
import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';

describe('TableToolbar', () => {
  const tableToolbarUniDriverFactory = base => {
    return {
      ...baseUniDriverFactory(base),
      getByDataHook: async dataHook => {
        const element = base.$(`[data-hook=${dataHook}]`);
        if (!(await element.exists())) {
          return false;
        }
        return element;
      },
    };
  };

  const createDriver = createUniDriverFactory(tableToolbarUniDriverFactory);

  it('Should allow adding datahook to TableToolbar.Title', async () => {
    const dataHook = 'toolbar-title';
    const driver = createDriver(
      <TableToolbar>
        <TableToolbar.Item>
          <TableToolbar.Title dataHook={dataHook} />
        </TableToolbar.Item>
      </TableToolbar>,
    );
    expect(await driver.getByDataHook(dataHook)).toBeTruthy();
  });

  it('Should allow adding datahook to TableToolbar.SelectedCount', async () => {
    const dataHook = 'toolbar-selected-count';
    const driver = createDriver(
      <TableToolbar>
        <TableToolbar.Item>
          <TableToolbar.SelectedCount dataHook={dataHook} />
        </TableToolbar.Item>
      </TableToolbar>,
    );
    expect(await driver.getByDataHook(dataHook)).toBeTruthy();
  });
});
