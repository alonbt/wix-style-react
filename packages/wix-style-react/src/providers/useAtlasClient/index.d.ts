import {
  V2Prediction as Prediction,
  CommonAddress as Address,
  PredictRequest,
} from '@wix/ambassador-wix-atlas-service-web/types';
import { OmitPolyfill } from '../../common';
import {
  AutocompleteClient,
  UseAutocompleteClient,
} from '../usePlacesAutocomplete/autocompleteClient';

export type AtlasRequestOptions = OmitPolyfill<PredictRequest, 'input'>;
export interface AtlasInitOptions {
  baseUrl?: string;
  token?: string;
}
export { Prediction, Address };

export type AtlasClient = AutocompleteClient<
  Prediction,
  Address,
  AtlasRequestOptions
>;

declare const useAtlasClient: UseAutocompleteClient<
  AtlasClient,
  AtlasInitOptions
>;

export default useAtlasClient;
