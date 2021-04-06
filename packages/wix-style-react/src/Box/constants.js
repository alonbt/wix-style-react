import { stVars } from '../Foundation/stylable/spacing.st.css';

export const directions = {
  horizontal: 'horizontal',
  vertical: 'vertical',
};

export const horizontalAlignmentValues = {
  left: 'left',
  center: 'center',
  right: 'right',
  'space-between': 'space-between',
};

export const verticalAlignmentValues = {
  top: 'top',
  middle: 'middle',
  bottom: 'bottom',
  'space-between': 'space-between',
};

export const spacingValues = {
  tiny: `${parseInt(stVars.Spacing)}px`,
  small: `${parseInt(stVars.Spacing) * 2}px`,
  medium: `${parseInt(stVars.Spacing) * 3}px`,
  large: `${parseInt(stVars.Spacing) * 4}px`,
};
