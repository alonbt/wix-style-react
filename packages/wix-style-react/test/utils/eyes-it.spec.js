import eyes from 'eyes.it';
import { eyesItInstance, defaultConfig } from './eyes-it';

jest.mock('eyes.it');

describe('eyesItInstance', () => {
  it('should call the original module with default config', () => {
    const instance = eyesItInstance();
    const fn = jest.fn();

    instance.it('should do something', fn);

    expect(eyes.it).toHaveBeenCalledWith(
      'should do something',
      fn,
      defaultConfig,
    );
  });

  it('should call the original module with predefined config', () => {
    const instance = eyesItInstance({ myConfigField: 'value' });
    const fn = jest.fn();

    instance.it('should do something', fn);

    expect(eyes.it).toHaveBeenCalledWith('should do something', fn, {
      ...defaultConfig,
      myConfigField: 'value',
    });
  });

  it('should allow overriding default config', () => {
    const instance = eyesItInstance({
      myConfigField: 'value',
      enableSnapshotAtBrowserGet: true,
    });
    const fn = jest.fn();

    instance.it('should do something', fn);

    expect(eyes.it).toHaveBeenCalledWith('should do something', fn, {
      ...defaultConfig,
      myConfigField: 'value',
      enableSnapshotAtBrowserGet: true,
    });
  });

  it('should merge test-specific config', () => {
    const instance = eyesItInstance({ myConfigField: 'value' });
    const fn = jest.fn();

    instance.it('should do something', fn, {
      myConfigField: 'value2',
      myAnotherConfigField: 'value',
    });

    expect(eyes.it).toHaveBeenCalledWith('should do something', fn, {
      ...defaultConfig,
      myConfigField: 'value2',
      myAnotherConfigField: 'value',
    });
  });
});
