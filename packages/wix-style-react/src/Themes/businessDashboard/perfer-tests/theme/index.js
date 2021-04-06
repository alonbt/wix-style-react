import React from 'react';
import { theme } from '../../index';
import ThemeProvider from '../../../../ThemeProvider';

/*
 * This is just a simple usage of the Theme to calculate the additional bundle size
 * Pay attention that the bundle size limitiaion is the maximum size. If only some components in the theme are used in a project, the bundle could be smaller
 */
export default () => (
  <ThemeProvider theme={theme()}>
    <div />
  </ThemeProvider>
);
