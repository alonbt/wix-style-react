import { createContext } from 'react';

const HighlightContext = createContext({ highlight: false, match: '' });

export default HighlightContext;
