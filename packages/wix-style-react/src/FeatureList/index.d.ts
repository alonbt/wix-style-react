import * as React from 'react';

export interface FeatureListProps {
  dataHook?: string;
  className?: string;
  cols?: number;
  features?: FeatureType[];
}

export default class FeatureList extends React.Component<FeatureListProps> {}

export type FeatureType = {
  image: React.ReactNode;
  title: string;
  text: string;
};
