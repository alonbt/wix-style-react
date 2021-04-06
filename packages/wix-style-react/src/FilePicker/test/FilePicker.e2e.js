import eyes from 'eyes.it';
import path from 'path';
import { filePickerTestkitFactory } from '../../../testkit/protractor';
import { waitForVisibilityOf } from 'wix-ui-test-utils/protractor';
import { storySettings, testStories } from '../docs/storySettings';
import { createTestStoryUrl } from '../../../test/utils/storybook-helpers';

const storyUrl = createTestStoryUrl({
  ...storySettings,
  testName: testStories.filePicker,
});

describe('FilePicker', () => {
  eyes.it('should display filePicker', () => {
    const driver = filePickerTestkitFactory({
      dataHook: storySettings.dataHook,
    });

    browser.get(storyUrl);
    waitForVisibilityOf(driver.element(), 'Cannot find FilePicker').then(() => {
      const imagePath = '../../../test/assets/surf-musa.png';
      const absolutePath = path.resolve(__dirname, imagePath);

      expect(driver.getSubLabel()).toBe('No file chosen (Max size 5 MB)');

      driver.uploadFile(absolutePath);
      expect(driver.getSubLabel()).toBe('surf-musa.png');
    });
  });
});
