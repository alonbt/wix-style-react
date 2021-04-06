/* eslint-disable */
import React from 'react';

class NoIllustrationExample extends React.Component {
  render() {
    return (
      <AnnouncementModalLayout
        title="All Your Info In One Place"
        primaryButtonText="Leave"
        linkText="Learn More"
        onCloseButtonClick={() => {}}
      >
        <Text>
          Meet your brand new General Info page.
          <br />
          We brought all your business information together here.
        </Text>
        <Box
          backgroundColor="grey"
          width="444px"
          height="210px"
          marginTop="18px"
          borderRadius="4px"
        />
      </AnnouncementModalLayout>
    );
  }
}
