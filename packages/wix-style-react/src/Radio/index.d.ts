import * as React from 'react';
export type RadioAlignItems = 'top' | 'center';
export type OnChangeEvent = RadioProps['value'] & React.ChangeEvent;

export interface RadioProps {
  dataHook?: string;
  className?: string;
  checked?: boolean;
  disabled?: boolean;
  label?: React.ReactNode;
  id?: string;
  value?: string | number;
  name?: React.ReactNode;
  onChange?(event: OnChangeEvent): void;
  alignItems?: RadioAlignItems;
}

declare const Radio: React.FunctionComponent<RadioProps>;
export default Radio;
