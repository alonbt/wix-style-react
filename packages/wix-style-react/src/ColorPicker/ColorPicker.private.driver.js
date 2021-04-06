import ReactTestUtils from 'react-dom/test-utils';

import { colorPickerDriverFactory as publicDriver } from './ColorPicker.driver';
import { DataHooks } from './constants';

export default ({ element }) => {
  const hexInput =
    element &&
    element.querySelector('[data-hook="color-picker-hex-input"] input');

  return {
    ...publicDriver({ element }),
    selectBlackColor: () => {
      // as with jsdom size of palette 0 px, then click to 1,1 will make color black
      ReactTestUtils.Simulate.mouseDown(
        element.querySelector(`[data-hook="${DataHooks.hsb}"]`),
        {
          clientX: 1,
          clientY: 1,
        },
      );
    },
    typeValueOnHexInput: value =>
      ReactTestUtils.Simulate.change(hexInput, { target: { value } }),
    keyDownOnHexInput: key =>
      ReactTestUtils.Simulate.keyDown(hexInput, { key }),
  };
};
