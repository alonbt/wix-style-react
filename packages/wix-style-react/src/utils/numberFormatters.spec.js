import {
  formatToCompactNumber,
  formatToPercent,
  formatNumberToPrecision,
  countPercentageFromBase,
} from './numberFormatters';

describe('formatToPercent', () => {
  it('returns string in proper format', () => {
    const number1 = 10;
    const number2 = 1000;
    expect(formatToPercent(number1)).toBe('10%');
    expect(formatToPercent(number2)).toBe('1,000%');
  });

  it('returns string in proper format for empty value', () => {
    const number = undefined;
    expect(formatToPercent(number)).toBe('0%');
  });
});

describe('formatToCompactNumber', () => {
  it('return string in proper format for hundreds', () => {
    const number = 100;
    expect(formatToCompactNumber(number)).toBe('100');
  });

  it('return string in proper format for thousands', () => {
    const number1 = 1400;
    const number2 = 1600;
    expect(formatToCompactNumber(number1)).toBe('1K');
    expect(formatToCompactNumber(number2)).toBe('2K');
  });

  it('return string in proper format for millions', () => {
    const number1 = 1400000;
    const number2 = 1600000;
    expect(formatToCompactNumber(number1)).toBe('1M');
    expect(formatToCompactNumber(number2)).toBe('2M');
  });

  it('return string in proper format for billions', () => {
    const number1 = 14e8;
    const number2 = 16e8;
    expect(formatToCompactNumber(number1)).toBe('1B');
    expect(formatToCompactNumber(number2)).toBe('2B');
  });

  it('return string in proper format for more then billions', () => {
    const number1 = 14e11;
    expect(formatToCompactNumber(number1)).toBe('1400B');
  });

  it('return string in proper format for negative value', () => {
    const number = -10000;
    expect(formatToCompactNumber(number)).toBe('-10K');
  });
});

describe('formatNumberToPrecision', () => {
  it('return string with required precision - double value', () => {
    const number = 12.3456789123456;
    expect(formatNumberToPrecision(number, 2)).toBe('12.35');
  });
  it('return string with required precision - negative double value', () => {
    const number = -12.3456789123456;
    expect(formatNumberToPrecision(number, 2)).toBe('−12.35');
  });
  it('return string with required precision - int value', () => {
    const number = 12;
    expect(formatNumberToPrecision(number, 2)).toBe('12');
  });

  it('return string with default precision', () => {
    const number = 12.3456789123456;
    expect(formatNumberToPrecision(number)).toBe('12');
  });
});

describe('countPercentageFromBase', () => {
  it('return 0 incase base is zero or chunk is zero', () => {
    expect(countPercentageFromBase(0)).toBe(0);
    expect(countPercentageFromBase(100, 0)).toBe(0);
  });

  it('return percentage value with no precision - in result', () => {
    expect(countPercentageFromBase(100, 20)).toBe(20);
  });
  it('return percentage value with no precision - double result', () => {
    expect(countPercentageFromBase(110, 20)).toBe(18.181818181818182);
  });

  it('return percentage value with precision', () => {
    expect(countPercentageFromBase(110, 20, 0)).toBe(18);
  });

  it('throw error incase precision is negative or not int', () => {
    expect(() => countPercentageFromBase(110, 20, 1.22)).toThrowError(
      'Precision should be integer',
    );
    expect(() => countPercentageFromBase(110, 20, -1)).toThrowError(
      'Precision should be integer',
    );
  });
});
