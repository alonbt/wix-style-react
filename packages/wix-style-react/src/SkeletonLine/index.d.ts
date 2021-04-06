import * as React from 'react';
import { BoxProps } from '../Box';

export interface SkeletonLineProps {
  dataHook?: string;
  className?: string;
  width?: BoxProps['width'];
  margin?: BoxProps['margin'];
  marginTop?: BoxProps['marginTop'];
  marginRight?: BoxProps['marginRight'];
  marginBottom?: BoxProps['marginBottom'];
  marginLeft?: BoxProps['marginLeft'];
}

export default class SkeletonLine extends React.PureComponent<
  SkeletonLineProps
> {}
