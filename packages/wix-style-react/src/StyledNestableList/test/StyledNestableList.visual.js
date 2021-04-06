import React from 'react';
import { storiesOf } from '@storybook/react';
import StyledNestableList from '../StyledNestableList';
import { getSimpleExampleItems } from '../docs/examplesConstants';

const commonProps = {
  // use for repeated props across the tests (e.g. {buttonText: 'example'})
};

const tests = [
  {
    describe: 'sanity', // prop name (e.g. size)
    its: [
      {
        it: 'default', // prop variation (e.g. small)
        props: {
          items: getSimpleExampleItems(),
        },
      },
      {
        it: 'With bottom border', // prop variation (e.g. small)
        props: {
          items: getSimpleExampleItems(),
          withBottomBorder: true,
        },
      },
      {
        it: 'With add button', // prop variation (e.g. small)
        props: {
          maxDepth: 2,
          items: getSimpleExampleItems(),
          addItemLabel: 'Add item',
        },
      },
      {
        it: 'With dragDisable icon', // prop variation (e.g. small)
        props: {
          maxDepth: 2,
          items: getSimpleExampleItems({
            draggable: false,
            dragDisabled: true,
          }),
        },
      },
      {
        it: 'Dragging disabled', // prop variation (e.g. small)
        props: {
          maxDepth: 2,
          items: getSimpleExampleItems({
            draggable: false,
          }),
        },
      },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(
      `${StyledNestableList.displayName}${describe ? '/' + describe : ''}`,
      module,
    ).add(it, () => <StyledNestableList {...commonProps} {...props} />);
  });
});
