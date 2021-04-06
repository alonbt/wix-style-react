import React from 'react';
import { storiesOf } from '@storybook/react';
import ComposerHeader from '../ComposerHeader';
import TextButton from '../../TextButton';
import Button from '../../Button';

const generateActions = props => (
  <ComposerHeader.Actions {...props}>
    <TextButton skin="premium">Upgrade</TextButton>
  </ComposerHeader.Actions>
);

const generateMainActions = props => (
  <ComposerHeader.MainActions {...props}>
    <Button skin="inverted">Preview</Button>
    <Button>Next</Button>
  </ComposerHeader.MainActions>
);

const commonProps = {
  // use for repeated props across the tests (e.g. {buttonText: 'example'})
};

const tests = [
  {
    describe: 'Structure',
    its: [
      {
        it: 'back button',
        props: {
          backButtonValue: 'Back to Social Posts',
        },
      },
      {
        it: 'actions',
        props: {
          children: [generateActions({ key: 0 }), generateActions({ key: 1 })],
        },
      },
      {
        it: 'main actions',
        props: {
          children: generateMainActions(),
        },
      },
      {
        it: 'all together',
        props: {
          backButtonValue: 'Back to Social Posts',
          children: [
            generateActions({ key: 0 }),
            generateActions({ key: 1, justifyContent: 'flex-end' }),
            generateMainActions(),
          ],
        },
      },
      {
        it: 'save status',
        props: {
          backButtonValue: 'Back to Social Posts',
          saveStatusValue: 'Saving...',
          children: [
            generateActions({ key: 0 }),
            generateActions({ key: 1, justifyContent: 'flex-end' }),
            generateMainActions(),
          ],
        },
      },
    ],
  },
  {
    describe: 'Custom Structure',
    its: [
      {
        it: 'multiple actions',
        props: {
          backButtonValue: 'Back to Social Posts',
          saveStatusValue: 'Saving...',
          children: [
            generateActions({ key: 0 }),
            generateActions({ key: 1 }),
            generateActions({ key: 2 }),
            generateActions({ key: 3, justifyContent: 'flex-end' }),
            generateMainActions(),
          ],
        },
      },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(`ComposerHeader${describe ? '/' + describe : ''}`, module).add(
      it,
      () => <ComposerHeader {...commonProps} {...props} />,
    );
  });
});
