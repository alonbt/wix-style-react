import { BaseDriver } from 'wix-ui-test-utils/driver-factory';
import { DropdownLayoutDriver } from '../DropdownLayout/DropdownLayout.driver';
import { CalendarDriver } from '../Calendar/Calendar.driver';

export interface CalendarPanelDriver extends BaseDriver {
  exists: () => boolean;
  calendarDriver: () => CalendarDriver;
  presetsDropdownLayoutDriver: () => DropdownLayoutDriver;
  isDropdownExists: () => boolean;
  findByDataHook: (dataHook: string) => boolean;
}
