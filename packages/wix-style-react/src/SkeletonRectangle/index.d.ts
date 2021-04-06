import * as React from 'react';
import { BoxProps } from '../Box';

export interface SkeletonRectangleProps {
  dataHook?: string;
  className?: string;
  height?: BoxProps['height'];
  width?: BoxProps['width'];
  margin?: BoxProps['margin'];
  marginTop?: BoxProps['marginTop'];
  marginRight?: BoxProps['marginRight'];
  marginBottom?: BoxProps['marginBottom'];
  marginLeft?: BoxProps['marginLeft'];
}

export default class SkeletonRectangle extends React.PureComponent<
  SkeletonRectangleProps
> {}
