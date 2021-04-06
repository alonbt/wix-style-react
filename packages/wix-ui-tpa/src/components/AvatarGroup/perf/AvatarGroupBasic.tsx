import * as React from 'react';
import { AvatarGroup } from '../';

const items = [
  { name: 'John', src: 'https://randomuser.me/api/portraits/men/69.jpg' },
];

export const AvatarGroupPerf = () => {
  return <AvatarGroup items={items} />;
};
