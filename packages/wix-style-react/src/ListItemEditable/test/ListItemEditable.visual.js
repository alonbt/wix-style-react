import React from 'react';
import { storiesOf } from '@storybook/react';
import ListItemEditable, { listItemEditableBuilder } from '../ListItemEditable';
import DropdownLayout from '../../DropdownLayout';
import { storyOfAllPermutations } from '../../../test/utils/visual/utils';

const commonProps = {
  onApprove: () => null,
  onCancel: () => null,
};

const Story = props => <ListItemEditable {...commonProps} {...props} />;

const options = {
  props: ['placeholder', 'size', 'status', 'margins'],
};

storyOfAllPermutations(Story, ListItemEditable, options);

storiesOf('ListItemEditable', module).add('builder', () => (
  <DropdownLayout
    visible
    selectedId={1}
    options={[
      listItemEditableBuilder({
        id: 0,
      }),
      listItemEditableBuilder({
        id: 1,
      }),
      listItemEditableBuilder({
        id: 2,
      }),
    ]}
  />
));
