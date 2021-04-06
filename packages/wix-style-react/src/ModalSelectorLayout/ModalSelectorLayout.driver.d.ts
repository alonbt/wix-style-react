import { BaseDriver } from 'wix-ui-test-utils/driver-factory';
import { LoaderDriver } from '../Loader/Loader.driver';
import { SelectorDriver } from '../Selector/Selector.driver';
import { TextDriver } from '../Text/Text.driver';
import { CheckboxDriver } from '../Checkbox/Checkbox.driver';
import { SearchDriver } from '../Search/Search.driver';
import { buttonDriverFactory } from '../Button/Button.legacy.driver';

export interface ModalSelectorLayoutDriver extends BaseDriver {
  mainLoaderDriver: () => LoaderDriver;
  nextPageLoaderDriver: () => LoaderDriver;
  okButtonDriver: () => buttonDriverFactory;
  cancelButtonDriver: () => buttonDriverFactory;
  searchDriver: () => SearchDriver;
  subtitleTextDriver: () => TextDriver;
  getTitle: () => string;
  clickOnClose: () => void;
  showsEmptyState: () => boolean;
  getEmptyState: () => HTMLElement;
  showsNoResultsFoundState: () => boolean;
  getNoResultsFoundState: () => HTMLElement;
  listExists: () => boolean;
  numberOfItemsInList: () => number;
  getSelectorDriverAt: (i: number) => SelectorDriver;
  scrollDown: () => boolean;
  footerSelector: () => CheckboxDriver;
}
