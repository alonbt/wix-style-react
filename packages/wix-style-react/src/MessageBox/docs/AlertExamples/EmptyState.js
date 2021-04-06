/* eslint-disable react/prop-types */
import React from 'react';

import ImagePlaceholder from '../../../../stories/utils/ImagePlaceholder';

import { MessageBoxFunctionalLayout, EmptyState } from 'wix-style-react';

export default () => (
  <MessageBoxFunctionalLayout
    title="Choose Your Favorites"
    confirmText="Select"
    cancelText="Cancel"
    theme="blue"
    disableConfirmation
    withEmptyState
    dataHook="alert-empty-state"
  >
    <EmptyState
      title="You don't have any favorites yet"
      subtitle="Go back and add some items to your favorites' list"
      image={<ImagePlaceholder />}
    />
  </MessageBoxFunctionalLayout>
);
