import * as React from 'react';

export interface StarsRatingBarProps {
  dataHook?: string;
  className?: string;
  size?: starRatingBarSize;
  readOnly?: boolean;
  descriptionValues?: [string, string, string, string, string];
  value: starRatingBarValue;
  onChange?: (rate: number) => void;
}

export default class StarsRatingBar extends React.PureComponent<StarsRatingBarProps> {}

export type starRatingBarSize = 'tiny' | 'small' | 'medium' | 'large';
export type starRatingBarValue = 0 | 1 | 2 | 3 | 4 | 5;
