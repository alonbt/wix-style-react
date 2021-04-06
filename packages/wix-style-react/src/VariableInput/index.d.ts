import * as React from 'react';
import { StatusIndicatorState } from '../StatusIndicator';

export interface VariableInputProps {
  className?: string;
  dataHook?: string;
  disabled?: boolean;
  readOnly?: boolean;
  initialValue?: string;
  multiline?: boolean;
  onChange?: (value: string) => void;
  onSubmit?: (value: string) => void;
  onBlur?: (value: string) => void;
  onFocus?: (value: string) => void;
  status?: StatusIndicatorState;
  statusMessage?: React.ReactNode;
  placeholder?: string;
  rows?: number;
  size?: VariableInputSize;
  variableParser?: (value: string) => string | boolean;
  variableTemplate?: {
    prefix: string;
    suffix: string;
  };
}

export default class VariableInput extends React.PureComponent<VariableInputProps> {
  setValue(key: string): void;
  insertVariable(key: string): void;
}

export type VariableInputSize = 'small' | 'medium' | 'large';

export const SIZE: { [key in VariableInputSize]: VariableInputSize };
