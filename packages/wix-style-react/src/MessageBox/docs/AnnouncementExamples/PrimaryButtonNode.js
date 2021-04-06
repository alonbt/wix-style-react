/* eslint-disable react/prop-types */
import React from 'react';
import ChevronDown from 'wix-ui-icons-common/ChevronDown';

import {
  MessageBoxMarketerialLayout,
  DropdownBase,
  Button,
} from 'wix-style-react';

export default () => (
  <MessageBoxMarketerialLayout
    title="Looking good! Your site is on Google"
    content="All of your pages are indexed and now come up as separate search results on Google. This is great for your visibility!"
    confirmText="Button"
    imageUrl="https://static.wixstatic.com/media/9ab0d1_8f1d1bd00e6c4bcd8764e1cae938f872~mv1.png"
    theme="blue"
    primaryButtonLabel="Button"
    primaryButtonNode={
      <DropdownBase
        options={[
          { id: 0, value: 'First option' },
          { id: 1, value: 'Second option' },
          { id: 2, value: 'Third option' },
          { id: 3, value: 'Fourth option' },
        ]}
      >
        {({ toggle, selectedOption = {} }) => (
          <Button onClick={toggle} suffixIcon={<ChevronDown />}>
            {selectedOption.value || 'Click Me!'}
          </Button>
        )}
      </DropdownBase>
    }
    secondaryButtonLabel="Secondary action"
    dataHook="announcement-standard"
    onClose={() => undefined}
  />
);
