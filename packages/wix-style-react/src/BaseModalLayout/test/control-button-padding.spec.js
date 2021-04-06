import controlButtonPadding from '../control-button-padding';

describe('Control Button padding', () => {
  it('should return base padding with no buttons', () => {
    expect(controlButtonPadding(0)).toBe('12px');
  });

  it('should work with up to 1 button', () => {
    expect(controlButtonPadding(1)).toBe('42px');
  });

  it('should add gap width with more than one button', () => {
    expect(controlButtonPadding(2)).toBe('78px');
  });
});
