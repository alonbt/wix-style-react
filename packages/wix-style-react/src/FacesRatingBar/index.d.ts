import * as React from 'react';

export interface FacesRatingBarProps {
  dataHook?: string;
  className?: string;
  readOnly?: boolean;
  descriptionValues?: [string, string, string, string, string];
  value: facesRatingBarValues;
  onChange?: (rating: number) => void;
}

export default class FacesRatingBar extends React.PureComponent<FacesRatingBarProps> {}

export type facesRatingBarValues = 0 | 1 | 2 | 3 | 4 | 5;
