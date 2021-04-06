import * as React from 'react';

export interface PageHeaderProps {
  dataHook?: string;
  minimized?: boolean;
  hasBackgroundImage?: boolean;
  className?: string;
  breadcrumbs?: React.ReactNode | BreadcrumbsRenderFn;
  title?: React.ReactNode | TitleRenderFn;
  subtitle?: React.ReactNode;
  showBackButton?: boolean;
  onBackClicked?: React.MouseEventHandler<HTMLButtonElement>;
  actionsBar?: React.ReactNode | ActionsBarRenderFn;
}

export default class PageHeader extends React.PureComponent<PageHeaderProps> {}

type TitleRenderFn = (minimized: boolean) => React.ReactNode;
type BreadcrumbsRenderFn = (minimized: boolean) => React.ReactNode;

type ActionsBarRenderFn = (data: {
  minimized: boolean;
  hasBackgroundImage: boolean;
}) => React.ReactNode;
