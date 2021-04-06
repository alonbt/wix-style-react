import { BaseUniDriver } from 'wix-ui-test-utils/unidriver';

export interface SidePanelUniDriver extends BaseUniDriver {
  /** Click close the button */
  clickClose(): Promise<void>;
  /** Get title text */
  getTitleText(): Promise<string>;
  /** Get tooltip text */
  getTooltipContent(): Promise<string>;
  /** Check if divider exists */
  isHeaderDividerExists(): Promise<boolean>;
  /** Check if close button exists */
  isCloseButtonExists(): Promise<boolean>;
  /** Check if divider exists */
  isFooterDividerExists(): Promise<boolean>;
}
