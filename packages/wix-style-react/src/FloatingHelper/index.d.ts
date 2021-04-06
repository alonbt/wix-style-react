import * as React from 'react';
import { FloatingHelperContent } from './FloatingHelperContent';
import {
  AppendTo,
  Placement,
} from 'wix-ui-core/dist/src/components/popover/Popover.d';
import { MoveByOffset } from '../common';

export default class FloatingHelper extends React.PureComponent<FloatingHelperProps> {
  open: () => void;
  close: () => void;
  static Content: typeof FloatingHelperContent;
}

export type FloatingHelperAppearance = 'dark' | 'light';
export type FloatingHelperPlacement = Placement;
export type FloatingHelperAppendTo = AppendTo;
export type FloatingHelperMoveByOffset = MoveByOffset;

export interface FloatingHelperProps {
  dataHook?: string;
  width?: string | number;
  target: React.ReactNode;
  content: React.ReactNode;
  onClose?: Function;
  onOpen?: Function;
  appearance?: FloatingHelperAppearance;
  initiallyOpened?: boolean;
  opened?: boolean;
  zIndex?: number;
  appendTo?: FloatingHelperAppendTo;
  placement: FloatingHelperPlacement;
  moveBy?: FloatingHelperMoveByOffset;
  hideDelay?: number;
}
