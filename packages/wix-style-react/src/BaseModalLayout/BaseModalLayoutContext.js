import { createContext, useContext } from 'react';

const BaseModalLayoutContext = createContext({});

function useBaseModalLayoutContext() {
  return useContext(BaseModalLayoutContext) || {};
}

export { BaseModalLayoutContext, useBaseModalLayoutContext };
