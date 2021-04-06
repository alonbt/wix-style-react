import { BaseUniDriver } from 'wix-ui-test-utils/base-driver';

export interface SelectorListUniDriver extends BaseUniDriver {
  mainLoaderExists: () => Promise<boolean>;
  nextPageLoaderExists: () => Promise<boolean>;
  searchInputExists: () => Promise<boolean>;
  focusSearchInput: () => Promise<void>;
  enterSearchValue: (value: string) => Promise<void>;
  getSearchValue: () => Promise<string>;
  clickSearchInputClear: () => Promise<void>;
  toggleAllCheckboxExists: () => Promise<boolean>;
  isToggleAllCheckboxChecked: () => Promise<boolean>;
  getToggleAllCheckboxLabel: () => Promise<string>;
  clickToggleAllCheckbox: () => Promise<void>;
  showsEmptyState: () => Promise<boolean>;
  getEmptyState: () => Promise<HTMLElement>;
  showsNoResultsFoundState: () => Promise<boolean>;
  getNoResultsFoundState: () => Promise<HTMLElement>;
  listExists: () => Promise<boolean>;
  numberOfItemsInList: () => Promise<number>;
  toggleSelectorAt: (i: number) => Promise<void>;
  isSelectorCheckedAt: (i: number) => Promise<boolean>;
  isSelectorDisabledAt: (i: number) => Promise<boolean>;
  scrollDown: () => Promise<boolean>;
}
