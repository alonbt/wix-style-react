import { BaseUniDriver } from 'wix-ui-test-utils/base-driver';
import { DropdownLayoutUniDriver } from '../DropdownLayout/DropdownLayout.uni.driver';
import { CalendarUniDriver } from '../Calendar/Calendar.uni.driver';

export interface CalendarPanelUniDriver extends BaseUniDriver {
  calendarDriver: () => Promise<CalendarUniDriver>;
  presetsDropdownLayoutDriver: () => DropdownLayoutUniDriver;
  isDropdownExists: () => Promise<boolean>;
  findByDataHook: (dataHook: string) => Promise<boolean>;
}
