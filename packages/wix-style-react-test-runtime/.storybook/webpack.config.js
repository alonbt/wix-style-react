const wixStorybookConfig = require('@wix/yoshi/config/webpack.config.storybook');

module.exports = ({ config }) => {
  config.module.rules[0].use[0].loader = require.resolve('babel-loader');
  config.plugins.find(
    plugin => plugin.constructor.name === 'ProgressPlugin',
  ).handler = () => undefined;

  return wixStorybookConfig(config);
};
