import * as React from 'react';
import { InputStatusError, InputProps } from '../Input';

export interface NoBorderInputProps extends InputProps {
  label?: string;
  status?: NoBorderInputStatus;
}

export default class NoBorderInput extends React.Component<NoBorderInputProps> {
  static StatusError: InputStatusError;
}

export type NoBorderInputStatus = NoBorderInputStatusError;
export type NoBorderInputStatusError = InputStatusError;
