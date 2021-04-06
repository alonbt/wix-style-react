/* eslint-disable */
import React from 'react';

class ThemeExample extends React.Component {
  render() {
    return (
      <AnnouncementModalLayout
        theme="premium"
        illustration={'generic_upgrade.svg'}
        title="Start Accepting Online Payments"
        primaryButtonText="Upgrade"
        linkText="Learn More"
        onCloseButtonClick={() => {}}
      >
        <Text>
          Upgrade your site with a business and ecommerce premium plan to start
          accepting payments.
        </Text>
      </AnnouncementModalLayout>
    );
  }
}
