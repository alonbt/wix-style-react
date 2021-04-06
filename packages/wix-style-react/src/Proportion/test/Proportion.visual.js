import React from 'react';
import { storiesOf } from '@storybook/react';
import Proportion from '../Proportion';
import { PREDEFINED_RATIOS } from '../ratios';

const its = [
  {
    it: `custom '9.5 / 3'`,
    props: {
      aspectRatio: 9.5 / 3,
    },
  },
  ...Object.entries(PREDEFINED_RATIOS).map(([it, ratio]) => ({
    it,
    props: {
      aspectRatio: ratio,
    },
  })),
];

its.map(({ it, props }) =>
  storiesOf('Proportion', module).add(it, () => (
    <div>
      {it}
      <br />
      <Proportion {...props}>
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mM8Exv7FAAF8AJtZv8v8wAAAABJRU5ErkJggg== "
          width="100%"
          height="100%"
        />
      </Proportion>
    </div>
  )),
);
