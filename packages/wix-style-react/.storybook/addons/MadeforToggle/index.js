import addons, { makeDecorator } from '@storybook/addons';
import * as React from 'react';
import { ADDON_ID, ADDON_TITLE } from './shared';
import { useState } from 'react';
import FontUpgrade from '../../../src/FontUpgrade';
import WixStyleReactProvider from '../../../src/WixStyleReactProvider';

const MadeforToggle = makeDecorator({
  name: ADDON_TITLE,
  parameterName: ADDON_TITLE,
  allowDeprecatedUsage: true,
  wrapper: (getStory, context) => {
    const [madeforActive, setMadeforActive] = useState(true);
    const [spacingActive, setSpacingActive] = useState(false);
    const channel = addons.getChannel();

    channel.on(ADDON_ID + '/change', params => {
      setMadeforActive(params.madeforActive);
      setSpacingActive(params.spacingActive);
    });

    return (
      <WixStyleReactProvider features={{ reducedSpacingAndImprovedLayout: spacingActive }}>
        <FontUpgrade active={madeforActive}>
          {getStory(context)}
        </FontUpgrade>
      </WixStyleReactProvider>
    );
  },
});

export default MadeforToggle;
