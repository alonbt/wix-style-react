class GoogleMapsClient {
  constructor() {
    this._autocomplete = new window.google.maps.places.AutocompleteService();
    this._geocoder = new window.google.maps.Geocoder();

    const map = new window.google.maps.Map(document.createElement('div'));
    this._placesServices = new window.google.maps.places.PlacesService(map);
    this._sessionToken = new window.google.maps.places.AutocompleteSessionToken();
  }

  autocomplete({ request }) {
    return new Promise((resolve, reject) => {
      try {
        if (this._sessionToken) {
          request.sessionToken = this._sessionToken;
        }
        this._autocomplete.getPlacePredictions(request, (results, status) => {
          if (
            status !== window.google.maps.GeocoderStatus.OK &&
            status !== window.google.maps.GeocoderStatus.ZERO_RESULTS
          ) {
            reject({ code: 'internal' });
          } else {
            resolve(results || []);
          }
        });
      } catch (e) {
        reject({ code: 'internal', message: e.message });
      }
    });
  }

  geocode({ request }) {
    return new Promise((resolve, reject) => {
      try {
        this._geocoder.geocode(request, (results, status) => {
          if (
            status !== window.google.maps.GeocoderStatus.OK &&
            status !== window.google.maps.GeocoderStatus.ZERO_RESULTS
          ) {
            reject({ code: 'internal' });
          } else {
            resolve(results || []);
          }
        });
      } catch (e) {
        reject({ code: 'internal', message: e.message });
      }
    });
  }

  placeDetails({ request }) {
    return new Promise((resolve, reject) => {
      try {
        if (this._sessionToken) {
          request.sessionToken = this._sessionToken;
        }
        this._placesServices.getDetails(request, (result, status) => {
          if (
            status !== window.google.maps.places.PlacesServiceStatus.OK &&
            status !==
              window.google.maps.places.PlacesServiceStatus.ZERO_RESULTS
          ) {
            reject({ code: 'internal' });
          } else {
            resolve(result || undefined);
          }
        });
      } catch (e) {
        reject({ code: 'internal', message: e.message });
      }
    });
  }
}

export default GoogleMapsClient;
