import { BaseDriver } from 'wix-ui-test-utils/driver-factory';
import { StatusIndications } from '../common';

export interface ImageViewerDriver<T> extends BaseDriver {
  getElement: () => T;
  element: () => T;
  updateExists: () => boolean;
  updateButtonExists: () => boolean;
  removeButtonExists: () => boolean;
  clickAdd: () => void;
  clickUpdate: () => void;
  clickRemove: () => void;
  getContainerStyles: () => string | null;
  getAddTooltipContent: () => string;
  getUpdateTooltipContent: () => string;
  getRemoveTooltipContent: () => string;
  isDisabled: () => boolean;
  isAddItemVisible: () => boolean;
  isLoaderVisible: () => boolean;
  isImageLoaded: () => boolean;
  isImageVisible: () => boolean;
  isPreviousImageVisible: () => boolean;
  getImageUrl: () => string | null;
  getPreviousImageUrl: () => string | null;
  hover: () => void;

  // Status
  hasStatus: (status: StatusIndications) => boolean;
  getStatusMessage: () => string | null;
}
