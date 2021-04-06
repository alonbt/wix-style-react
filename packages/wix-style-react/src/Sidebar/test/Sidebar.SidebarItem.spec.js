import React from 'react';
import Sidebar from '../Sidebar';
import { mount } from 'enzyme';

describe('Sidebar', () => {
  describe('Sidebar.Item', () => {
    it('should render top level Sidebar.Item', () => {
      const sidebar = mount(
        <Sidebar>
          <Sidebar.Item itemKey={'item1'}>
            <div data-hook="simple">123</div>
          </Sidebar.Item>
        </Sidebar>,
      );

      const el1 = sidebar.find(`[data-hook="simple"]`);
      expect(el1.text()).toEqual('123');
    });

    it('should not render second level items until navigate', () => {
      const sidebar = mount(
        <Sidebar>
          <Sidebar.Item
            itemKey={'item1'}
            innerMenu={[
              <Sidebar.Item itemKey={'item2'}>
                <div data-hook="simple2">456</div>
              </Sidebar.Item>,
              <Sidebar.Item itemKey={'item3'}>
                <div data-hook="simple2">789</div>
              </Sidebar.Item>,
              <Sidebar.Item itemKey={'item4'}>
                <div data-hook="simple2">000</div>
              </Sidebar.Item>,
            ]}
          >
            <div data-hook="simple1">123</div>
          </Sidebar.Item>
        </Sidebar>,
      );

      const el1 = sidebar.find(`[data-hook="simple1"]`);
      expect(el1.text()).toEqual('123');

      let el = sidebar.find(`[data-hook="simple2"]`);
      expect(el.exists()).toBe(false);

      el = sidebar.find(`[data-hook="simple3"]`);
      expect(el.exists()).toBe(false);

      el = sidebar.find(`[data-hook="simple4"]`);
      expect(el.exists()).toBe(false);
    });

    it('should render second level items once navigate', () => {
      const sidebar = mount(
        <Sidebar selectedKey={'item2'}>
          <Sidebar.Item
            itemKey={'item1'}
            innerMenu={[
              <Sidebar.Item key={'item2'} itemKey={'item2'}>
                <div data-hook="simple2">456</div>
              </Sidebar.Item>,
              <Sidebar.Item key={'item3'} itemKey={'item3'}>
                <div data-hook="simple3">789</div>
              </Sidebar.Item>,
              <Sidebar.Item key={'item4'} itemKey={'item4'}>
                <div data-hook="simple4">000</div>
              </Sidebar.Item>,
            ]}
          >
            <div data-hook="simple1">123</div>
          </Sidebar.Item>
        </Sidebar>,
      );

      let el = sidebar.find(`[data-hook="simple2"]`);
      expect(el.text()).toEqual('456');

      el = sidebar.find(`[data-hook="simple3"]`);
      expect(el.text()).toEqual('789');

      el = sidebar.find(`[data-hook="simple4"]`);
      expect(el.text()).toEqual('000');
    });
    it('should render and not throw if all innerMenu items are disabled', () => {
      const sidebar = mount(
        <Sidebar selectedKey={'item2'}>
          <Sidebar.Item
            itemKey={'item1'}
            innerMenu={[
              <Sidebar.Item key={'item2'} itemKey={'item2'} disable>
                <div data-hook="simple2">456</div>
              </Sidebar.Item>,
              <Sidebar.Item key={'item3'} itemKey={'item3'} disable>
                <div data-hook="simple3">789</div>
              </Sidebar.Item>,
              <Sidebar.Item key={'item4'} itemKey={'item4'} disable>
                <div data-hook="simple4">000</div>
              </Sidebar.Item>,
            ]}
          >
            <div data-hook="simple1">123</div>
          </Sidebar.Item>
        </Sidebar>,
      );

      let el = sidebar.find(`[data-hook="simple2"]`);
      expect(el.text()).toEqual('456');

      el = sidebar.find(`[data-hook="simple3"]`);
      expect(el.text()).toEqual('789');

      el = sidebar.find(`[data-hook="simple4"]`);
      expect(el.text()).toEqual('000');
    });

    it('should navigate on click when innerMenu', () => {
      const sidebar = mount(
        <Sidebar selectedKey={'item1'}>
          <Sidebar.Item
            itemKey={'item1'}
            innerMenu={[
              <Sidebar.Item key={'item2'} itemKey={'item2'}>
                <div data-hook="simple2">456</div>
              </Sidebar.Item>,
              <Sidebar.Item key={'item3'} itemKey={'item3'}>
                <div data-hook="simple3">789</div>
              </Sidebar.Item>,
              <Sidebar.Item key={'item4'} itemKey={'item4'}>
                <div data-hook="simple4">000</div>
              </Sidebar.Item>,
            ]}
          >
            <div data-hook="simple1">123</div>
          </Sidebar.Item>
        </Sidebar>,
      );

      let subMenuChildren = sidebar.find(`[data-hook="driven-in-children"]`);
      expect(subMenuChildren.exists()).toBe(false);

      const itemEl = sidebar.find(`[data-hook="simple1"]`);
      itemEl.simulate('click');

      subMenuChildren = sidebar.find(`[data-hook="driven-in-children"]`);
      expect(subMenuChildren.exists()).toBe(true);

      let subItemEl = sidebar.find(`[data-hook="simple2"]`);
      expect(subItemEl.text()).toEqual('456');

      subItemEl = sidebar.find(`[data-hook="simple3"]`);
      expect(subItemEl.text()).toEqual('789');

      subItemEl = sidebar.find(`[data-hook="simple4"]`);
      expect(subItemEl.text()).toEqual('000');

      // wrapper = mount(<App/>)
      // import {SidebarTestkit, SidebarItemTestkit} from 'wsr/testkit'
      // const sidebarDriver = SidebarTestkit({wrapper, dataHook: 'my-sidebar'})
      // const sidebarItemDriver = SidebarTestkit({wrapper, dataHook: 'my-sidebar-item-1'})

      // render sidebar with all the content
      // nativeSidebar.querySelector('internal-dataHook)' SidebarItemDriver.click()
    });

    it('should not dummy navigate when no innerMenu', () => {
      const sidebar = mount(
        <Sidebar selectedKey={'item1'}>
          <Sidebar.Item itemKey={'item1'}>
            <div data-hook="simple1">123</div>
          </Sidebar.Item>
        </Sidebar>,
      );

      const itemEl = sidebar.find(`[data-hook="simple1"]`);
      itemEl.simulate('click');

      const subMenuChildren = sidebar.find(`[data-hook="driven-in-children"]`);
      expect(subMenuChildren.exists()).toBe(false);
    });
  });
});
