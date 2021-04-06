import { filterObject } from './filterObject';

describe('filterObject', () => {
  it('should return part of object', () => {
    const assert = {
      a: 1,
      b: 2,
      c: null,
      d: 'remove me',
      5: 'remove me too',
      42: 'keep me',
    };

    const expectation = {
      a: 1,
      b: 2,
    };

    const filter = (key, value) => {
      if (!value) {
        return false;
      }
      return ['a', 'b', 42].some(a => key === a);
    };

    expect(filterObject(assert, filter)).toEqual(expectation);
  });

  it('should return original object, given no filter', () => {
    const assert = {
      a: 1,
      b: 2,
      c: null,
      d: 'remove me',
      5: 'remove me too',
      42: 'keep me',
    };

    expect(filterObject(assert)).toEqual(assert);
  });
});
