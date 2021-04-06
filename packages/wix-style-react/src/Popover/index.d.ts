import * as React from 'react';

export type PopoverProps = import('wix-ui-core/popover').PopoverProps & {
  dataHook?: string;
  animate?: boolean;
  theme?: PopoverTheme;
  disableClickOutsideWhenClosed?: boolean;
};

export default class Popover extends React.Component<PopoverProps> {
  static Element: React.SFC<{ children: React.ReactNode }>;
  static Content: React.SFC<{ children: React.ReactNode }>;
}

export type PopoverTheme = 'dark' | 'light';
