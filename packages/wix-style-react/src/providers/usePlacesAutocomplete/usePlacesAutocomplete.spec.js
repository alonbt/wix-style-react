import { act, renderHook } from '@testing-library/react-hooks';
import { sleep } from 'wix-ui-test-utils/react-helpers';
import { AmbassadorHTTPError } from '@wix/ambassador/runtime/http';
import { debounce } from '../../../test/utils/unit';
import usePlacesAutocomplete from './usePlacesAutocomplete';

jest.useFakeTimers();

const flushPromises = () => new Promise(resolve => setImmediate(resolve));

const defaultDebounceMs = 200;

const mockPredictions = [
  {
    description: 'Paris, France',
    distanceInMeters: 5000,
    matchedSubstrings: [],
    placeId: 'test',
    textStructure: {
      mainText: 'Paris',
      secondaryText: 'France',
    },
  },
];

describe('usePlacesAutocomplete', () => {
  const waitForTimeout = async timeoutMs => {
    jest.advanceTimersByTime(timeoutMs);
    await flushPromises();
  };
  const fetchPredictions = () =>
    new Promise(resolve => resolve(mockPredictions));

  const mockClient = {
    fetchPredictions,
    ready: true,
  };

  const renderHelper = props =>
    renderHook(() =>
      usePlacesAutocomplete({
        client: mockClient,
        // default lodash debounce doesn't work with jest fake timers
        debounceFn: debounce,
        ...props,
      }),
    ).result;

  it('should return loading state', async () => {
    const fetchDelay = 100;
    const fetchPredictionsFn = async () => {
      await sleep(fetchDelay);
      return mockPredictions;
    };
    const client = { fetchPredictions: fetchPredictionsFn, ready: true };
    const result = renderHelper({ client });
    expect(result.current.loading).toEqual(false);
    act(() => result.current.updatePredictions('test'));
    await act(() => waitForTimeout(defaultDebounceMs));
    expect(result.current.loading).toEqual(true);
    await act(() => waitForTimeout(fetchDelay));
    expect(result.current.loading).toEqual(false);
    expect(result.current.predictions).toBe(mockPredictions);
  });

  it('should return predictions data', async () => {
    const result = renderHelper();
    expect(result.current.predictions).toEqual([]);
    act(() => result.current.updatePredictions('test'));
    await act(() => waitForTimeout(defaultDebounceMs));
    expect(result.current.predictions).toBe(mockPredictions);
  });

  describe('updatePredictions', () => {
    it('should call fetchPredictions with new value', async () => {
      const fetchPredictionsFn = jest.fn(fetchPredictions);
      const client = {
        fetchPredictions: fetchPredictionsFn,
        ready: true,
      };
      const result = renderHelper({ client });
      act(() => result.current.updatePredictions('test'));
      await act(() => waitForTimeout(defaultDebounceMs));
      expect(fetchPredictionsFn).toHaveBeenCalledWith('test', undefined);
    });
    it('should call fetchPrediction with requestOptions from arguments', async () => {
      const fetchPredictionsFn = jest.fn(fetchPredictions);
      const client = {
        fetchPredictions: fetchPredictionsFn,
        ready: true,
      };
      const requestOptions = { languageCode: 'he' };
      const result = renderHelper({ client });
      act(() => result.current.updatePredictions('test', requestOptions));
      await act(() => waitForTimeout(defaultDebounceMs));
      expect(fetchPredictionsFn).toHaveBeenCalledWith('test', requestOptions);
    });
    it('should call `onError` prop when a fetch error occurs', async () => {
      const error = new AmbassadorHTTPError(403);
      const client = {
        fetchPredictions: () => {
          throw error;
        },
        ready: true,
      };
      const onError = jest.fn();
      const result = renderHelper({ client, onError });
      act(() => result.current.updatePredictions('test'));
      await act(() => waitForTimeout(defaultDebounceMs));
      expect(onError).toHaveBeenCalledWith(error);
    });
  });

  describe('clearPredictions', () => {
    it('should clear predictions', async () => {
      const result = renderHelper();
      act(() => result.current.updatePredictions('test'));
      await act(() => waitForTimeout(defaultDebounceMs));
      expect(result.current.predictions).toBe(mockPredictions);
      act(() => result.current.clearPredictions());
      expect(result.current.predictions).toEqual([]);
    });
  });

  describe('props', () => {
    describe('debounceMs', () => {
      it('should set the debounce timeout for fetching request', async () => {
        const debounceMs = 100;
        const fetchPredictionsFn = jest.fn(fetchPredictions);
        const client = {
          fetchPredictions: fetchPredictionsFn,
          ready: true,
        };
        const result = renderHelper({ client, debounceMs });

        act(() => result.current.updatePredictions('t'));
        jest.advanceTimersByTime(10);
        act(() => result.current.updatePredictions('te'));
        jest.advanceTimersByTime(10);
        act(() => result.current.updatePredictions('tes'));
        jest.advanceTimersByTime(10);
        act(() => result.current.updatePredictions('test'));
        await act(() => waitForTimeout(defaultDebounceMs));
        act(() => result.current.updatePredictions('blah'));
        await act(() => waitForTimeout(defaultDebounceMs));

        expect(fetchPredictionsFn).toHaveBeenCalledTimes(2);
        expect(fetchPredictionsFn).toHaveBeenNthCalledWith(
          1,
          'test',
          undefined,
        );
        expect(fetchPredictionsFn).toHaveBeenNthCalledWith(
          2,
          'blah',
          undefined,
        );
      });
    });
  });
});
