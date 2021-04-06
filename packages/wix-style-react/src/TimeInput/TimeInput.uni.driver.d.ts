import * as React from 'react';
import { BaseUniDriver } from 'wix-ui-test-utils/base-driver';
import { StatusIndications } from '../common';

export interface TimeInputUniDriver extends BaseUniDriver {
  getValue: () => Promise<string>;
  isDisabled: () => Promise<boolean>;
  clickTickerUp: () => Promise<void>;
  clickTickerDown: () => Promise<void>;
  isAmPmIndicatorExist: () => Promise<boolean>;
  toggleAmPmIndicator: () => Promise<void>;
  getAmPmIndicatorText: () => Promise<string>;
  getCustomSuffix: () => Promise<string>;
  isRtl: () => Promise<boolean>;
  setValue: (text: string) => Promise<void>;
  blur: () => Promise<void>;
  isShowSeconds: () => Promise<boolean>;

  // Status
  hasStatus: (status: StatusIndications) => Promise<boolean>;
  getStatusMessage: () => Promise<string | null>;
}
