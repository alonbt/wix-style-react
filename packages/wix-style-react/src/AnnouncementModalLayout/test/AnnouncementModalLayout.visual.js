import React from 'react';
import { storiesOf } from '@storybook/react';
import AnnouncementModalLayout from '../AnnouncementModalLayout';
import { BASE64_IMAGE } from './data/base64Image';
import WixStyleReactProvider from '../../WixStyleReactProvider';

const commonProps = {
  onCloseButtonClick: () => {},
  title: 'All Your Info In One Place',
  children: 'Meet your brand new General Info page.',
  primaryButtonText: 'Start Now',
  linkText: 'Learn More',
  illustration: <img src={BASE64_IMAGE} height={120} width={120} />,
};

const tests = [
  {
    describe: 'sanity',
    its: [
      {
        it: 'default',
        props: {},
      },
    ],
  },
  {
    describe: 'secondary button',
    its: [
      {
        it: 'with secondary button instead of link',
        props: {
          secondaryButtonText: 'Skip',
          linkText: false,
        },
      },
    ],
  },
  {
    describe: 'theme',
    its: [
      {
        it: 'premium',
        props: {
          theme: 'premium',
        },
      },
    ],
  },
  {
    describe: 'footnote',
    its: [
      {
        it: 'with footnote',
        props: {
          footnote: 'By sending an invite, you agree to the Wix Terms of Use',
        },
      },
    ],
  },
  {
    describe: 'layout',
    its: [
      {
        it: 'without title',
        props: {
          title: false,
        },
      },
    ],
  },
  {
    describe: 'layout',
    its: [
      {
        it: 'without children',
        props: {
          children: false,
        },
      },
    ],
  },
  {
    describe: 'layout',
    its: [
      {
        it: 'without illustration',
        props: {
          illustration: false,
        },
      },
    ],
  },
  {
    describe: 'layout',
    its: [
      {
        it: 'without actions',
        props: {
          primaryButtonText: '',
        },
      },
    ],
  },
  {
    describe: 'layout',
    its: [
      {
        it: 'without link',
        props: {
          linkText: '',
        },
      },
      {
        it: 'max height',
        props: {
          children: new Array(50).fill(commonProps.children).join(' '),
        },
      },
    ],
  },
  {
    describe: 'layout',
    its: [
      {
        it: 'with help button',
        props: {
          onHelpButtonClick: () => {},
        },
      },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(
      `AnnouncementModalLayout${describe ? '/' + describe : ''}`,
      module,
    ).add(it, () => <AnnouncementModalLayout {...commonProps} {...props} />);
  });
});

storiesOf(`Layout And Spacing| AnnouncementModalLayout`, module).add(
  'sanity',
  () => (
    <WixStyleReactProvider features={{ reducedSpacingAndImprovedLayout: true }}>
      <AnnouncementModalLayout {...commonProps} />
    </WixStyleReactProvider>
  ),
);
