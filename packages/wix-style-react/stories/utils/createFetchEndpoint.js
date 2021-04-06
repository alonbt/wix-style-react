export const createFetchEndpoint = (endpoint, initialData) => {
  function isValidURL(str) {
    const pattern = new RegExp(
      '^(https?:\\/\\/)?' +
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
        '((\\d{1,3}\\.){3}\\d{1,3}))' +
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
        '(\\?[;&a-z\\d%_.~+=-]*)?' +
        '(\\#[-a-z\\d_]*)?$',
      'i',
    ); //
    return !!pattern.test(str);
  }

  return api => {
    const url = isValidURL(api)
      ? new URL(api)
      : new URL(`https://random.com${api}`);
    if (url.pathname === endpoint) {
      return new Promise(resolve => {
        let results = initialData;
        if (url.searchParams.get('items')) {
          results = [];
          for (let i = 0; i < url.searchParams.get('items'); i++) {
            results.push(
              initialData[
                Math.floor(Math.random() * Math.floor(initialData.length))
              ],
            );
          }
        }

        return setTimeout(() => resolve(results), 1000);
      });
    }

    return fetch(api);
  };
};
