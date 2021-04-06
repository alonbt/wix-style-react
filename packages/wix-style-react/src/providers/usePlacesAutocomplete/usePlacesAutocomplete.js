import { useState, useCallback, useRef } from 'react';
import _debounce from 'lodash/debounce';
import useIsMounted from '../useIsMounted';
import useDebouncedCallback from '../useDebouncedCallback/useDebouncedCallback';

const initialFetchState = {
  loading: false,
  predictions: [],
};

/** A hook for fetching place predictions based on input value */
const usePlacesAutocomplete = ({
  /** client: connects and sends requests to location service (Atlas / Google)
   * contains: {
   *  fetchPredictions: A function that fetches predictions from service given input value
   *  ready: is client ready to receive requests
   * } */
  client,
  /** fetch predictions debounce in milliseconds (default: 200) */
  debounceMs = 200,
  /** (callback: Function, debounceMs: number) => Function
   * allow passing a custom debounce function (default: lodash debounce) */
  debounceFn = _debounce,
  /** method to be called when a fetch error occurs */
  onError,
}) => {
  const [
    {
      /** whether fetch request is ongoing */
      loading,
      /** array of prediction results */
      predictions,
    },
    setFetchState,
  ] = useState(initialFetchState);

  const predictionsRequestId = useRef(0); // id of latest request to avoid race conditions
  const isMounted = useIsMounted(); // checks whether component is still mounted

  const clearPredictions = useCallback(() => {
    // Increase request id counter
    predictionsRequestId.current++;
    setFetchState(initialFetchState);
  }, []);

  const updatePredictions = useDebouncedCallback(
    async (value, requestOptions) => {
      const { ready, fetchPredictions } = client;
      if (!ready || !isMounted()) {
        return;
      }

      if (!value) {
        clearPredictions();
        return;
      }

      // Increase request id counter
      const requestId = ++predictionsRequestId.current;

      setFetchState(state => ({ ...state, loading: true }));

      let newPredictions;
      try {
        newPredictions = await fetchPredictions(value, requestOptions);
      } catch (error) {
        // failed to fetch predictions
        if (onError) {
          onError(error);
        }
      } finally {
        // check if no new fetch request has been initiated
        const isMostRecentRequest = requestId === predictionsRequestId.current;

        if (isMounted() && isMostRecentRequest) {
          setFetchState(state => ({
            loading: false,
            // set new predictions if fetched properly, else keep current predictions
            predictions: newPredictions || state.predictions,
          }));
        }
      }
    },
    [client, onError],
    debounceMs,
    debounceFn,
  );

  return {
    /** array of prediction results */
    predictions,
    /** whether fetch request is ongoing */
    loading,
    /** (value: string, requestOptions?: RequestOptions) => void
     * fetches predictions for given value from client (debounced)
     * and sets results to prediction state.
     *
     * Can also receive requestOptions,
     * which are client specific options to pass to the request */
    updatePredictions,
    /** function that clears predictions array and sets loading state to false */
    clearPredictions,
  };
};

export default usePlacesAutocomplete;
