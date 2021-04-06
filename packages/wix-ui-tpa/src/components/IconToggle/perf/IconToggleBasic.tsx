import * as React from 'react';
import { IconToggle } from '../IconToggle';
import { ReactComponent as StarIcon } from '../../../assets/icons/Star.svg';

export const IconTogglePerf = () => {
  return (
    <IconToggle
      checked
      icon={<StarIcon />}
      label={`Label`}
      onChange={() => {}}
    />
  );
};
