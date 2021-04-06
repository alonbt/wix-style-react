import React from 'react';
import PropTypes from 'prop-types';

import { Text } from 'wix-style-react';

/** Capitalize first character */
export function capitalize(str) {
  if (!str) {
    return undefined;
  }
  return str[0].toUpperCase() + str.substring(1);
}

export function propsToJsxString(props) {
  return Object.entries(props).reduce((acc, entry) => {
    const propName = entry[0];
    const propValue = entry[1];

    if (propName !== 'children') {
      return `${acc} ${propName}="${propValue}"`;
    } else {
      return acc;
    }
  }, '');
}

export const ExampleWrapper = ({ children, label }) => (
  <div style={{ padding: '10px' }}>
    {children}
    <Text size="tiny" weight="thin" light secondary>
      {label}
    </Text>
  </div>
);
ExampleWrapper.propTypes = {
  children: PropTypes.any,
  label: PropTypes.string,
};
