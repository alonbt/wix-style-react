/* eslint-disable */
import React from 'react';

class FootnoteExample extends React.Component {
  render() {
    return (
      <AnnouncementModalLayout
        illustration={'generic_post.svg'}
        primaryButtonText="Start Now"
        linkText="Learn More"
        title="Import Posts From WordPress"
        onCloseButtonClick={() => {}}
        footnote={
          <Text size="small">
            By sending an invite, you agree to the <a>Wix Terms of Use</a>
          </Text>
        }
      >
        <Text>
          Your public posts, images and videos will be copied and added to your
          Wix blog. Your site and current posts won't be affected.
        </Text>
      </AnnouncementModalLayout>
    );
  }
}
