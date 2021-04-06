import React from 'react';
import { MessageBoxFunctionalLayout } from 'wix-style-react';

export default () => {
  return (
    <MessageBoxFunctionalLayout
      cancelText="Cancel"
      confirmText="Upgrade"
      dataHook="premium-modal"
      theme="purple"
      title="Premium modal"
    >
      I am a premium modal!
    </MessageBoxFunctionalLayout>
  );
};
