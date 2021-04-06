import { addParameters, configure } from 'wix-style-react/node_modules/@storybook/react';

function loadStories() {
  require('./es-named.story');
}

// Parameters
addParameters({
  options: {
    showPanel: false,
    isToolshown: true,
  },
});

// Load stories
configure(loadStories, module);
