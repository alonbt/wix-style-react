import calc_color_vars from '../../Foundation/stylable/mixins/calc_color_vars';

const colorRegEx = new RegExp(/^#(?:[0-9a-fA-F]{3}){1,2}$/i);

export const calcColors = color => {
  const colors = {};

  if (color) {
    if (colorRegEx.test(color)) {
      Object.assign(colors, calc_color_vars(color));
    } else {
      throw new Error('color must be a 3 or 6 hex digits string only');
    }
  }

  return colors;
};
