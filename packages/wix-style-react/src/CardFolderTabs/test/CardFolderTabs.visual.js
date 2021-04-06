import React from 'react';
import { storiesOf } from '@storybook/react';
import CardFolderTabs from '../CardFolderTabs';

const commonProps = {
  children: [
    <CardFolderTabs.Tab id="1" name="Simple tab">
      <div
        style={{ height: '250px', width: '500px', backgroundColor: '#eee' }}
      />
    </CardFolderTabs.Tab>,
    <CardFolderTabs.Tab id="2" name="Long name tab">
      <div />
    </CardFolderTabs.Tab>,
    <CardFolderTabs.Tab id="3" name="Disabled tab" disabled>
      <div />
    </CardFolderTabs.Tab>,
  ],
};

const tests = [
  {
    describe: 'sanity',
    its: [
      {
        it: 'default',
        props: {
          activeId: '1',
        },
      },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(
      `${CardFolderTabs.displayName}${describe ? '/' + describe : ''}`,
      module,
    ).add(it, () => <CardFolderTabs {...commonProps} {...props} />);
  });
});
