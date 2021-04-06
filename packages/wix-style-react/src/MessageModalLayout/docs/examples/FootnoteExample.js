/* eslint-disable */
import React from 'react';

class BasicExample extends React.Component {
  render() {
    return (
      <MessageModalLayout
        onCloseButtonClick={() => {}}
        primaryButtonText="Leave"
        secondaryButtonText="Cancel"
        title="Discard changes"
        sideActions={<Checkbox>Don't show this again</Checkbox>}
        footnote={
          <Text size="small">
            By sending an invite, you agree to the <a>Wix Terms of Use.</a>
          </Text>
        }
      >
        <Text>
          Are you sure you want to leave this page? Your changes won't be saved.
        </Text>
      </MessageModalLayout>
    );
  }
}
