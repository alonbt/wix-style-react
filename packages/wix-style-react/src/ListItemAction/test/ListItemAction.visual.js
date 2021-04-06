import React from 'react';
import { storiesOf } from '@storybook/react';
import ListItemAction, { listItemActionBuilder } from '..';
import DropdownLayout from '../../DropdownLayout';
import Edit from 'wix-ui-icons-common/Edit';
import { storyOfAllPermutations } from '../../../test/utils/visual/utils';

const Story = props => (
  <div
    style={{
      padding: '6px',
      width: '600px',
      background: '#eee',
      display: 'grid',
      gridAutoFlow: 'column',
      gridGap: '6px',
    }}
  >
    {['standard', 'dark', 'destructive'].map(skin => (
      <div key={skin}>
        <ListItemAction {...props} skin={skin} title="Hello!" />
      </div>
    ))}
  </div>
);

const options = {
  props: [
    'size',
    'disabled',
    'highlighted',
    {
      name: 'prefixIcon',
      values: [undefined, <Edit />],
    },
  ],
  skipUndefinedValue: true,
  storyName: 'sanity',
};

const EllipsisStory = props => (
  <div style={{ width: '250px' }}>
    <ListItemAction
      {...props}
      title="This is a very long title that will not fit a single line"
    />
  </div>
);

const ellipsisOptions = {
  props: [
    'size',
    {
      name: 'prefixIcon',
      values: [undefined, <Edit />],
    },
    'ellipsis',
    {
      name: 'subtitle',
      values: [
        undefined,
        'This is a very long subtitle that will not fit a single line',
      ],
    },
  ],
  skipUndefinedValue: true,
  storyName: 'ellipsis',
};

export const runTests = (
  { themeName, testWithTheme } = { testWithTheme: i => i },
) => {
  options.themeName = themeName;
  options.testWithTheme = testWithTheme;
  storyOfAllPermutations(Story, ListItemAction, options);

  ellipsisOptions.themeName = themeName;
  ellipsisOptions.testWithTheme = testWithTheme;
  storyOfAllPermutations(EllipsisStory, ListItemAction, ellipsisOptions);

  storiesOf(`${themeName ? `${themeName}|` : ''}ListItemAction`, module).add(
    'builder',
    () => (
      <DropdownLayout
        visible
        selectedId={1}
        options={[
          listItemActionBuilder({
            id: 0,
            title: 'option 1',
          }),
          listItemActionBuilder({
            id: 1,
            title: 'option 2',
          }),
          listItemActionBuilder({
            id: 2,
            title: 'option 3',
          }),
        ]}
      />
    ),
  );
};
