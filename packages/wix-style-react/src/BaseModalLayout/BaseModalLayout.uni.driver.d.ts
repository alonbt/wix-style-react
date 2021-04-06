import { BaseUniDriver } from 'wix-ui-test-utils/unidriver';
import { ButtonUniDriver } from '../Button/Button.uni.driver';

export interface BaseModalLayoutUniDriver extends BaseUniDriver {
  getTheme(): Promise<string>;
  clickCloseButton(): Promise<void>;
  clickHelpButton(): Promise<void>;
  childExists(dataHook: string): Promise<boolean>;
  getTitleText(): Promise<string>;
  getSubtitleText(): Promise<string>;
  getSecondaryButtonDriver(): Promise<ButtonUniDriver>;
  getPrimaryButtonDriver(): Promise<ButtonUniDriver>;
  getIllustrationSrc(): Promise<string>;
}

export const baseModalLayoutDriverFactory: (
  base: BaseUniDriver,
) => BaseModalLayoutUniDriver;
