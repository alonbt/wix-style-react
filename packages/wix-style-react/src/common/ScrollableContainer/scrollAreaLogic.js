import { AreaY } from './constants';

export const getScrollAreaY = ({ scrollHeight, clientHeight, scrollTop }) => {
  if (scrollHeight <= clientHeight) {
    return AreaY.NONE;
  } else if (scrollTop === 0) {
    return AreaY.TOP;
  } else if (scrollHeight - scrollTop === clientHeight) {
    return AreaY.BOTTOM;
  } else {
    return AreaY.MIDDLE;
  }
};
