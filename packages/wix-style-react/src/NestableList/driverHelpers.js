import ReactTestUtils from 'react-dom/test-utils';
import { DropItemTarget, DragItemSource } from './Item';

import DragDropContextProvider from '../DragDropContextProvider';

const findInstance = (wrapper, cb) => {
  let itemInstance = null;
  ReactTestUtils.findAllInRenderedTree(wrapper, ins => {
    if (cb(ins)) {
      itemInstance = ins;
    }
    return Boolean(itemInstance);
  });
  return itemInstance;
};

export const getInstanceOfDraggableProvider = wrapper =>
  findInstance(wrapper, ins => ins instanceof DragDropContextProvider);

export const getInstanceOfDraggableSource = (wrapper, itemId) =>
  findInstance(
    wrapper,
    ins => ins instanceof DragItemSource && ins.props.id === itemId,
  );

export const getInstanceOfDraggableTarget = (wrapper, itemId) =>
  findInstance(
    wrapper,
    ins => ins instanceof DropItemTarget && ins.props.id === itemId,
  );
