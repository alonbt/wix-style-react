/* eslint-disable */
import React from 'react';

class BasicExample extends React.Component {
  render() {
    return (
      <MessageModalLayout
        onCloseButtonClick={() => {}}
        primaryButtonText="Report"
        secondaryButtonText="Cancel"
        title="Report as Spam?"
        sideActions={<Checkbox>Don't show this again</Checkbox>}
        illustration={'generic_report.svg'}
      >
        <Text>
          Are you sure you want to report this conversation as spam? We will
          block messages like this.
        </Text>
      </MessageModalLayout>
    );
  }
}
