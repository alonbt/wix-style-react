import React from 'react';
import { storiesOf } from '@storybook/react';
import Timeline from '../Timeline';
import TextButton from '../../TextButton';
import Time from 'wix-ui-icons-common/Time';

const commonProps = {
  // use for repeated props across the tests (e.g. {buttonText: 'example'})
};

const tests = [
  {
    describe: 'sanity', // prop name (e.g. size)
    its: [
      {
        it: 'simple', // prop variation (e.g. small)
        props: {
          items: [
            {
              label: 'simple text',
            },
            {
              label:
                'some long text some long text some long text some long text some long text some long text some long text some long text some long text some long text some long text some long text some long text some long text some long text some long text some long text some long text some long text some long text some long text some long text some long text some long text',
              suffix: 'suffix text',
            },
          ],
        },
      },
      {
        it: 'custom suffix', // prop variation (e.g. small)
        props: {
          items: [
            {
              label: 'simple text',
            },
            {
              label: 'simple text',
              suffix: <TextButton>suffix link button</TextButton>,
            },
          ],
        },
      },
      {
        it: 'label action', // prop variation (e.g. small)
        props: {
          items: [
            {
              label: 'simple text',
            },
            {
              label: 'simple text',
              labelAction: <TextButton>label action button</TextButton>,
            },
          ],
        },
      },
      {
        it: 'custom prefix', // prop variation (e.g. small)
        props: {
          items: [
            {
              label: 'simple text',
            },
            {
              label: 'simple text',
              customPrefix: <Time />,
            },
          ],
        },
      },
      {
        it: 'no suffix', // prop variation (e.g. small)
        props: {
          items: [
            {
              label: 'simple text',
            },
            {
              label: 'some long text '.repeat(24),
            },
          ],
        },
      },
      {
        it: 'gap between items', // prop variation (e.g. small)
        props: {
          gap: '12px',
          items: [
            {
              label: 'simple text',
            },
            {
              label: 'simple text',
            },
          ],
        },
      },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(
      `${Timeline.displayName}${describe ? '/' + describe : ''}`,
      module,
    ).add(it, () => <Timeline {...commonProps} {...props} />);
  });
});
