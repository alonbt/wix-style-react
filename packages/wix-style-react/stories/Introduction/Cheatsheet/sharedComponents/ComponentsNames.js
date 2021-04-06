import React from 'react';

import { TextButton, Box } from 'wix-style-react';

const ComponentsNames = ({ componentsNames }) => (
  <Box flexWrap="wrap">
    {componentsNames.map(({ text, url }, i) => (
      <Box
        marginBottom="4px"
        marginRight={i !== componentsNames.length - 1 ? '6px' : null}
        key={`component-name-${i}`}
      >
        <TextButton size="small" onClick={url}>
          {text}
        </TextButton>
      </Box>
    ))}
  </Box>
);

export default ComponentsNames;
