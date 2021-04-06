import { internalComponentsSymbols } from '../symbols';
import {
  internalComponentsNames,
  layoutComponentsNames,
  sharedComponentsNames,
} from '../components';

/**
 * Symbol => Component IC
 */
export const internalComponentsSymbolsToComponents = {
  [internalComponentsSymbols.dropdownLayout]: [
    internalComponentsNames.DropdownLayout,
  ],

  [internalComponentsSymbols.tagList]: [internalComponentsNames.TagList],
  [internalComponentsSymbols.listItemAction]: [
    internalComponentsNames.ListItemAction,
  ],
  [internalComponentsSymbols.listItemEditable]: [
    internalComponentsNames.ListItemEditable,
  ],
  [internalComponentsSymbols.listItemSection]: [
    internalComponentsNames.ListItemSection,
  ],
  [internalComponentsSymbols.listItemSelect]: [
    internalComponentsNames.ListItemSelect,
  ],

  [internalComponentsSymbols.cardFolderTabs]: [
    internalComponentsNames.CardFolderTabs,
    layoutComponentsNames.Card,
    layoutComponentsNames.CardContent,
    sharedComponentsNames.EmptyState,
  ],

  [internalComponentsSymbols.fillButton]: [internalComponentsNames.FillButton],

  [internalComponentsSymbols.fillPreview]: [
    internalComponentsNames.FillPreview,
  ],

  [internalComponentsSymbols.radio]: [internalComponentsNames.Radio],
};
