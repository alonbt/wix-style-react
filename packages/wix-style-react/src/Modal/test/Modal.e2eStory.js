import React from 'react';
import { storiesOf } from '@storybook/react';

import { getTestStoryKind } from '../../../stories/storiesHierarchy';
import { testStories, storySettings } from './storySettings';

import Modal from '..';

const kind = getTestStoryKind(storySettings);

storiesOf(kind, module).add(testStories.a11yTabInsideModal, () => {
  return (
    <div>
      <Modal isOpen dataHook={storySettings.dataHook}>
        <input data-hook="first-input" />
        <input data-hook="second-input" />
      </Modal>
    </div>
  );
});
