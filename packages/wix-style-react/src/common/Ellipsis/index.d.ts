import { TooltipCommonProps } from '../../common';
import * as React from 'react';

// Common
export type EllipsisCommonProps = TooltipCommonProps & {
  ellipsis?: boolean;
  showTooltip?: boolean;
  maxLines?: number;
};

// Ellipsis
export type EllipsisProps = EllipsisCommonProps & {
  wrapperClassName?: string;
};

type RenderProps<T> = {
  ref: any; // TODO - React.RefObject<T>,
  ellipsisClasses: (className?: string) => string;
  ellipsisInlineStyle?: React.CSSProperties;
};

interface IEllipsisProps extends EllipsisProps {
  render<T>(renderProps: RenderProps<T>): React.ReactElement;
}
export default class Ellipsis extends React.PureComponent<IEllipsisProps> {}

// Extract
export function extractEllipsisProps<T>(
  props: T & EllipsisCommonProps,
): { ellipsisProps: EllipsisProps; componentProps: T };
