/* eslint-disable */
import React from 'react';
import { Box, Checkbox } from 'wix-style-react';

class NoHeaderExample extends React.Component {
  render() {
    return (
      <Box>
        <CustomModalLayout
          onCloseButtonClick={() => {}}
          primaryButtonText="Save"
          secondaryButtonText="Cancel"
          sideActions={(<Checkbox>Checkbox</Checkbox>)}
          footnote="footnote"
        >
          <Text>
            If you leave now, changes you have made here won't be saved. Are you
            sure you want to leave?
          </Text>
        </CustomModalLayout>
      </Box>
    );
  }
}
