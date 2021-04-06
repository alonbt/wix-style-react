import React from 'react';
import { CustomModalLayout, Input, Box } from 'wix-style-react';

class InputExample extends React.Component {
  render() {
    return (
      <CustomModalLayout primaryButtonText="Got It" title="I am title">
        <Box width="100%" height="3px" />
        <Input placeholder="I'm rendered fine" />
        <Box width="100%" height="3px" />
      </CustomModalLayout>
    );
  }
}
