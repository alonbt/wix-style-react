import { AutocompleteClient } from './autocompleteClient';

export type UpdatePredictions<RequestOptions> = (
  value: string,
  requestOptions?: RequestOptions,
) => void;

export interface UsePlacesAutocompleteReturn<Prediction, RequestOptions> {
  predictions: Prediction[];
  loading: boolean;
  updatePredictions: UpdatePredictions<RequestOptions>;
  clearPredictions: () => void;
}
export interface UsePlacesAutocompleteProps<
  Prediction,
  Address,
  RequestOptions
> {
  client: AutocompleteClient<Prediction, Address, RequestOptions>;
  debounceMs?: number;
  debounceFn?: (callback: Function, debounceMs: number) => Function;
  onError?: (error: Error) => any;
}

declare const usePlacesAutocomplete: <Prediction, Address, RequestOptions>(
  props?: UsePlacesAutocompleteProps<Prediction, Address, RequestOptions>,
) => UsePlacesAutocompleteReturn<Prediction, RequestOptions>;

export default usePlacesAutocomplete;
