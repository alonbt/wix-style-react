export const simple = `<AtlasAddressInput token="some_auth_token" />`;

export const controlled = `
() => {
  const [value, setValue] = React.useState('');

  const _onChange = event => setValue(event.target.value);

  const _onClear = () => setValue('');

  // Show address postal code
  const _onSelect = (option, getAddress) => {
    getAddress().then(address => {
      setValue(\`\${option.label} - \${address.postalCode}\`);
    });
  };

  return (
    <AtlasAddressInput
      onChange={_onChange}
      onClear={_onClear}
      onSelect={_onSelect}
      value={value}
      token="some_auth_token"
    />
  );
};
`;

export const errorHandling = `
() => {
  const [error, setError] = React.useState("Auth failed, please login again");
  const _onError = err => {
    switch (err.httpStatus) {
      case 401:
        return setError("Auth failed, please login again");
      case 429:
        return setError("Too many searches! Write a bit slower");
      case 503:
        return setError("Our servers appear to be down");
      default:
        return setError("Generic errors are bad, try to cover all cases")
    }
  };
  const _onChange = () => {
    setError(null);
  };

  return (
    <AtlasAddressInput
      onError={_onError}
      onChange={_onChange}
      status={error && 'error'}
      statusMessage={error}
      initialValue="Error 401"
    />
  );
};
`;
