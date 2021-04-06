const merge = require('lodash/merge');
const path = require('path');
const { decorateStorybookConfig } = require('@wix/yoshi-flow-library/storybook');
const StylableWebpackPlugin = require('yoshi-common/build/@stylable/webpack-plugin')
  .default;

const makeTestkitTemplate = platform =>
  `import { <%= component.displayName %>Testkit } from 'wix-style-react/dist/testkit${platform}';`;

const testkitsWarning = `
To learn how to initialize and use testkits, see <a href="/?path=/story/introduction-testing--testing" target="_blank">Testing guide</a>
`;

const patchStylablePlugin = config => {
  config.plugins.pop(); // Remove the yoshi built-in stylable plugin
  config.plugins.push(new StylableWebpackPlugin({ diagnosticsMode: 'strict' })); // break the build in case of stylable warnings
};

module.exports = ({ config }) => {
  const newConfig = decorateStorybookConfig(config);
  patchStylablePlugin(newConfig);

  return merge(newConfig, {
    context: path.resolve(__dirname, '..', 'src'),
    resolve: {
      alias: {
        'wix-style-react': path.resolve(__dirname, '..', 'src'),
        '@wix/ambassador-wix-atlas-service-web/http': path.resolve(
          __dirname,
          'mocks',
          'atlas.js',
        ),
      },
    },
    module: {
      rules: newConfig.module.rules.concat({
        test: /\.story\.js$/,
        loader: 'wix-storybook-utils/loader',
        options: {
          storyConfig: {
            moduleName: 'wix-style-react',
            repoBaseURL:
              'https://github.com/wix/wix-style-react/tree/master/packages/wix-style-react/src/',
            issueURL:
              'https://github.com/wix/wix-style-react/issues/new/choose',
            testkitsWarning,
            importFormat: "import { %componentName } from '%moduleName'",
            testkits: {
              vanilla: {
                template: makeTestkitTemplate(''),
              },
              enzyme: {
                template: makeTestkitTemplate('/enzyme'),
              },
              puppeteer: {
                template: makeTestkitTemplate('/puppeteer'),
              },
              protractor: {
                template: makeTestkitTemplate('/protractor'),
              },
            },
            unifiedTestkit: true,
          },
        },
      }),
    },
  });
};
