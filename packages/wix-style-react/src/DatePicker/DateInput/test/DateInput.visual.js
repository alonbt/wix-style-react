import React from 'react';
import { storiesOf } from '@storybook/react';

import Input from '../../../Input';
import DateInput from '../index';

const defaultProps = {
  value: new Date(0),
};

const tests = [
  {
    describe: 'DateInput',
    its: [
      {
        it: 'variations',
        story: () => (
          <div>
            <br />
            <h2>Default DateInput</h2>
            <DateInput {...defaultProps} />
            <br />
            <h2>DD/MM/YY Format</h2>
            <DateInput dateFormat="DD/MM/YY" {...defaultProps} />
            <br />
            <h2>HH:mm:SS Format</h2>
            <DateInput dateFormat="HH:mm:SS" {...defaultProps} />
            <br />
            <h2>Function Format (date.toISOString)</h2>
            <DateInput
              dateFormat={date => date.toISOString()}
              {...defaultProps}
            />
            <br />
            <h2>With prefix</h2>
            <DateInput
              {...defaultProps}
              prefix={<Input.Affix>#</Input.Affix>}
            />
            <br />
            <h2>Disabled</h2>
            <DateInput {...defaultProps} disabled />
          </div>
        ),
      },
      {
        it: 'dateFormatV2',
        story: () => (
          <div>
            <br />
            <h2>DD/MM/YY Format V2</h2>
            <DateInput dateFormatV2="dd/LL/yy" {...defaultProps} />
            <br />
            <h2>HH:mm:SS Format V2</h2>
            <DateInput dateFormatV2="HH:mm:SS" {...defaultProps} />
            <br />
            <h2>Function Format V2 (date.toISOString)</h2>
            <DateInput
              dateFormatV2={date => date.toISOString()}
              {...defaultProps}
            />
          </div>
        ),
      },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, story }) => {
    storiesOf(describe, module).add(it, story);
  });
});
