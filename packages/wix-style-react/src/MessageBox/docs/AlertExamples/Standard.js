/* eslint-disable react/prop-types */
import React from 'react';
import { MessageBoxFunctionalLayout } from 'wix-style-react';

export default () => (
  <MessageBoxFunctionalLayout
    title="Interruption Message"
    confirmText="Action"
    theme="blue"
    dataHook="alert-standard"
  >
    This is a generic message. No harm done, but really needed to interrupt you.
  </MessageBoxFunctionalLayout>
);
