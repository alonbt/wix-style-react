/* eslint-disable */
import React from 'react';
import { Checkbox } from 'wix-style-react';

class FootnoteExample extends React.Component {
  render() {
    return (
      <CustomModalLayout
        primaryButtonText="Save"
        secondaryButtonText="Cancel"
        onCloseButtonClick={() => {}}
        title="Create New Coupon"
        subtitle="Make customers come back to your store with coupons"
        sideActions={<Checkbox>Checkbox</Checkbox>}
        footnote={
          <Text size="small">
            By sending an invite, you agree to the <a>Wix Terms of Use</a>
          </Text>
        }
      >
        <Text>
          If you leave now, changes you have made here won't be saved. Are you
          sure you want to leave?
        </Text>
      </CustomModalLayout>
    );
  }
}
