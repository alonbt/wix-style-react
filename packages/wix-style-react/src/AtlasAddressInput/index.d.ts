import * as React from 'react';
import { CommonAddress as Address } from '@wix/ambassador-wix-atlas-service-web/http';
import { AmbassadorHTTPError as AtlasError } from '@wix/ambassador/runtime/http';
import { AddressInputProps } from '../AddressInput';
import { OmitPolyfill } from '../common';
import { DropdownLayoutValueOption as Option } from '../DropdownLayout';
import { AtlasInitOptions } from '../providers/useAtlasClient';

export { Option, Address, AtlasError };

export type GetAddress = () => Promise<Address>;

export interface AtlasAddressInputProps
  extends OmitPolyfill<
      AddressInputProps,
      'options' | 'onSelect' | 'onManuallyInput'
    >,
    AtlasInitOptions {
  debounceMs?: number;
  debounceFn?: (callback: Function, debounceMs: number) => Function;
  optionLayout?: 'single-line' | 'double-line';
  optionPrefix?: React.ReactNode;
  optionSuffix?: React.ReactNode;
  onSelect?: (option: Option, getAddress: GetAddress) => void;
  onError?: (error: AtlasError) => any;
  selectOnSubmit?: boolean;
}

declare const AtlasAddressInput: React.FC<AtlasAddressInputProps>;
export default AtlasAddressInput;
