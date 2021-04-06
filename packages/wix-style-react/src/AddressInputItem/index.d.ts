import * as React from 'react';
import { DropdownLayoutValueOption } from '../DropdownLayout';

export interface AddressInputItemProps {
  dataHook?: string;
  className?: string;
  mainLabel?: string;
  secondaryLabel?: string;
  optionLayout?: AddressInputItemLayout;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  selected?: boolean;
  disabled?: boolean;
  highlighted?: boolean;
  onClick?: React.MouseEventHandler<HTMLElement>;
}

export type AddressInputItemLayout = 'single-line' | 'double-line';

export const addressInputItemBuilder: (data: {
  id: string | number;
  className?: string;
  prefix?: React.ReactNode;
  mainLabel?: string;
  secondaryLabel?: string;
  suffix?: React.ReactNode;
  disabled?: boolean;
  dataHook?: string;
  optionLayout?: AddressInputItemLayout;
  displayLabel?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
}) => DropdownLayoutValueOption;

export default class AddressInputItem extends React.PureComponent<AddressInputItemProps> {}
