import { BaseDriver } from 'wix-ui-test-utils/driver-factory';
import { InputDriver } from '../Input/Input.driver';
import { CalendarDriver } from '../Calendar/Calendar.driver';

export interface DatePickerDriver extends BaseDriver {
  driver: {
    exists: () => boolean;
    open: () => ReturnType<InputDriver['focus']>;
  };
  inputDriver: InputDriver;
  calendarDriver: CalendarDriver;
}
