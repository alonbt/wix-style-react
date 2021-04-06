# Testing pitfalls

* Testkit initialization - your testkit was initilized but you keep `false` for `.exists()`?
```js
const myTestkit = await ButtonTestkit({
  dataHook: 'myDataHook',
  page,
});
myTestkit.exists() // false :(
```
Make sure you initialized the testkit after the element exists

```js
page.waitForSelector('[data-name="myDataHook"]')
const myTestkit = await ButtonTestkit({
  dataHook: 'myDataHook',
  page,
});
``` 

