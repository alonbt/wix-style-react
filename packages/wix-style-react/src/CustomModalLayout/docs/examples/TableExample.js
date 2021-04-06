/* eslint-disable */
import React from 'react';
import { CustomModalLayout } from 'wix-style-react';

class TableExample extends React.Component {
  render() {
    const data = [
      { firstName: 'Meghan', lastName: 'Bishop', status: 'Single' },
      { firstName: 'Sara', lastName: 'Porter', status: 'Married' },
      { firstName: 'Deborah', lastName: 'Rhodes', status: "It's complicated" },
      { firstName: 'Walter', lastName: 'Jenning', status: 'Married' },
      { firstName: 'Meghan', lastName: 'Bishop', status: 'Single' },
      { firstName: 'Sara', lastName: 'Porter', status: 'Married' },
      { firstName: 'Deborah', lastName: 'Rhodes', status: "It's complicated" },
      { firstName: 'Walter', lastName: 'Jenning', status: 'Married' },
    ];
    const columns = [
      { title: 'First', render: row => row.firstName },
      { title: 'Last', render: row => row.lastName },
      { title: 'Status', render: row => row.status },
    ];
    return (
      <Box maxHeight={417}>
        <CustomModalLayout
          removeContentPadding
          primaryButtonText="Save"
          secondaryButtonText="Cancel"
          onCloseButtonClick={() => {}}
          title="Create New Coupon"
          subtitle="Make customers come back to your store with coupons"
          sideActions={<Checkbox>I agree to Wix terms of use</Checkbox>}
        >
          <Table data={data} columns={columns} showSelection>
            <Table.Content />
          </Table>
        </CustomModalLayout>
      </Box>
    );
  }
}

export default () => <TableExample />;
