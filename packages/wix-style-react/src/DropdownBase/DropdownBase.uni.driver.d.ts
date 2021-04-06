import * as React from 'react';
import { BaseUniDriver } from 'wix-ui-test-utils/base-driver';

export interface DropdownBaseUniDriver extends BaseUniDriver {
  clickTargetElement: (dataHook: string) => Promise<void>;
  hoverTargetElement: (dataHook: string) => Promise<void>;
  isDropdownShown: () => Promise<boolean>;
  selectOption: (index: string | number) => Promise<void>;
  clickOutside: () => boolean;
  optionsCount: () => Promise<number>;
  mouseEnter: () => Promise<void>;
  mouseLeave: () => Promise<void>;
  optionContentAt: (id: number) => Promise<React.ReactNode | string | null>;
  getSelectedOptionId: () => Promise<string | null>;
}
