### How to migrate from `<GoogleAddressInput/>`
`<AtlasAddressInput/>` is a new component for offering predictions based on user's text input using the new [Atlas API](https://bo.wix.com/wix-docs/rest/internal-tools/atlas/introduction)

It replaces the `<GoogleAddressInput/>` which did the same using Google's API.

The migration process is as follows:

1. Remove the `Client` prop, Atlas client is built-in to the component.

2. Pass an authorization token using the `token` prop.
  Check out this [Wix Doc](https://bo.wix.com/wix-docs/rnd/platformization-guidelines/authenticating-as-api-client#platformization-guidelines_authenticating-as-api-client_authenticating-from-a-browser---site-requests) on how to retreive a signed instance in your environment.

3. Replace `onSet` with `onSelect`,

    the `onSelect` callback receives `option` that contains:
      `id`: the options's id,
      `label`: the display label that is shown inside the input once element is selected

    Unlike `GoogleAddressInput`, additional info isn't fetched automatically, but can be fetched with the `getAddress` function that is passed to `onSelect`
    and fetches additional data about the selected location
    (returns [Wix Address Object](https://bo.wix.com/wix-docs/rest/internal-tools/atlas/places-v2/get-place)).

4. Add error handling.

    When data is fetched from an API, there is always a chance for errors to occur.
    The `<GoogleAddressInput/>` just ignored any errors,

    but with the new `<AtlasAddressInput/>` component, [prediction errors](https://github.com/wix-private/ambassador/blob/423c8a09a98d875b4a074eb6f34c18e7e5a376c2/README.md#errors) are caught and passed to the onError handler prop.
    You can intercept those errors and display them by setting `status="error"` and `statusMessage` to the error explanation (displayed when hovering the status icon).

### Example

```diff
import React from 'react';
- import { GoogleAddressInput, clients } from 'wix-style-react';
+ import AtlasAddressInput from 'wix-style-react/AtlasAddressInput';
+ import { appDefIds, getCurrentInstance } from '@wix/business-manager-api'; // check doc in step 2 on how to retreive a signed instance in your environment
class MyAddressInput extends React.Component {
  constructor(props) {
    super(props);
+   this.authToken = getCurrentInstance(appDefIds.metaSite);
    this.state = {
      inputValue: '',
      errorMessage: undefined,
    };
  }
  _onChange = event => {
    this.setState({ inputValue: event.target.value, errorMessage: undefined });
  }
- _onSet = ({ originValue, address }) => {
-   const { latLng: { lat, lng } } = address;
-   this.setState({ inputValue: `${originValue} - ${lat}, ${lng}` });
- }
+ _onSelect = async (option, getAddress) => {
+   try {
+     const address = await getAddress();
+     const { geocode: { latitude, longitude } } = address;
+     this.setState({ inputValue: `${option.label} - ${latitude}, ${longitude}` });
+   } catch (error) {
+     this._onError(error);
+   }
+ }
+ _onError = async (error) => {
+   switch (error.httpStatus) {
+     // TODO: add cases for common errors
+     default:
+       return this.setState({ errorMessage: `Failed with message: ${error.response}` });
+   }
+ }
  render() {
    const { inputValue, errorMessage } = this.state;
    return (
-     <GoogleAddressInput
+     <AtlasAddressInput
        value={inputValue}
        onChange={this._onChange}
-       onSet={this._onSet}
+       onSelect={this._onSelect}
+       onError={this._onError}
        status={errorMessage && "error"}
        statusMessage={errorMessage}
-       Client={clients.GoogleMapsClient}
+       token={this.authToken}
      />
    );
  }
}
```
