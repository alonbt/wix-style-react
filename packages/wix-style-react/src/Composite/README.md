Using composite component validators, you can specify `children` requirements.
Or any other property of `node` type.

```js
const InputWithOptionalLabel = () => null;
InputWithOptionalLabel.propTypes = {
  children: children(optional(Label), once(Input))
};

const InputWithRequiredLabel = () => null;
InputWithRequiredLabel.propTypes = {
  children: children(once(Label), once(Input))
}

const Hero = () => null;
Hero.propTypes = {
  title: children(multiple(Label))
}
```
