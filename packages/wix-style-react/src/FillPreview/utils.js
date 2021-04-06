import React from 'react';
import { isUrl } from '../utils/UrlUtils';
import gradient from 'gradient-parser';
import resolveColor from 'color';

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

export const parseUrl = fill => {
  if (typeof fill !== 'string') {
    return;
  }

  if (isUrl(fill)) {
    return fill;
  }

  return;
};

export const parseElement = fill => {
  if (typeof fill !== 'string') {
    if (React.isValidElement(fill)) {
      return fill;
    }
  }
  return;
};
