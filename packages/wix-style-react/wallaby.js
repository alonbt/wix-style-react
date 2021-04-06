module.exports = function (wallaby) {
  const wallabyYoshi = require('@wix/yoshi/config/wallaby-jest')(wallaby);
  wallabyYoshi.tests = ['src/**/*.spec.js', '!test/export-components.spec.js'];
  wallabyYoshi.files.push({ pattern: 'src/**/*.tsx', ignore: true });
  return wallabyYoshi;
};
