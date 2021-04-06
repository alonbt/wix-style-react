# `<FloatingHelper/>`

## Required Polyfills (For JSDom)

```javascript
import { requestAnimationFramePolyfill, rangePolyfill } from 'wix-style-react/dist/testkit/polyfills';

beforeAll(() => {
  rangePolyfill.install();
  requestAnimationFramePolyfill.install();
});
```
