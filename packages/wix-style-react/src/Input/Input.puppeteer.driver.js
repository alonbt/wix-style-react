/*
Testkit is not exported!!!
Input.uni.driver.js is exported as the puppeteer testkit
This driver is here only because it is still used inside NoBorderInput.puppeteer.driver.js
Once changed, this file will be removed!
*/
const inputDriverFactory = async (component, page) => {
  const input = await component.$('input');
  return {
    element: () => component,
    enterText: async text => {
      await input.focus();
      await input.type(text);
    },
    getText: () => page.evaluate(_input => _input.value, input),
  };
};

export default inputDriverFactory;
