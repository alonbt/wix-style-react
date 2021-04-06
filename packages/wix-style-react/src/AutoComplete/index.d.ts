import * as React from 'react';
import InputWithOptions, {
  ManualInputFnSignature,
  OnSelectFnSignature,
  InputWithOptionsProps,
} from '../InputWithOptions';
import { DropdownLayoutValueOption } from '../DropdownLayout';

export interface AutoCompleteProps extends InputWithOptionsProps {
  predicate?: (option: DropdownLayoutValueOption) => boolean;
  emptyStateMessage?: React.ReactNode;
}

export default class AutoComplete extends InputWithOptions<
  ManualInputFnSignature,
  OnSelectFnSignature,
  AutoCompleteProps
> {}
