# Dropdown Testkit

### Import

```jsx
import { DropdownTestkit } from 'wix-style-react/dist/testkit';
import { DropdownTestkit } from 'wix-style-react/dist/testkit/enzyme';
import { DropdownTestkit } from 'wix-style-react/dist/testkit/puppeteer';
```

### API

| method | arguments | returned value | description |
|--------|-----------|----------------|-------------|
| click | - | - | click on the component |
| getInput | - | element | get the input element |
| getDropdown | - | element | get the dropdown element |
| getDropdownItem | number | string | get the text in item index <arg> |
| getDropdownItemsCount | - | number | get number of options |
| element | - | element | get the actual element |
