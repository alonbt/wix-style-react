import { badgeSelectItemBuilder } from '..';
import * as React from 'react';

function badgeSelectItemBuilderWithAllProps() {
  const { id, value , disabled, overrideOptionStyle} = badgeSelectItemBuilder({
    id: '1',
    dataHook: 'badge-select-item-data-hook',
    className: 'cls',
    skin: 'danger',
    text: 'text',
    subtitle: 'subtitle text',
    ellipsis: true,
    disabled: true,
    size: 'medium',
    suffix: 'suffix',
  });
}
