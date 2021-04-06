import gradient from 'gradient-parser';

import resolveColor from 'color';
import { COLOR_ICON_LIGHT, COLOR_ICON_DARK } from './constants';

export const parseColor = fill => {
  if (typeof fill !== 'string') {
    return;
  }
  try {
    return resolveColor(fill);
  } catch {
    return;
  }
};

export const parseGradient = fill => {
  if (typeof fill !== 'string') {
    return;
  }
  try {
    return gradient.parse(fill);
  } catch {
    return;
  }
};

export const parseContrastColor = fill => {
  const color = parseColor(fill);

  if (color) {
    return color.luminosity() > 0.5 ? COLOR_ICON_DARK : COLOR_ICON_LIGHT;
  }

  const gradients = parseGradient(fill);

  if (gradients) {
    const gradientList = gradients[0].colorStops.map(hex =>
      resolveColor(`#${hex.value}`),
    );
    const totalLights = gradientList.reduce((acc, curr) => {
      if (curr.luminosity() > 0.5) {
        return acc + 1;
      } else {
        return acc - 1;
      }
    }, 0);

    return totalLights >= 1 ? COLOR_ICON_DARK : COLOR_ICON_LIGHT;
  }

  return;
};
