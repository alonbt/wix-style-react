export const VerticalMovementDirection = {
  top: -1,
  bottom: 1,
};

export const generateUniqueGroupId = () => {
  if (process.env.NODE_ENV === 'test') {
    return 'test_id';
  }
  return Symbol('nestable-list-id');
};

export const getDepth = (item, childrenProperty) => {
  // returns depth of item and children
  let depth = 0;

  if (item[childrenProperty]) {
    item[childrenProperty].forEach(d => {
      const tmpDepth = getDepth(d, childrenProperty);

      if (tmpDepth > depth) {
        depth = tmpDepth;
      }
    });
  }

  return depth + 1;
};

export const getValuesByKey = (data, key, childrenProp) => {
  const values = [data[key]];
  if (data[childrenProp]) {
    data[childrenProp].forEach(item => {
      values.push(...getValuesByKey(item, key, childrenProp));
    });
  }

  return values;
};
// this method mutates an array
export const removeFromTree = (
  items,
  position,
  childrenProperty = 'children',
) => {
  const lastIndex = position.length - 1;
  let itemsRemoveCandidate = items;
  position.forEach((pos, index) => {
    if (index === lastIndex) {
      itemsRemoveCandidate.splice(pos, 1)[0]; // eslint-disable-line no-unused-expressions
    } else {
      itemsRemoveCandidate = itemsRemoveCandidate[pos][childrenProperty];
    }
  });

  return items;
};
// this methods mutates an array
export const addToTree = (
  items,
  item,
  position,
  childrenProperty = 'children',
) => {
  const lastIndex = position.length - 1;
  let itemsAddCandidate = items;
  position.forEach((pos, index) => {
    if (index === lastIndex) {
      itemsAddCandidate.splice(pos, 0, item); // eslint-disable-line no-unused-expressions
    } else {
      if (itemsAddCandidate[pos] && !itemsAddCandidate[pos][childrenProperty]) {
        itemsAddCandidate[pos][childrenProperty] = [];
      }
      itemsAddCandidate = itemsAddCandidate[pos][childrenProperty];
    }
  });

  return items;
};

export function swapItems(
  items,
  firstItem,
  secondItem,
  childProp = 'children',
) {
  return recursiveMap(
    items,
    item => {
      if (item.id === firstItem.id) {
        return secondItem;
      }
      if (item.id === secondItem.id) {
        return firstItem;
      }
      return item;
    },
    childProp,
  );
}

export function getSiblingsByNodePosition(
  items,
  position = [],
  childProp = 'children',
) {
  return position.reduce((siblings, pos, i) => {
    if (siblings && siblings[pos]) {
      if (position.length - 1 === i) {
        return siblings;
      }
      return siblings[pos][childProp];
    }

    return null;
  }, items);
}

export function getNodeAtPosition(
  items,
  position = [],
  childProp = 'children',
) {
  return position.reduce((siblings, pos, i) => {
    if (siblings[pos]) {
      if (position.length - 1 === i) {
        return siblings[pos];
      }
      return siblings[pos][childProp];
    }
    return null;
  }, items);
}

export function getNodePosition(
  items,
  item,
  childProp = 'children',
  position = [],
) {
  if (!items) {
    return;
  }
  for (let i = 0; i < items.length; i++) {
    const currentPosition = [...position, i];
    if (item.id === items[i].id) {
      return currentPosition;
    }

    const nodePosition = getNodePosition(
      items[i][childProp],
      item,
      childProp,
      currentPosition,
    );
    if (nodePosition) {
      return nodePosition;
    }
  }
}

export function recursiveMap(items, predicateFn, childProp = 'children') {
  return items.map(currentItem => {
    const item = predicateFn(currentItem);
    if (item !== currentItem) {
      return item;
    }
    if (currentItem[childProp]) {
      return {
        ...currentItem,
        children: recursiveMap(currentItem[childProp], predicateFn),
      };
    }
    return currentItem;
  });
}

export function isLastItem(siblings, item) {
  return siblings && siblings[siblings.length - 1] === item;
}

export function isFistItem(siblings, item) {
  return siblings && siblings[0] === item;
}

export function isRootItem(depth) {
  return depth === 1;
}

export function hoverAboveItself(prevPosition, nextPosition) {
  return prevPosition.every((position, index) => {
    return nextPosition[index] === position;
  });
}

export function isItemHasChildren(item, childrenProperty) {
  return Boolean(item[childrenProperty] && item[childrenProperty].length);
}

