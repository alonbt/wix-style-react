import React from 'react';

import { ReactComponent as Logo } from '../../../assets/Illustration.svg';

import {
  Box,
  Button,
  Heading,
  ModalMobileLayout,
  Text,
  TextButton,
} from 'wix-style-react';

const style = {
  width: '375px',
  height: '640px',
};

export default () => (
  <div style={style}>
    <ModalMobileLayout
      fullscreen
      onCloseButtonClick={() => {}}
      content={
        <Box direction="vertical" align="center" textAlign="center">
          <Box marginBottom="36px" marginTop="91px">
            <Logo />
          </Box>
          <Box marginBottom="12px">
            <Heading appearance={'H1'}>Welcome!</Heading>
          </Box>
          <Box marginBottom="36px">
            <Text weight="thin" secondary>
              First impressions count. Apps have one chance to grab a new user’s
              attention. Use it well.
            </Text>
          </Box>
          <Box marginBottom="18px">
            <Button size="large">Start Now</Button>
          </Box>
          <Box marginBottom="91px">
            <TextButton>Learn More</TextButton>
          </Box>
        </Box>
      }
    />
  </div>
);
