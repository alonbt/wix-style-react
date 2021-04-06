import { BaseUniDriver } from 'wix-ui-test-utils/base-driver';
import { LoaderUniDriver } from '../Loader/Loader.uni.driver';
import { SelectorUniDriver } from '../Selector/Selector.uni.driver';
import { TextUniDriver } from '../Text/Text.uni.driver';
import { CheckboxUniDriver } from '../Checkbox/Checkbox.uni.driver';
import { SearchUniDriver } from '../Search/Search.uni.driver';
import { ButtonUniDriver } from '../Button/Button.uni.driver';

export interface ModalSelectorLayoutUniDriver extends BaseUniDriver {
  mainLoaderDriver: () => LoaderUniDriver;
  nextPageLoaderDriver: () => LoaderUniDriver;
  okButtonDriver: () => ButtonUniDriver;
  cancelButtonDriver: () => ButtonUniDriver;
  searchDriver: () => SearchUniDriver;
  subtitleTextDriver: () => TextUniDriver;
  getTitle: () => Promise<string>;
  clickOnClose: () => Promise<void>;
  showsEmptyState: () => Promise<boolean>;
  getEmptyState: () => Promise<HTMLElement>;
  showsNoResultsFoundState: () => Promise<boolean>;
  getNoResultsFoundState: () => Promise<HTMLElement>;
  listExists: () => Promise<boolean>;
  numberOfItemsInList: () => Promise<number>;
  getSelectorDriverAt: (i: number) => SelectorUniDriver;
  scrollDown: () => Promise<boolean>;
  footerSelector: () => CheckboxUniDriver;
}
