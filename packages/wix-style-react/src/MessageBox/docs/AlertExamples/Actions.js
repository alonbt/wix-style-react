/* eslint-disable react/prop-types */
import React from 'react';
import { MessageBoxFunctionalLayout, Checkbox, Text } from 'wix-style-react';

export default () => (
  <MessageBoxFunctionalLayout
    title="Message With Actions"
    confirmText="Confirm"
    cancelText="Cancel"
    theme="blue"
    dataHook="alert-actions"
    sideActions={
      <Checkbox>
        <Text>{`Please don't show me this again.`}</Text>
      </Checkbox>
    }
  >
    This is a generic message. No harm done, but really needed to interrupt you.
  </MessageBoxFunctionalLayout>
);
