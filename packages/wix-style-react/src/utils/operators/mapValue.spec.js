import mapValue from './mapValue';
import sinon from 'sinon';

describe('mapValue operator', () => {
  it('should return an empty object for non-object input', () => {
    expect(mapValue(1)).toEqual({});
    expect(mapValue(true)).toEqual({});
    expect(mapValue('')).toEqual({});
    expect(mapValue(null)).toEqual({});
    expect(mapValue(undefined)).toEqual({});
    expect(mapValue(Symbol.for('foo'))).toEqual({});
  });

  it('should return an empty object for non-function map function', () => {
    expect(mapValue({ a: 1 }, 'not-a-function')).toEqual({});
  });

  it('should return given input', () => {
    const anObject = { a: 1, b: '2' };
    expect(mapValue(anObject)).toEqual({ a: 1, b: '2' });
  });

  it('should project input values by map function', () => {
    const anObject = { a: 1, b: 2 };
    const multiple = value => value + value;
    expect(mapValue(anObject, multiple)).toEqual({ a: 2, b: 4 });
  });

  it('should call map function with (value, key, object)', () => {
    const anObject = { a: 1 };
    const mapFunc = sinon.spy();
    mapValue(anObject, mapFunc);
    expect(mapFunc.calledWithExactly(1, 'a', anObject)).toBe(true);
  });
});
