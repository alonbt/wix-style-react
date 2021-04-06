import React from 'react';
import editableRowDriverFactory from './EditableRow.driver';
import {
  createRendererWithDriver,
  createRendererWithUniDriver,
  cleanup,
} from '../../../test/utils/react';
import EditableRow from './EditableRow';
import { editableRowUniDriverFactory } from './EditableRow.uni.driver';

describe('EditableRow', () => {
  describe('[sync]', () => {
    runTests(createRendererWithDriver(editableRowDriverFactory));
  });

  describe('[async]', () => {
    runTests(createRendererWithUniDriver(editableRowUniDriverFactory));
  });
  function runTests(render) {
    afterEach(() => cleanup());

    it('should focus on input when mounted', async () => {
      const { driver } = render(<EditableRow />);
      expect(await driver.isInputFocused()).toEqual(true);
    });

    it('should toggle accept button disabled state according to input presence', async () => {
      const { driver } = render(<EditableRow />);
      expect(await driver.isApproveDisabled()).toBe(true);
      await driver.setText('new option');
      expect(await driver.isApproveDisabled()).toBe(false);
    });

    it('should set input text from props', async () => {
      const text = 'new option';
      const { driver } = render(<EditableRow newOption={text} />);
      expect(await driver.getText()).toEqual(text);
    });

    it('should trigger onApprove callback when approve button is clicked', async () => {
      const onApprove = jest.fn();
      const { driver } = render(<EditableRow onApprove={onApprove} />);
      const text = 'new option';
      await driver.setText(text);
      await driver.clickApprove();
      expect(onApprove).toHaveBeenCalled();
      expect(onApprove.mock.calls[0][0]).toBe(text);
    });

    it('should trigger onApprove callback when enter key is pressed', async () => {
      const onApprove = jest.fn();
      const { driver } = render(<EditableRow onApprove={onApprove} />);
      const text = 'new option';
      await driver.setText(text);
      await driver.keyDown(13); // enter
      expect(onApprove).toHaveBeenCalled();
      expect(onApprove.mock.calls[0][0]).toBe(text);
    });

    it('should trigger onCancel callback when cancel button is clicked', async () => {
      const onCancel = jest.fn();
      const { driver } = render(<EditableRow onCancel={onCancel} />);
      await driver.clickCancel();
      expect(onCancel).toHaveBeenCalled();
    });

    it('should trigger onCancel callback when escape key is pressed', async () => {
      const onCancel = jest.fn();
      const { driver } = render(<EditableRow onCancel={onCancel} />);
      await driver.keyDown(27); // esc
      expect(onCancel).toHaveBeenCalled();
    });
  }
});
