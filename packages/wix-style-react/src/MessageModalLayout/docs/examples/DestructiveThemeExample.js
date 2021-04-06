/* eslint-disable */
import React from 'react';

class DestructiveThemeExample extends React.Component {
  render() {
    return (
      <MessageModalLayout
        theme={'destructive'}
        onCloseButtonClick={() => {}}
        primaryButtonText="Move To Trash"
        secondaryButtonText="Cancel"
        title="Move Site to Trash"
        illustration={'generic_trash.svg'}
      >
        <Text>
          Are you sure you want to move mysite-14 to Trash? <br />
          Your site will become unpublished and can't be edited.
        </Text>
      </MessageModalLayout>
    );
  }
}
