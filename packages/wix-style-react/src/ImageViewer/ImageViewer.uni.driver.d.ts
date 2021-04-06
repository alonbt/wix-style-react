import { BaseUniDriver } from 'wix-ui-test-utils/base-driver';
import { StatusIndications } from '../common';

export interface ImageViewerUniDriver extends BaseUniDriver {
  updateExists: () => Promise<boolean>;
  updateButtonExists: () => Promise<boolean>;
  removeButtonExists: () => Promise<boolean>;
  clickAdd: () => Promise<void>;
  clickUpdate: () => Promise<void>;
  clickRemove: () => Promise<void>;
  getContainerStyles: () => Promise<string | null>;
  getAddTooltipContent: () => Promise<string>;
  getUpdateTooltipContent: () => Promise<string>;
  getRemoveTooltipContent: () => Promise<string>;
  isDisabled: () => Promise<boolean>;
  isAddItemVisible: () => Promise<boolean>;
  isLoaderVisible: () => Promise<boolean>;
  isImageLoaded: () => Promise<boolean>;
  isImageVisible: Promise<boolean>;
  isPreviousImageVisible: () => Promise<boolean>;
  getImageUrl: () => Promise<string | null>;
  getPreviousImageUrl: () => Promise<string | null>;
  hover: () => Promise<void>;

  // Status
  hasStatus: (status: StatusIndications) => Promise<boolean>;
  getStatusMessage: () => Promise<string | null>;
}
