import * as React from 'react';

export interface AnimateProps {
  dataHook?: string;
  animateClasses?: string;
  children: React.ReactNode;
  onStart?(): void;
  onEnd?(): void;
  delay?: string | number;
  animateInlineStyle?: React.CSSProperties;
}

declare const Animate: React.FC<AnimateProps>;
export default Animate;
