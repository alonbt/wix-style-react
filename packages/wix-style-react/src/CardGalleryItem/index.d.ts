import * as React from 'react';

export interface CardGalleryItemProps {
  badge?: React.ReactNode;
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  backgroundImageUrl?: string;
  backgroundImageNode?: React.ReactNode;
  primaryActionProps: {
    label?: React.ReactNode;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    disabled?: boolean;
    disabledMessage?: string;
  };
  secondaryActionProps?: {
    label?: React.ReactNode;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
  };
  settingsMenu?: React.ReactNode;
  dataHook?: string;
}

export default class CardGalleryItem extends React.PureComponent<CardGalleryItemProps> {}
