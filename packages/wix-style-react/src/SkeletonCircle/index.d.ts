import * as React from 'react';
import { BoxProps } from '../Box';

export interface SkeletonCircleProps {
  dataHook?: string;
  className?: string;
  diameter?: BoxProps['width'];
  margin?: BoxProps['margin'];
  marginTop?: BoxProps['marginTop'];
  marginRight?: BoxProps['marginRight'];
  marginBottom?: BoxProps['marginBottom'];
  marginLeft?: BoxProps['marginLeft'];
}

export default class SkeletonCircle extends React.PureComponent<
  SkeletonCircleProps
> {}
