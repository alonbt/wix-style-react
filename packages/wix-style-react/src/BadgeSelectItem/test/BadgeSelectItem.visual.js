import React from 'react';
import { storiesOf } from '@storybook/react';
import BadgeSelectItem, { badgeSelectItemBuilder } from '../BadgeSelectItem';
import { SKINS } from '../constants';
import DropdownLayout from '../../DropdownLayout';
import Box from '../../Box';
import Badge from '../../Badge';

const skins = Object.keys(SKINS);

const tests = [
  {
    describe: 'skins',
    its: skins.map((skin, idx) => ({
      it: skin,
      props: { id: idx, skin, text: skin },
    })),
  },
  {
    describe: 'badge select state',
    its: [
      {
        it: 'default',
        props: {
          id: 1,
          skin: 'standard',
          text: 'standard',
          subtitle: `subtitle text`,
        },
      },
      {
        it: 'selected',
        props: {
          id: 1,
          skin: 'standard',
          text: 'standard',
          selected: true,
          subtitle: `subtitle text`,
        },
      },
      {
        it: 'highlighted',
        props: {
          id: 1,
          skin: 'standard',
          text: 'standard',
          highlighted: true,
          subtitle: `subtitle text`,
        },
      },
      {
        it: 'selected and highlighted',
        props: {
          id: 1,
          skin: 'standard',
          text: 'standard',
          selected: true,
          highlighted: true,
          subtitle: `subtitle text`,
        },
      },
      {
        it: 'disabled',
        props: {
          id: 1,
          skin: 'standard',
          text: 'standard',
          disabled: true,
          subtitle: `subtitle text`,
        },
      },
    ],
  },
  {
    describe: 'badge select sizes',
    its: [
      {
        it: 'medium - default',
        props: {
          id: 1,
          skin: 'standard',
          text: 'standard',
          size: 'medium',
          subtitle: `subtitle text`,
        },
      },
      {
        it: 'small',
        props: {
          id: 2,
          text: 'standard',
          skin: 'standard',
          subtitle: `subtitle text`,
          size: 'small',
        },
      },
    ],
  },
  {
    describe: 'suffix',
    its: [
      {
        it: 'no suffix - default',
        props: {
          id: 1,
          skin: 'standard',
          text: 'standard',
          subtitle: `subtitle text`,
        },
      },
      {
        it: 'text suffix',
        props: {
          id: 2,
          text: 'standard',
          subtitle: `subtitle text`,
          size: 'small',
          suffix: 'suffix',
        },
      },
      {
        it: 'node suffix',
        props: {
          id: 3,
          text: 'standard',
          subtitle: `subtitle text`,
          suffix: <div style={{ backgroundColor: 'lightblue' }}>suffix</div>,
        },
      },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(
      `BadgeSelectItem${describe ? '/' + describe : ''}`,
      module,
    ).add(it, () => <BadgeSelectItem {...props} />);
  });
});

storiesOf('BadgeSelectItem', module).add('builder', () => (
  <DropdownLayout
    visible
    selectedId={0}
    options={[
      badgeSelectItemBuilder({
        id: 0,
        skin: 'standard',
        text: 'standard',
        subtitle: 'subtitle text',
      }),
      badgeSelectItemBuilder({
        id: 1,
        skin: 'danger',
        text: 'danger',
        subtitle: 'subtitle text',
      }),
      badgeSelectItemBuilder({
        id: 2,
        skin: 'warningLight',
        text: 'disabled option title',
        subtitle: `disabled option subtitle`,
        disabled: true,
      }),
    ]}
  />
));
