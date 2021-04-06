/* eslint-disable react/prop-types */
import React from 'react';
import surfMusa from '../../../../test/assets/surf-musa.png';

import { MessageBoxFunctionalLayout, Checkbox, Text } from 'wix-style-react';

export default () => (
  <MessageBoxFunctionalLayout
    title="Interruption Message"
    confirmText="Main"
    cancelText="Secondary"
    theme="blue"
    dataHook="alert-image-actions"
    image={<img src={surfMusa} />}
    sideActions={
      <Checkbox>
        <Text>{`Please don't show me this again.`}</Text>
      </Checkbox>
    }
  >
    This is a generic message. No harm done, but really needed to interrupt you.
  </MessageBoxFunctionalLayout>
);
