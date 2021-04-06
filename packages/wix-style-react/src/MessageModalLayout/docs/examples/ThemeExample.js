/* eslint-disable */
import React from 'react';

class BasicExample extends React.Component {
  render() {
    return (
      <MessageModalLayout
        onCloseButtonClick={() => {}}
        theme={'premium'}
        primaryButtonText="Upgrade"
        secondaryButtonText="Not Now"
        title="Start Accepting Online Payments"
        illustration={'generic_upgrade.svg'}
      >
        <Text>
          Upgrade your site with a business and ecommerce premium plan to start
          accepting payments.
        </Text>
      </MessageModalLayout>
    );
  }
}
