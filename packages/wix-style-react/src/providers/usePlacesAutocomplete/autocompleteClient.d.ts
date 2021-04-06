export type FetchPredictions<Prediction, RequestOptions = any> = (
  value: string,
  requestOptions?: RequestOptions,
) => Promise<Prediction[]>;

export type GetAddress<Address> = (placeId: string) => Promise<Address>;

export type SearchAddresses<Address> = (
  inputValue: string,
) => Promise<Address[]>;

interface ReadyAutocompleteClient<Prediction, Address, RequestOptions = any> {
  fetchPredictions: FetchPredictions<Prediction, RequestOptions>;
  getAddress: GetAddress<Address>;
  searchAddresses: SearchAddresses<Address>;
  ready: true;
}

interface NotReadyAutocompleteClient {
  ready: false;
}

export type AutocompleteClient<Prediction, Address, RequestOptions = any> =
  | ReadyAutocompleteClient<Prediction, Address, RequestOptions>
  | NotReadyAutocompleteClient;

export type UseAutocompleteClient<
  Client extends AutocompleteClient<any, any, any>,
  InitOptions = any
> = (options?: InitOptions) => Client;
