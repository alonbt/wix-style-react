import React from 'react';
import { storiesOf } from '@storybook/react';
import ModalSelectorLayout from '../index';

const ITEMS = ' '
  .repeat(50)
  .split(' ')
  .map(i => ({
    id: i,
    title: `Title ${i}`,
    subtitle: `Subtitle ${i}`,
    extraText: `Extra Text ${i}`,
    disabled: !(i % 2),
    image: (
      <div style={{ width: '100%', height: '100%', background: '#bada55' }} />
    ),
  }));

storiesOf('ModalSelectorLayout', module).add('default', () => (
  <ModalSelectorLayout
    size="large"
    color="white"
    text="Wubba Lubba Dub Dub"
    height="540px"
    itemsPerPage={4}
    imageSize="large"
    withSearch
    dataSource={() =>
      Promise.resolve({
        items: ITEMS,
        totalCount: ITEMS.length,
      })
    }
    title={ModalSelectorLayout.defaultProps.title}
    subtitle="A list of items go below"
  />
));
