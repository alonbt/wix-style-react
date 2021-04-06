const {
  baseProtractorConfig,
} = require('wix-ui-test-utils/dist/src/protractor/protractor.conf');

const components = require('./test/components-for-e2e-tests');

module.exports.config = {
  ...baseProtractorConfig,
  specs: components.map(component => `src/${component}/**/*.e2e.js`),
  jasmineNodeOpts: { defaultTimeoutInterval: 120000 },
  onPrepare() {
    browser.ignoreSynchronization = true;
  },
};
