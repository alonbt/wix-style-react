import React from 'react';

import DragDropContextProvider from '../DragDropContextProvider';

export default Component => {
  const withDNDContext = props => (
    <DragDropContextProvider>
      <Component {...props} />
    </DragDropContextProvider>
  );

  withDNDContext.displayName = Component.displayName;

  return withDNDContext;
};
