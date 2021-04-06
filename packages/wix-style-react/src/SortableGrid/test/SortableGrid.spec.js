import React from 'react';
import { cleanup, createRendererWithUniDriver } from '../../../test/utils/unit';

import SortableGrid from '../SortableGrid';
import TestBackend from '../../DragDropContextProvider/TestBackend';
import DragDropContextProvider from '../../DragDropContextProvider';
import { sortableGridPrivateDriverFactory } from './SortableGrid.private.uni.driver';

const defaultProps = {
  contentClassName: 'cl',
  dataHook: 'sortable-grid',
  containerId: 'sortable-grid',
  groupName: 'group',
  items: [
    { id: '1', text: 'item 1' },
    { id: '2', text: 'item 2' },
  ],
  renderItem: ({ item }) => <div data-hook={item.id}>{item.text}</div>,
};

describe(SortableGrid.displayName, () => {
  const renderSortableGridSection = (props = defaultProps) => (
    <DragDropContextProvider backend={TestBackend}>
      <SortableGrid {...props} />
    </DragDropContextProvider>
  );

  const render = createRendererWithUniDriver(sortableGridPrivateDriverFactory);

  afterEach(() => {
    cleanup();
  });

  it('should exists', async () => {
    const { driver } = render(renderSortableGridSection());
    expect(await driver.exists()).toBe(true);
  });

  it('should NOT render fixed element before draggable list', async () => {
    const { driver } = render(renderSortableGridSection());
    expect(await driver.startFixedElementExists()).toBe(false);
  });

  it('should render fixed element before draggable list', async () => {
    const { driver } = render(
      renderSortableGridSection({
        ...defaultProps,
        startFixedElement: <span />,
      }),
    );
    expect(await driver.startFixedElementExists()).toBe(true);
  });

  it('should NOT render fixed element after draggable list', async () => {
    const { driver } = render(renderSortableGridSection());
    expect(await driver.endFixedElementExists()).toBe(false);
  });

  it('should render fixed element after draggable list', async () => {
    const { driver } = render(
      renderSortableGridSection({
        ...defaultProps,
        endFixedElement: <span />,
      }),
    );
    expect(await driver.endFixedElementExists()).toBe(true);
  });
});
