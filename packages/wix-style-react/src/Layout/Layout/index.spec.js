/* global expect describe it */

import React from 'react';
import { mount } from 'enzyme';

import Layout from '.';

const mountAndFindLayout = (props = {}) =>
  mount(<Layout dataHook="layout-container" {...props} />).find(
    '[data-hook="layout-container"]',
  );

describe('Layout', () => {
  describe('`gap` prop', () => {
    it('should set `gridGap` style', () => {
      const layout = mountAndFindLayout({ gap: '30px 20px' });
      expect(layout.props().style.gap).toEqual('30px 20px');
    });
  });

  describe('`cols` prop', () => {
    it('should set `gridTemplateColumns` style', () => {
      const layout = mountAndFindLayout({ cols: 5 });
      expect(layout.props().style.gridTemplateColumns).toEqual(
        'repeat(5, minmax(0, 1fr))',
      );
    });

    it('should not set `gridTemplateColumns` inline style by default', () => {
      const layout = mountAndFindLayout();
      expect(layout.props().style.gridTemplateColumns).toBeUndefined();
    });
  });

  describe('`justifyItems` prop', () => {
    it('should set `justifyItems` style', () => {
      const layout = mountAndFindLayout({ justifyItems: 'start' });
      expect(layout.props().style.justifyItems).toEqual('start');
    });
  });

  describe('`alignItems` prop', () => {
    it('should set `justifyItems` style', () => {
      const layout = mountAndFindLayout({ alignItems: 'start' });
      expect(layout.props().style.alignItems).toEqual('start');
    });
  });
});
