const path = require('path');
const { decorateStorybookConfig } = require('@wix/yoshi-flow-library/storybook');

module.exports = decorateStorybookConfig({
  context: path.resolve(__dirname, '..'),
  mode: 'development',
  resolve: {
    extensions: [],
  },
});
