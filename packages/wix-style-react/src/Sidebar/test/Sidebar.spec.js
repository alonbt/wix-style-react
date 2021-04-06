import React from 'react';
import { mount } from 'enzyme';

import Sidebar from '../Sidebar';
import { sidebarSkins } from '../constants';
import { SidebarContext } from '../SidebarAPI';

describe('Sidebar', () => {
  describe('General', () => {
    it('should render when no children at all', () => {
      const sidebar = mount(<Sidebar />);
      expect(sidebar).toBeDefined();
      expect(sidebar.exists()).toBe(true);
      // const sidebarRootDiv = sidebar.find(`[data-hook="sidebar"]`);
      // expect(sidebarRootDiv.exists()).toBe(true);
    });

    it('should render when only one simple children', () => {
      const sidebar = mount(
        <Sidebar>
          <div data-hook="simple">123</div>
        </Sidebar>,
      );

      const simpleEl = sidebar.find(`[data-hook="simple"]`);
      expect(simpleEl.text()).toEqual('123');
    });

    it('should render when more then one simple children', () => {
      const sidebar = mount(
        <Sidebar>
          <div data-hook="simple1">123</div>
          <div data-hook="simple2">456</div>
          <div data-hook="simple3">789</div>
        </Sidebar>,
      );

      const el1 = sidebar.find(`[data-hook="simple1"]`);
      expect(el1.text()).toEqual('123');

      const el2 = sidebar.find(`[data-hook="simple2"]`);
      expect(el2.text()).toEqual('456');

      const el3 = sidebar.find(`[data-hook="simple3"]`);
      expect(el3.text()).toEqual('789');
    });

    it('should render accept children changes ', () => {
      const sidebar = mount(<Sidebar />);

      let el1 = sidebar.find(`[data-hook="simple"]`);
      expect(el1.exists()).toBe(false);

      sidebar.setProps({
        children: (
          <div key={'simple'} data-hook="simple">
            123
          </div>
        ),
      });

      el1 = sidebar.find(`[data-hook="simple"]`);
      expect(el1.text()).toEqual('123');
    });

    it('should return the right skin', () => {
      const skin = sidebarSkins.light;
      let currentSkin;

      mount(
        <Sidebar skin={skin}>
          <SidebarContext.Consumer>
            {context => (currentSkin = context.getSkin())}
          </SidebarContext.Consumer>
        </Sidebar>,
      );

      expect(currentSkin).toBe(skin);
    });
  });
});