export function getDropParent(items, nextPosition, childrenProperty) {
  return nextPosition
    .slice(1, nextPosition.length - 1)
    .reduce((item, childIndex) => {
      if (!item) {
        return null;
      }
      return item[childrenProperty][childIndex];
    }, items[nextPosition[0]]);
}

export function moveItem(
  items,
  item,
  currentPosition,
  newPosition,
  childrenProp = 'children',
) {
  const newItems = [...items];
  removeFromTree(newItems, currentPosition, childrenProp);
  addToTree(newItems, item, newPosition, childrenProp);
  return newItems;
}

export function moveItemToTheChildOfPrevSibling(
  items,
  item,
  childrenProp = 'children',
) {
  const currentPosition = getNodePosition(items, item, childrenProp);
  // if there is not prev sibling we cannot move
  if (currentPosition[currentPosition.length - 1] === 0) {
    return items;
  }

  const newPosition = currentPosition.reduce((acc, pos, index, arr) => {
    if (index === arr.length - 1) {
      acc.push(pos - 1);
      acc.push(0);
    } else {
      acc.push(pos);
    }
    return acc;
  }, []);

  return moveItem(items, item, currentPosition, newPosition);
}

function getVerticalMovedPosition(
  items,
  position,
  step,
  childProp = 'children',
) {
  const suitableNextParent = [...position]
    .reverse()
    .reduce((acc, pos, index) => {
      if (acc) {
        return acc;
      }
      const prefix = position.slice(0, position.length - 1 - index);
      const siblings = getSiblingsByNodePosition(
        items,
        position.slice(0, position.length - index),
        childProp,
      );
      for (let i = pos + step; i >= 0 && i < siblings.length; i += step) {
        const candidate = [...prefix, i];
        const candidateSiblings = getSiblingsByNodePosition(
          items,
          candidate,
          childProp,
        );
        if (!candidateSiblings) {
          return null;
        }
        const totalDepth =
          getDepth(getNodeAtPosition(items, candidate, childProp), childProp) +
          position.length -
          index;

        if (totalDepth >= position.length) {
          return candidate;
        }
      }
      return acc;
    }, null);

  if (!suitableNextParent) {
    return null;
  }

  if (position.length === suitableNextParent.length) {
    return suitableNextParent;
  }

  return position.reduce((acc, _, index) => {
    const lastItem = index === position.length - 1;
    if (suitableNextParent[index] !== undefined) {
      acc.push(suitableNextParent[index]);
    } else {
      const siblings = getSiblingsByNodePosition(items, [...acc, 0], childProp);
      if (!siblings) {
        acc.push(0);
        return acc;
      }
      const maxIndex = lastItem ? siblings.length : siblings.length - 1;
      let candidateIndex = step < 0 ? maxIndex : 0;

      while (candidateIndex >= 0 && candidateIndex <= maxIndex) {
        const candidate = [...acc, candidateIndex];
        if (lastItem) {
          return candidate;
        }
        const candidateDepth =
          getDepth(getNodeAtPosition(items, candidate, childProp), childProp) +
          index;
        if (candidateDepth < position.length - 1) {
          candidateIndex += step;
          continue;
        }

        return candidate;
      }
    }
    return acc;
  }, []);
}

function getParentPosition(position) {
  return position.slice(0, position.length - 1);
}

export function moveItemVertically(
  items,
  item,
  step = VerticalMovementDirection.bottom,
  childProp = 'children',
) {
  const currentPosition = getNodePosition(items, item, childProp);
  const newPosition = getVerticalMovedPosition(
    items,
    currentPosition,
    step,
    childProp,
  );
  if (newPosition) {
    return moveItem(items, item, currentPosition, newPosition, childProp);
  }
  return items;
}

export function moveItemOutsideOfTheParent(
  items,
  item,
  childProp = 'children',
) {
  const currentPosition = getNodePosition(items, item, childProp);
  // if currentPosition is root of the tree we cannot move item to the left
  if (currentPosition.length < 2) {
    return items;
  }

  const newPosition = getParentPosition(currentPosition);
  newPosition[newPosition.length - 1] = newPosition[newPosition.length - 1] + 1;
  return moveItem(items, item, currentPosition, newPosition);
}

export function setCollapse(items, itemId, isCollapsed) {
  return recursiveMap(items, item => {
    if (itemId === item.id) {
      return {
        ...item,
        isCollapsed,
      };
    }
    return item;
  });
}
