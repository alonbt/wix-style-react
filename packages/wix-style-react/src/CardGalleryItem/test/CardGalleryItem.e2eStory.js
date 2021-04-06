import React from 'react';
import { storiesOf } from '@storybook/react';

import { getTestStoryKind } from '../../../stories/storiesHierarchy';

import { testStories, storySettings } from '../docs/storySettings';
import exampleProps from '../docs/exampleProps';
import { CardGalleryItem } from 'wix-style-react';

const kind = getTestStoryKind(storySettings);

storiesOf(kind, module).add(testStories.cardGalleryItem, () => {
  return (
    <div>
      <CardGalleryItem dataHook={storySettings.dataHook} {...exampleProps} />
    </div>
  );
});
