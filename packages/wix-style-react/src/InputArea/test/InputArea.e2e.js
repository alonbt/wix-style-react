import { inputAreaTestkitFactory } from '../../../testkit/protractor';
import { eyesItInstance } from '../../../test/utils/eyes-it';
import { setupBeforeEach } from '../../../test/utils/e2e-helpers';

import { storySettings, testStories } from './storySettings';
import InputArea from '../InputArea';

const LONG_INPUT = 'all work and no play makes jack a dull boy\n';

describe('InputArea', () => {
  const eyes = eyesItInstance({ enableSnapshotAtBrowserGet: false });

  let inputAreaTestkit;

  function createTestkit(settings) {
    inputAreaTestkit = inputAreaTestkitFactory({
      dataHook: settings.dataHook,
    });
    return inputAreaTestkit;
  }

  describe('autoGrow', () => {
    setupBeforeEach(testStories.autoGrow, storySettings, createTestkit);

    eyes.it('should grow automatically with input', async () => {
      const longValue = LONG_INPUT.repeat(10);

      await inputAreaTestkit.sendKeys(longValue);
      const offsetHeight = await inputAreaTestkit.getOffsetHeight();
      const scrollHeight = await inputAreaTestkit.getScrollHeight();

      expect(offsetHeight).toBe(scrollHeight);
    });

    eyes.it('should shrink automatically with input', async () => {
      const longValue = LONG_INPUT.repeat(10);

      await inputAreaTestkit.sendKeys(longValue);
      const previousOffsetHeight = await inputAreaTestkit.getOffsetHeight();

      await inputAreaTestkit.sendKeys(
        protractor.Key.BACK_SPACE.repeat(LONG_INPUT.length * 4),
      );
      const currentOffsetHeight = await inputAreaTestkit.getOffsetHeight();

      expect(currentOffsetHeight < previousOffsetHeight).toBeTruthy();
    });

    eyes.it(
      'should grow according to input when line-height is set to "normal"',
      async () => {
        await inputAreaTestkit.setLineHeight('normal');

        const longValue = LONG_INPUT.repeat(10);

        await inputAreaTestkit.sendKeys(longValue);
        const offsetHeight = await inputAreaTestkit.getOffsetHeight();
        const scrollHeight = await inputAreaTestkit.getScrollHeight();

        expect(offsetHeight).toBe(scrollHeight);
      },
    );

    eyes.it('should begin with minimum amount of rows', async () => {
      const rowCount = await inputAreaTestkit.getRowCount();
      expect(rowCount).toBe(InputArea.MIN_ROWS);
    });

    eyes.it('it does not shrink below allowed minimum rows', async () => {
      const rowCount = await inputAreaTestkit.getRowCount();
      expect(rowCount).toBe(InputArea.MIN_ROWS);

      const numRowsToInsert = 5;
      await inputAreaTestkit.sendKeys('\n'.repeat(numRowsToInsert - 1));
      const rowCountAfterInput = await inputAreaTestkit.getRowCount();
      expect(rowCountAfterInput).toBe(numRowsToInsert);

      await inputAreaTestkit.sendKeys(
        protractor.Key.BACK_SPACE.repeat(numRowsToInsert),
      );
      const rowCountAfterDelete = await inputAreaTestkit.getRowCount();
      expect(rowCountAfterDelete).toBe(InputArea.MIN_ROWS);
    });
  });

  describe('autoGrow and rows', () => {
    setupBeforeEach(testStories.autoGrowWithRows, storySettings, createTestkit);

    eyes.it('should give precedence to rows prop', async () => {
      const previousOffsetHeight = await inputAreaTestkit.getOffsetHeight();

      const longValue = LONG_INPUT.repeat(10);

      await inputAreaTestkit.sendKeys(longValue);
      const currentOffsetHeight = await inputAreaTestkit.getOffsetHeight();

      expect(currentOffsetHeight).toBe(previousOffsetHeight);
    });
  });

  describe('autoGrow and minRows', () => {
    setupBeforeEach(testStories.minRowsAutoGrow, storySettings, createTestkit);

    eyes.it('should begin with minRow amount of rows', async () => {
      const rowCount = await inputAreaTestkit.getRowCount();
      expect(rowCount).toBe(1);
    });
    eyes.it('should grow when long text is provided', async () => {
      await inputAreaTestkit.click();
      const previousOffsetHeight = parseInt(
        await inputAreaTestkit.getOffsetHeight(),
      );
      const longValue = LONG_INPUT.repeat(10);
      inputAreaTestkit.sendKeys(longValue);
      const currentOffsetHeight = parseInt(
        await inputAreaTestkit.getOffsetHeight(),
      );
      expect(currentOffsetHeight).toBeGreaterThan(previousOffsetHeight);
    });
  });
});
