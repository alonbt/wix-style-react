import React from 'react';

import ComponentsNames from './ComponentsNames';

import SymbolName from './SymbolName';
import { Box } from 'wix-style-react';

const ComponentNaming = ({ name, componentsNames }) => (
  <Box direction="vertical">
    <SymbolName
      name={name}
      isDeveloped={componentsNames && componentsNames.length > 0}
    />
    {componentsNames && <ComponentsNames componentsNames={componentsNames} />}
  </Box>
);

export default ComponentNaming;
