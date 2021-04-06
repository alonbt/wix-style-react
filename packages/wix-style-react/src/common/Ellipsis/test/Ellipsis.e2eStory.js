import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';

import Ellipsis, { extractEllipsisProps } from '..';
import Box from '../../../Box';
import Input from '../../../Input';
import { Category } from '../../../../stories/storiesHierarchy';

const MyText = React.forwardRef((props, ref) => (
  <span ref={ref} {...props} data-hook="text-element" />
));

const MyTextWithEllipsis = props => {
  const { ellipsisProps, componentProps } = extractEllipsisProps(props);
  return (
    <Ellipsis
      {...ellipsisProps}
      render={({ ref, ellipsisClasses }) => (
        <MyText
          {...componentProps}
          ref={ref}
          className={ellipsisClasses(props.className)}
        />
      )}
    />
  );
};

storiesOf(Category.INTERNAL + '/Ellipsis', module).add('with ellipsis', () => {
  return (
    <Box margin="150px" width="50px" dataHook="wrapper-element">
      <MyTextWithEllipsis ellipsis className="my-class">
        Hello World
      </MyTextWithEllipsis>
    </Box>
  );
});

storiesOf(Category.INTERNAL + '/Ellipsis', module).add(
  'without ellipsis',
  () => {
    return (
      <Box margin="150px" width="50px" dataHook="wrapper-element">
        <MyTextWithEllipsis className="my-class">
          Hello World
        </MyTextWithEllipsis>
      </Box>
    );
  },
);

storiesOf(Category.INTERNAL + '/Ellipsis', module).add(
  'with dynamic text',
  () => {
    const [inputValue, setInputValue] = useState('Hello World');
    return (
      <Box margin="150px" width="50px" dataHook="wrapper-element">
        <MyTextWithEllipsis ellipsis className="my-class">
          {inputValue}
        </MyTextWithEllipsis>
        <Input
          value={inputValue}
          onChange={({ target: { value } }) => setInputValue(value)}
          dataHook="input-element"
        />
      </Box>
    );
  },
);
