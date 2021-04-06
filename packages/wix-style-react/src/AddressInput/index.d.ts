import * as React from 'react';
import {
  DropdownLayoutOption,
  DropdownLayoutValueOption,
} from '../DropdownLayout';
import { ManualInputFnSignature } from '../InputWithOptions';

export interface AddressInputProps {
  dataHook?: string;
  className?: string;
  clearButton?: boolean;
  initialValue?: string;
  value?: string;
  disabled?: boolean;
  onSelect?: (option: DropdownLayoutValueOption) => void;
  onManuallyInput?: ManualInputFnSignature;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  onClear?: () => void;
  options?: DropdownLayoutOption[];
  status?: 'loading' | 'error' | 'warning';
  statusMessage?: React.ReactNode;
  border?: 'standard' | 'round' | 'bottomLine';
  size?: 'small' | 'medium' | 'large';
  placeholder?: string;
  noResultsText?: React.ReactNode;
}

export default class AddressInput extends React.PureComponent<AddressInputProps> {}
