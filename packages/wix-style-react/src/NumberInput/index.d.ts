import * as React from 'react';

import { OmitPolyfill } from '../common';
import { InputProps } from '../Input';

export type NumberInputProps = OmitPolyfill<InputProps, 'onChange'> & {
  strict?: boolean;
  hideStepper?: boolean;
  onChange?: (value: number | null) => void;
};

export default class NumberInput extends React.PureComponent<NumberInputProps> {}
