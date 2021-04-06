/* global expect describe it */

import React from 'react';
import { shallow } from 'enzyme';

import Cell from '.';

describe('Cell', () => {
  describe('`span` prop', () => {
    it('should be set in `gridColumn` style', () => {
      const cell = shallow(<Cell span={4} />);
      expect(cell.prop('style').gridColumn).toEqual('span 4');
    });
  });

  describe('`rows` prop', () => {
    it('should be set in `gridRow` style', () => {
      const cell = shallow(<Cell rows={4} />);
      expect(cell.prop('style').gridRow).toEqual('span 4');
    });
  });
});
