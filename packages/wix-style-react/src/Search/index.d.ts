import * as React from 'react';
import { DropdownLayoutValueOption } from '../DropdownLayout';
import { InputWithOptionsProps } from '../InputWithOptions';

export interface SearchProps extends InputWithOptionsProps {
  expandable?: boolean;
  expandWidth?: string | number;
  predicate?: (option: DropdownLayoutValueOption) => boolean;
  debounceMs?: number;
}

export default class Search extends React.Component<SearchProps> {}
