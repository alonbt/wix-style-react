import React from 'react';
import { storiesOf } from '@storybook/react';
import GooglePreview from '..';

const defaultProps = {
  title: 'Site Name | a title of your site',
  previewUrl: 'www.site-name.com',
  description: 'A short description for a site',
};
const longExampleText =
  'The meta description is an HTML attribute that provides a brief summary of a web page. Search engines such as Google often display the meta description in search results, which can influence click-through rates.';

const tests = [
  {
    describe: 'skin',
    its: [
      {
        it: 'skin light',
        props: {
          skin: 'light',
        },
      },
      {
        it: 'skin transparent',
        props: {
          skin: 'transparent',
        },
      },
    ],
  },
  {
    describe: 'title',
    its: [
      {
        it: 'no title',
        props: {
          title: '',
        },
      },
      {
        it: 'one line',
        props: {
          title: longExampleText,
        },
        componentWrapper: ({ children }) => (
          <div style={{ width: '340px' }}>{children}</div>
        ),
      },
      {
        it: 'multiline',
        props: {
          titleMaxLines: 3,
          title: longExampleText,
        },
        componentWrapper: ({ children }) => (
          <div style={{ width: '340px' }}>{children}</div>
        ),
      },
    ],
  },
  {
    describe: 'description',
    its: [
      {
        it: 'no description',
        props: {
          description: '',
        },
      },
      {
        it: 'multiline',
        props: {
          description:
            'a short description for a site a short description for a site a short description for a site a short description for a site a short description for a site a short description for a site a short description for a site a short description for a site',
        },
        componentWrapper: ({ children }) => (
          <div style={{ width: '340px' }}>{children}</div>
        ),
      },
      {
        it: 'multiline - 4 lines',
        props: {
          descriptionMaxLines: 4,
          description: longExampleText,
        },
        componentWrapper: ({ children }) => (
          <div style={{ width: '340px' }}>{children}</div>
        ),
      },
    ],
  },
  {
    describe: 'url',
    its: [
      {
        it: 'ellipsed url',
        props: {
          previewUrl: 'long url should be ellipsed '.repeat(20),
        },
      },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props, componentWrapper }) => {
    storiesOf(`GooglePreview${describe ? '/' + describe : ''}`, module).add(
      it,
      () => {
        const component = <GooglePreview {...defaultProps} {...props} />;
        const ComponentWrapper = componentWrapper;
        return ComponentWrapper ? (
          <ComponentWrapper>{component}</ComponentWrapper>
        ) : (
          component
        );
      },
    );
  });
});
