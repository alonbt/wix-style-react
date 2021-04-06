import React from 'react';
import { storiesOf } from '@storybook/react';

import TextClassesExample from './TextClassesExample';
import HeadingClassesExample from './HeadingClassesExample';

const tests = [
  {
    describe: 'Typography',
    its: [
      {
        it: 'Text variations',
        story: () => {
          return (
            <>
              <h1>Typography text with classes</h1>
              <br />
              <div style={{ display: 'flex' }}>
                <TextClassesExample />
              </div>
            </>
          );
        },
      },
      {
        it: 'Heading variations',
        story: () => {
          return (
            <>
              <h1>Typography heading with classes</h1>
              <br />
              <div style={{ display: 'flex' }}>
                <HeadingClassesExample />
              </div>
            </>
          );
        },
      },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, story }) => {
    storiesOf(describe, module).add(it, story);
  });
});
