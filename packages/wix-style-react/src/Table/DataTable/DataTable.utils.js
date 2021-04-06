import shallowEqual from 'shallowequal';
import { stVars } from './DataTable.st.css';

export function virtualRowsAreEqual(prevProps, nextProps) {
  const {
    style: prevStyle,
    data: prevData,
    index: prevIndex,
    ...prevRest
  } = prevProps;
  const {
    style: nextStyle,
    data: nextData,
    index: nextIndex,
    ...nextRest
  } = nextProps;

  const { data: nextItemData, ...restNextItemData } = nextData;
  const { data: prevItemData, ...restPrevItemData } = prevData;

  return (
    nextIndex === prevIndex &&
    shallowEqual(prevStyle, nextStyle) &&
    shallowEqual(prevItemData[prevIndex], nextItemData[nextIndex]) &&
    shallowEqual(restPrevItemData, restNextItemData) &&
    shallowEqual(prevRest, nextRest)
  );
}

const CELL_PADDING = parseInt(stVars.cellHorizontalPadding, 10);
const CELL_EDGE_PADDING = parseInt(stVars.cellHorizontalEdgePadding, 10);

export const getStickyColumnStyle = (columns, column) => {
  let left = 0;

  for (let i = 0; i < columns.length; i++) {
    const col = columns[i];
    if (col === column) {
      break;
    }

    const horizontalPadding =
      i === 0 ? CELL_EDGE_PADDING + CELL_PADDING : 2 * CELL_PADDING;
    left += parseInt(col.width, 10) + horizontalPadding;
  }

  return { left };
};
