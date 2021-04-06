import { inputsSymbols } from '../symbols';
import {
  inputsComponentsNames as componentsNames,
  sharedComponentsNames,
  buttonsComponentsNames,
} from '../components';

/**
 * Symbol => Component 2
 */
export const inputsSymbolsToComponents = {
  [inputsSymbols.textInput]: [
    sharedComponentsNames.FormField,
    componentsNames.Input,
  ],

  [inputsSymbols.textArea]: [
    sharedComponentsNames.FormField,
    componentsNames.InputArea,
  ],

  [inputsSymbols.richTextArea]: [
    sharedComponentsNames.FormField,
    componentsNames.RichTextInputArea,
  ],

  [inputsSymbols.numberInput]: [
    sharedComponentsNames.FormField,
    componentsNames.NumberInput,
  ],

  [inputsSymbols.numberRangeInput]: [],

  [inputsSymbols.incrementerInput]: [],

  [inputsSymbols.durationInput]: [],

  [inputsSymbols.timeInput]: [
    sharedComponentsNames.FormField,
    componentsNames.TimeInput,
  ],

  [inputsSymbols.dateRangeInput]: [],

  [inputsSymbols.colorInput]: [
    sharedComponentsNames.FormField,
    componentsNames.ColorInput,
  ],

  [inputsSymbols.tagsInput]: [
    sharedComponentsNames.FormField,
    componentsNames.MultiSelect,
    sharedComponentsNames.Tag,
  ],

  [inputsSymbols.googleAddressInput]: [componentsNames.GoogleAddressInput],

  [inputsSymbols.searchInput]: [componentsNames.Search],

  [inputsSymbols.mediaInput]: [
    sharedComponentsNames.FormField,
    componentsNames.ImageViewer,
  ],
  [inputsSymbols.variableInput]: [
    sharedComponentsNames.FormField,
    componentsNames.VariableInput,
    sharedComponentsNames.Tag,
    buttonsComponentsNames.TextButton,
  ],
};
