import React, { useState, useEffect } from 'react';
import addons, { types } from '@storybook/addons';
import { useChannel } from '@storybook/api';
import { ADDON_ID, ADDON_TITLE, PANEL_ID } from './shared';

function MadeforToggleButton() {
  const [madeforActive, setMadeforActive] = useState(true);
  const [spacingActive, setSpacingActive] = useState(false);
  const emit = useChannel({});
  useEffect(() => emit(ADDON_ID + '/change', { madeforActive, spacingActive }));

  return (
    <div style={{ display: 'flex' }}>
      {/* Madefor */}
      <div
        style={{
          margin: 'auto 0',
          cursor: 'pointer',
          userSelect: 'none',
          padding: '3px 8px',
          backgroundColor: madeforActive ? '#4EB7F5' : '#eee',
          color: madeforActive ? '#444' : '#999',
        }}
        onClick={() => setMadeforActive(!madeforActive)}
      >
        Madefor
      </div>

      {/* Spacing */}
      <div
        style={{
          margin: 'auto 0 auto 15px',
          cursor: 'pointer',
          userSelect: 'none',
          padding: '3px 8px',
          backgroundColor: spacingActive ? '#4EB7F5' : '#eee',
          color: spacingActive ? '#444' : '#999',
        }}
        onClick={() => setSpacingActive(!spacingActive)}
      >
        Spacing
      </div>
    </div>
  );
}

addons.register(ADDON_ID, api => {
  addons.add(PANEL_ID, {
    type: types.TOOL,
    title: ADDON_TITLE,
    match: ({ viewMode }) => viewMode === 'story',
    render: () => <MadeforToggleButton />,
  });
});
