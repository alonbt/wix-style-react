import * as React from 'react';

export interface ModalPreviewLayoutProps {
  dataHook?: string;
  actions?: React.ReactNode;
  title?: string;
  children: React.ReactNode;
  onClose: () => void;
  shouldCloseOnOverlayClick?: boolean;
  closeButtonTooltipText?: string;
  prevButtonTooltipText?: string;
  nextButtonTooltipText?: string;
  prevButtonProps?: PrevButtonProps;
  nextButtonProps?: NextButtonProps;
}

export type PrevButtonProps = {
  onClick?: (childIndexDisplayed: number) => {};
  tooltipText?: React.ReactNode;
};

export type NextButtonProps = {
  onClick?: (childIndexDisplayed: number) => {};
  tooltipText?: React.ReactNode;
};

export default class ModalPreviewLayout extends React.PureComponent<ModalPreviewLayoutProps> {}
