import { BaseDriver } from 'wix-ui-test-utils/driver-factory';

export interface SliderDriver extends BaseDriver {
  isDotSelected: (value: number) => boolean;
  numOfSliderDots: () => number;
  numOfSliderHandles: () => number;
  numOfSliderMarksLabels: () => number;
  getToolTipValue: () => string;
  hoverHandle: (payload: { handleIndex: number }) => void;
  unHoverHandle: (payload: { handleIndex: number }) => void;
  isDisabled: () => boolean;
}
