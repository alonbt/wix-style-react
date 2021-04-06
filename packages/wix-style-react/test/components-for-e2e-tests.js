/*
 * The purpose of this file is to optimize duration of parallel e2e test builds.
 *
 * In CI we run parallel e2e test builds with two npm commands:
 * `npm run test3:e2e`
 * `npm run test4:e2e`
 *
 * previously these two commands would run e2e test files in ranges of names A-J and K-Z
 * that way
 * `npm run test3:e2e` took ~22min to complete
 * `npm run test4:e2e` took ~15min to complete
 *
 * in order to balance the time, we have this list of components below, and thus
 *
 * `npm run test3:e2e` runs e2e tests on components in the list
 * `npm run test4:e2e` runs e2e tests on components not in the list
 *
 * as a result,
 * `npm run test3:e2e` and `npm run test4:e2e` take ~16mins each to complete
 *
 * this list is used in `protractor1.conf.js` and `protractor2.conf.js`
 */
module.exports = [
  'AudioPlayer',
  'DropdownLayout',
  'FilePicker',
  'InputArea',
  'MultiSelect',
  'RadioGroup',
  'Slider',
  'Stepper',
  'Table',
  'TableActionCell',
  'Tabs',
];
