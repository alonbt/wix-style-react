import * as React from 'react';

export interface ComposerHeaderProps {
  dataHook?: string;
  backButtonValue?: React.ReactNode;
  onBackClick?: React.MouseEventHandler<HTMLElement>;
  size?: 'small' | 'medium';
  dropShadow?: boolean;
}

declare const ComposerHeaderSaveStatus: React.SFC<ComposerHeaderSaveStatusProps>;
interface ComposerHeaderSaveStatusProps {
  saveStatusValue: string;
  saveStatusError?: string;
  dataHook?: string;
  size?: 'small' | 'medium';
}

declare const ComposerHeaderActions: React.SFC<ComposerHeaderActionsProps>;
interface ComposerHeaderActionsProps {
  justifyContent?: React.CSSProperties['justifyContent'];
  dataHook?: string;
}
declare const ComposerHeaderMainActions: React.SFC<ComposerHeaderMainActionsProps>;
interface ComposerHeaderMainActionsProps {
  dataHook?: string;
}

export default class ComposerHeader extends React.Component<ComposerHeaderProps> {
  static SaveStatus: typeof ComposerHeaderSaveStatus;
  static Actions: typeof ComposerHeaderActions;
  static MainActions: typeof ComposerHeaderMainActions;
}
