import { pickerSymbols } from '../symbols';
import {
  pickerComponentsNames as componentsNames,
  modalsComponentsNames,
} from '../components';

/**
 * Symbol => Component 10
 */
export const pickerSymbolsToComponents = {
  [pickerSymbols.editableSelector]: [componentsNames.EditableSelector],

  [pickerSymbols.modalSelector]: [
    componentsNames.SelectorList,
    modalsComponentsNames.CustomModalLayout,
  ],

  [pickerSymbols.colorPicker]: [
    componentsNames.ColorPicker,
    componentsNames.Swatches,
  ],

  [pickerSymbols.calendar]: [componentsNames.Calendar],

  [pickerSymbols.calendarPanel]: [
    componentsNames.CalendarPanel,
    componentsNames.CalendarPanelFooter,
  ],

  [pickerSymbols.swatches]: [componentsNames.Swatches],
};
