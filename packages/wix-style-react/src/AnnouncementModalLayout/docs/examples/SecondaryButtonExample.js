/* eslint-disable */
import React from 'react';

class SecondaryButtonExample extends React.Component {
  render() {
    return (
      <AnnouncementModalLayout
        illustration={'generic_post.svg'}
        title="Import Posts From WordPress"
        primaryButtonText="Start Now"
        secondaryButtonText="Skip"
        onCloseButtonClick={() => {}}
      >
        <Text>
          Your public posts, images and videos will be copied and added to your
          Wix blog. Your site and current posts won't be affected.
        </Text>
      </AnnouncementModalLayout>
    );
  }
}
