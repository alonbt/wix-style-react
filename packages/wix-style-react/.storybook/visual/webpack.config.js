const merge = require('lodash/merge');
const path = require('path');

const { decorateStorybookConfig } = require('@wix/yoshi-flow-library/storybook');

module.exports = ({ config }) => {
  const srcPath = path.resolve(__dirname, '../..', 'src');

  return merge(decorateStorybookConfig(config), {
    context: srcPath,
    resolve: {
      alias: {
        'wix-style-react': srcPath,
      },
    },
  });
};
