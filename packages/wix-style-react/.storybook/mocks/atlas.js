const {
  aPredictResponse,
  aV2Prediction: aPrediction,
  aV2GetPlaceResponse,
  aV2Place: aPlace,
  aCommonAddress,
  aSearchResponse,
  aSearchResult,
} = require('@wix/ambassador-wix-atlas-service-web/builders');
const { AmbassadorHTTPError } = require('@wix/ambassador/runtime/http');

const buildAtlasAutocompleteResponse = input => {
  if (!input) {
    return aPredictResponse().withPredictions([]).build();
  }
  const predictions = Array.from({ length: 5 }, (_, index) => {
    const mainText = `${input} ${index + 1}`;
    const secondaryText = 'Country';
    const description = `${mainText}, ${secondaryText}`;
    return aPrediction()
      .withSearchId(`${index}`)
      .withDescription(description)
      .withTextStructure({
        mainText,
        secondaryText,
      })
      .build();
  });

  const response = aPredictResponse().withPredictions(predictions).build();

  return response;
};

const buildAtlasPlaceResponse = id => {
  const address = aCommonAddress().withPostalCode(`0651${id}`).build();
  const place = aPlace().withPlaceId(id).withAddress(address).build();
  const response = aV2GetPlaceResponse().withPlace(place).build();
  return response;
};

const buildAtlasSearchResponse = query => {
  const address = aCommonAddress()
    .withFormattedAddress(query)
    .withPostalCode('06510')
    .build();
  const searchResults = [aSearchResult().withAddress(address)];
  const response = aSearchResponse().withSearchResults(searchResults).build();
  return response;
};

const WixAtlasServiceWeb = () => ({
  AutocompleteServiceV2: () => () => ({
    predict: ({ input = '' }) =>
      new Promise((resolve, reject) => {
        const errorMatchGroup = input.match(/^Error (\d+)$/);
        if (errorMatchGroup) {
          const statusCode = Number(errorMatchGroup[1]);
          reject(new AmbassadorHTTPError(statusCode));
        }
        resolve(buildAtlasAutocompleteResponse(input));
      }),
  }),
  PlacesServiceV2: () => () => ({
    getPlace: ({ searchId }) =>
      Promise.resolve(buildAtlasPlaceResponse(searchId)),
  }),
  LocationServiceV2: () => () => ({
    search: ({ query }) => Promise.resolve(buildAtlasSearchResponse(query)),
  }),
});

module.exports.WixAtlasServiceWeb = WixAtlasServiceWeb;
