/* eslint-disable no-console */
import React from 'react';
import { mount } from 'enzyme';
import { BulkSelectionConsumer } from './BulkSelectionConsumer';
import { BulkSelection } from './BulkSelection';

describe('BulkSelection', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error');
    console.error.mockImplementation(() => {});
  });

  afterEach(() => {
    console.error.mockRestore();
  });

  let _selectionContext;
  const mountComponent = props =>
    mount(
      <BulkSelection {...props}>
        <BulkSelectionConsumer>
          {selectionContext => {
            _selectionContext = selectionContext;
            return <div />;
          }}
        </BulkSelectionConsumer>
      </BulkSelection>,
    );

  describe('BulkSelectionConsumer error', () => {
    it('should throw error when consumer is not within a BulkSelection', () => {
      const create = () =>
        mount(<BulkSelectionConsumer>{() => null}</BulkSelectionConsumer>);
      expect(create).toThrow();
    });

    it('should throw custom error when consumer is not within a BulkSelection', () => {
      const create = () =>
        mount(
          <BulkSelectionConsumer
            consumerCompName="Consumer"
            providerCompName="Provider"
          >
            {() => null}
          </BulkSelectionConsumer>,
        );
      expect(create).toThrow(
        'Consumer cannot be rendered outside the Provider component',
      );
    });
  });

  it('setSelectionIds & isSelected', () => {
    let _setSelectedIds, _isSelected;
    mount(
      <BulkSelection allIds={[1, 2, 3]}>
        <BulkSelectionConsumer>
          {({ setSelectedIds, isSelected }) => {
            _setSelectedIds = setSelectedIds;
            _isSelected = isSelected;
            return <div />;
          }}
        </BulkSelectionConsumer>
      </BulkSelection>,
    );
    expect(_isSelected(1)).toBe(false);
    expect(_isSelected(2)).toBe(false);
    expect(_isSelected(3)).toBe(false);
    _setSelectedIds([1, 2]);
    expect(_isSelected(1)).toBe(true);
    expect(_isSelected(2)).toBe(true);
    expect(_isSelected(3)).toBe(false);
  });

  it('updates selectedIds when items are removed', () => {
    const component = mountComponent({ allIds: [1, 2, 3] });
    _selectionContext.setSelectedIds([1, 2]);
    expect(_selectionContext.getSelectedIds()).toEqual([1, 2]);
    component.setProps({ allIds: [2, 3] });
    expect(_selectionContext.getSelectedIds()).toEqual([2]);
  });

  describe('hasMoreInBulkSelection (infinite bulk selection mode)', () => {
    it('should return correct totalCount when in infinite bulk selection', () => {
      mountComponent({
        hasMoreInBulkSelection: true,
        allIds: [1, 2, 3],
        totalCount: 100,
      });

      expect(_selectionContext.selectedCount).toEqual(0);

      _selectionContext.toggleAll();

      expect(_selectionContext.selectedCount).toEqual(100);

      _selectionContext.toggleSelectionById(1);

      expect(_selectionContext.selectedCount).toEqual(99);
    });

    it('should have context with correct info when in infinite bulk selection', () => {
      mountComponent({
        hasMoreInBulkSelection: true,
        allIds: [1, 2, 3],
        totalCount: 100,
      });

      expect(_selectionContext.getSelectedIds()).toEqual([]);
      expect(_selectionContext.getNotSelectedIds()).toEqual(null);
      expect(_selectionContext.infiniteBulkSelected).toEqual(false);
      expect(_selectionContext.isSelected(1)).toEqual(false);
      expect(_selectionContext.bulkSelectionState).toEqual('NONE');

      _selectionContext.toggleAll();

      expect(_selectionContext.getSelectedIds()).toEqual(null);
      expect(_selectionContext.getNotSelectedIds()).toEqual([]);
      expect(_selectionContext.infiniteBulkSelected).toEqual(true);
      expect(_selectionContext.isSelected(1)).toEqual(true);
      expect(_selectionContext.bulkSelectionState).toEqual('ALL');

      _selectionContext.toggleSelectionById(1);

      expect(_selectionContext.getSelectedIds()).toEqual(null);
      expect(_selectionContext.getNotSelectedIds()).toEqual([1]);
      expect(_selectionContext.infiniteBulkSelected).toEqual(true);
      expect(_selectionContext.isSelected(1)).toEqual(false);
      expect(_selectionContext.bulkSelectionState).toEqual('SOME');
    });

    it('should update selected ids when the list is fully loaded', () => {
      const component = mountComponent({
        hasMoreInBulkSelection: true,
        allIds: [1, 2, 3],
        totalCount: 100,
      });

      _selectionContext.toggleAll();
      _selectionContext.toggleSelectionById(1);

      expect(_selectionContext.getSelectedIds()).toEqual(null);
      expect(_selectionContext.getNotSelectedIds()).toEqual([1]);
      expect(_selectionContext.infiniteBulkSelected).toEqual(true);
      expect(_selectionContext.isSelected(1)).toEqual(false);
      expect(_selectionContext.isSelected(2)).toEqual(true);

      component.setProps({ hasMoreInBulkSelection: false });

      expect(_selectionContext.getSelectedIds()).toEqual([2, 3]);
      expect(_selectionContext.getNotSelectedIds()).toEqual(null);
      expect(_selectionContext.infiniteBulkSelected).toEqual(false);
      expect(_selectionContext.isSelected(1)).toEqual(false);
      expect(_selectionContext.isSelected(2)).toEqual(true);
    });

    it('should update bulkSelectionState after loading more when not in infinite bulk selection mode', () => {
      const component = mountComponent({
        hasMoreInBulkSelection: false,
        allIds: [1, 2, 3],
        totalCount: 100,
      });

      _selectionContext.toggleAll();

      expect(_selectionContext.bulkSelectionState).toEqual('ALL');

      component.setProps({ allIds: [1, 2, 3, 4, 5, 6] });

      expect(_selectionContext.bulkSelectionState).toEqual('SOME');
    });

    it('should not change bulkSelectionState after loading more when in infinite bulk selection mode', () => {
      const component = mountComponent({
        hasMoreInBulkSelection: true,
        allIds: [1, 2, 3],
        totalCount: 100,
      });

      _selectionContext.toggleAll();

      expect(_selectionContext.bulkSelectionState).toEqual('ALL');

      component.setProps({ allIds: [1, 2, 3, 4, 5, 6] });

      expect(_selectionContext.bulkSelectionState).toEqual('ALL');
    });
  });

  describe('selectionDisabled', () => {
    const randomRow = {};

    it('should be false when prop is not set', () => {
      mountComponent({
        allIds: [1, 2, 3],
      });

      expect(_selectionContext.selectionDisabled).toBe(false);
    });

    it('should be false when there are items', () => {
      mountComponent({
        allIds: [1, 2, 3],
        selectionDisabled: () => false,
      });

      expect(_selectionContext.selectionDisabled()).toBe(false);
    });

    it('should be true when disabled is set (boolean)', () => {
      mountComponent({
        allIds: [1, 2, 3],
        selectionDisabled: true,
      });

      expect(_selectionContext.selectionDisabled).toBe(true);
    });

    it('should be true when disabled is set (function)', () => {
      mountComponent({
        allIds: [1, 2, 3],
        selectionDisabled: () => true,
      });

      expect(_selectionContext.selectionDisabled(randomRow)).toBe(true);
    });

    it('should update to true when disabled is updated', () => {
      const component = mountComponent({
        allIds: [1, 2, 3],
        selectionDisabled: () => false,
      });

      expect(_selectionContext.selectionDisabled(randomRow)).toBe(false);

      component.setProps({ selectionDisabled: () => true });

      expect(_selectionContext.selectionDisabled(randomRow)).toBe(true);
    });
  });
});
