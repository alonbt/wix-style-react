import * as React from 'react';
import { addDecorator, addParameters, configure } from '@storybook/react';
import { withI18n } from 'storybook-addon-i18n';
import { version } from '../../package.json';
import { create } from '@storybook/theming';
import './stories.scss';

function loadStories() {
  let req;

  try {
    require('../../.wuf/requires-for-visual-tests.js');
    return;
  } catch (e) {}

  switch (process.env.STORYBOOK_VISUAL) {
    // Test only base components
    case 'base':
      req = require.context('../../src', true, /^(?!.\/Themes\/).*\.visual\.js$/);
      break;
    // Test themes
    case 'themes':
      req = require.context('../../src/Themes', true, /\.visual\.js$/);
      break;
    default:
      req = require.context('../../src', true, /\.visual\.js$/);
  }

  req.keys().forEach(filename => {
    const file = req(filename);
    if (typeof file.runTests === 'function') {
      file.runTests();
    }
  });
}

const theme = create({
  base: 'light',
  brandTitle: `Wix Style React ${version}`,
  brandUrl: 'https://github.com/wix/wix-style-react',
});

// Parameters
addParameters({
  options: {
    theme,
    showPanel: false,
    isToolshown: true,
  },
  i18n: {
    provider: ({ children }) => <React.Fragment>{children}</React.Fragment>,
    supportedLocales: ['LTR', 'RTL'],
    providerLocaleKey: 'locale',
    getDirection: locale => locale.toLowerCase(),
  },
});

// Decorators
addDecorator(withI18n);

// Load stories
configure(loadStories, module);
