import * as React from 'react';
import { IconButtonSkin } from '../IconButton';

export type CarouselControlsPosition = 'sides' | 'overlay' | 'bottom' | 'none';

export default class Carousel extends React.Component<CarouselProps> {}

export type CarouselImage = Partial<HTMLImageElement> & { src: string };

export interface CarouselProps {
  dataHook?: string;
  className?: string;
  images?: CarouselImage[];
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
  controlsPosition?: CarouselControlsPosition;
  controlsSize?: 'tiny' | 'small' | 'medium';
  controlsStartEnd?: 'disabled' | 'hidden';
  showControlsShadow?: boolean;
}
