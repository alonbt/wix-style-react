import React from 'react';
import { storiesOf } from '@storybook/react';
import { Category, getTestStoryKind } from '../../../stories/storiesHierarchy';
import { testStories, storySettings } from '../docs/storySettings';
import Scrollable from '../docs/AlertExamples/Scrollable';
import FullScreenModal from '../docs/CustomModalExamples/FullScreenModal';

const getModalKind = storyName =>
  getTestStoryKind({
    category: Category.DEPRECATED,
    storyName,
  });

const alertKind = getModalKind(storySettings.alert.story);
const customKind = getModalKind(storySettings.custom.story);

storiesOf(alertKind, module).add(testStories.alert, () => <Scrollable />);
storiesOf(customKind, module).add(testStories.fullScreenModal, () => (
  <FullScreenModal />
));
