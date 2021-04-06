import * as React from 'react';
import { FloatingHelperAppearance } from '..';

export type FloatingHelperContentActionTheme =
  | 'standard'
  | 'white'
  | 'premium'
  | 'lightPrimary'
  | 'standardPrimary';

export interface FloatingHelperContentProps {
  title?: string;
  body: string;
  actionText?: string;
  actionTheme?: FloatingHelperContentActionTheme;
  footer?: React.ReactNode;
  onActionClick?: () => void;
  image?: React.ReactNode;
  appearance?: FloatingHelperAppearance;
}

export const FloatingHelperContent: React.ComponentClass<FloatingHelperContentProps>;
export default FloatingHelperContent;
