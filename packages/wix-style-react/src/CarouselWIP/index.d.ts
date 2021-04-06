import * as React from 'react';
import { IconButtonSkin } from '../IconButton';

export type CarouselWIPControlsPosition =
  | 'sides'
  | 'overlay'
  | 'bottom'
  | 'none';
export type CarouselWIPSlidingType =
  | 'align-to-start'
  | 'reveal-one'
  | 'reveal-chunk';

export default class CarouselWIP extends React.Component<CarouselWIPProps> {}

export type CarouselWIPImage = Partial<HTMLImageElement> & { src: string };

export interface CarouselWIPProps {
  dataHook?: string;
  className?: string;
  images?: CarouselWIPImage[];
  imagesPosition?: React.CSSProperties['objectPosition'];
  imagesFit?: React.CSSProperties['objectFit'];
  buttonSkin?: IconButtonSkin;
  infinite?: boolean;
  autoplay?: boolean;
  dots?: boolean;
  variableWidth?: boolean;
  initialSlideIndex?: number;
  afterChange?: (currentSlide: number) => void;
  beforeChange?: (currentSlide: number, nextSlide: number) => void;
  controlsPosition?: CarouselWIPControlsPosition;
  controlsSize?: 'tiny' | 'small' | 'medium';
  controlsStartEnd?: 'disabled' | 'hidden';
  showControlsShadow?: boolean;
  slidingType?: CarouselWIPSlidingType;
  startEndOffset?: number;
}
