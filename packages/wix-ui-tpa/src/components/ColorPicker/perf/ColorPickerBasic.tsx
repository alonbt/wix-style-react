import * as React from 'react';
import { ColorPicker } from '../ColorPicker';

export const COLORS = [
  {
    value: 'purple',
    ariaLabel: 'purple color',
    tooltip: 'Hey',
  },
  {
    value: 'green',
    ariaLabel: 'green color',
    tooltip: 'Hello',
  },
  {
    value: 'red',
    ariaLabel: 'red color',
    isCrossedOut: true,
    tooltip: 'Hi',
  },
];

export const ColorPickerPerf = () => {
  return (
    <ColorPicker onChange={() => {}}>
      {COLORS.map((color, index) => (
        <ColorPicker.Item
          key={index}
          value={color.value}
          checked={index === 0}
          tooltip={color.tooltip}
          withFocusRing
        />
      ))}
    </ColorPicker>
  );
};
