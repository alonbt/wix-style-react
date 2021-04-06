import React from 'react';
import { storiesOf } from '@storybook/react';
import MarketingPageLayoutContent from '../MarketingPageLayoutContent';
import { size } from '../constants';
import { RTLWrapper } from '../../../stories/utils/RTLWrapper';

const sizes = Object.values(size);

const commonProps = {
  overline: 'overline',
  title: 'Marketing Page Title',
  subtitle: 'Subtitle text',
  content: (
    <div>
      <div>First Feature</div> <div>Second Feature</div>
      <div>Third Feature</div>
    </div>
  ),
  actions: <button>Main Action</button>,
};

const tests = [
  {
    describe: 'sanity',
    its: [
      {
        it: 'default',
        props: {},
      },
      {
        it: 'no overline',
        props: {
          ...commonProps,
          overline: '',
        },
      },
      {
        it: 'no title',
        props: {
          ...commonProps,
          title: '',
        },
      },
      {
        it: 'no subtitle',
        props: {
          ...commonProps,
          subtitle: '',
        },
      },
      {
        it: 'no content',
        props: {
          ...commonProps,
          content: '',
        },
      },
      {
        it: 'no actions',
        props: {
          ...commonProps,
          actions: '',
        },
      },
    ],
  },
  {
    describe: 'sizes',
    its: sizes.map(size => ({ it: size, props: { size } })),
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(
      `${MarketingPageLayoutContent.displayName}${
        describe ? '/' + describe : ''
      }`,
      module,
    ).add(it, () => <MarketingPageLayoutContent {...commonProps} {...props} />);
  });
});

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(
      `${MarketingPageLayoutContent.displayName}${
        describe ? '/' + `RTL ${describe}` : ''
      }`,
      module,
    ).add(it, () => (
      <RTLWrapper rtl>
        <MarketingPageLayoutContent {...commonProps} {...props} />
      </RTLWrapper>
    ));
  });
});
