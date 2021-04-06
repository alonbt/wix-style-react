import { BaseUniDriver } from 'wix-ui-test-utils/unidriver';
import { InputUniDriver } from '../Input/Input.uni.driver';
import { CalendarUniDriver } from '../Calendar/Calendar.uni.driver';

export interface DatePickerUniDriver extends BaseUniDriver {
  driver: {
    exists: () => boolean;
    open: () => ReturnType<InputUniDriver['focus']>;
    getWidth: () => string;
  };
  inputDriver: InputUniDriver;
  calendarDriver: CalendarUniDriver;
}
