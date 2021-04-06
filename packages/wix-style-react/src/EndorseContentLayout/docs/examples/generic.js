import React from 'react';

import { EndorseContentLayout, Button } from 'wix-style-react';

export default () => (
  <EndorseContentLayout
    head="Something interesting goes in the title"
    content="This is just a generic message. No harm, no pain."
    primaryCta={<Button onClick={() => alert('dont click me!')}>Button</Button>}
  />
);
