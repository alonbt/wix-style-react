import React from 'react';
import { storiesOf } from '@storybook/react';
import SelectableAccordion from '../SelectableAccordion';
import { TYPES, VERTICAL_PADDING } from '../constants';
import WixStyleReactProvider from '../../WixStyleReactProvider';

const types = Object.values(TYPES);
const verticalPaddingOptions = Object.values(VERTICAL_PADDING);

const items = [
  { title: 'Title1', content: 'Content1' },
  { title: 'Title2', content: 'Content2' },
  { title: 'Title3', content: 'Content3' },
];

const commonProps = { items };

const tests = [
  {
    describe: 'Sanity',
    its: [
      { it: 'default', props: {} },
      {
        it: 'initiallyOpen',
        props: {
          items: [
            { title: 'Title1', content: 'Content1', initiallyOpen: true },
            { title: 'Title2', content: 'Content2' },
          ],
        },
      },
    ],
  },
  {
    describe: 'type',
    its: types.map(type => ({ it: type, props: { type } })),
  },
  {
    describe: 'verticalPadding',
    its: verticalPaddingOptions.map(verticalPadding => ({
      it: verticalPadding,
      props: { verticalPadding },
    })),
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(
      `${SelectableAccordion.displayName}${describe ? '/' + describe : ''}`,
      module,
    ).add(it, () => <SelectableAccordion {...commonProps} {...props} />);
  });
});

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(
      `Layout And Spacing| ${SelectableAccordion.displayName}/${describe}`,
      module,
    ).add(it, () => (
      <WixStyleReactProvider
        features={{ reducedSpacingAndImprovedLayout: true }}
      >
        <SelectableAccordion {...commonProps} {...props} />
      </WixStyleReactProvider>
    ));
  });
});
