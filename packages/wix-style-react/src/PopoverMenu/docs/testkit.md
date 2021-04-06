# PopoverMenu Testkit

### Import

```jsx
import { PopoverMenuTestkit } from 'wix-style-react/dist/testkit';
import { PopoverMenuTestkit } from 'wix-style-react/dist/testkit/enzyme';
import { PopoverMenuTestkit } from 'wix-style-react/dist/testkit/puppeteer';
```

### API

| method                 | arguments | returned value     | description                                                                |
| ---------------------- | --------- | ------------------ | -------------------------------------------------------------------------- |
| exists                 | -         | `Promise<boolean>` | return true if element is in the DOM                                       |
| getTriggerElement      | dataHook  | `Promise<element>` | Returns trigger element                                                    |
| clickAtChild           | index     | `Promise<void>`    | Select a specific option by its index (requires the menu to be opened)     |
| clickAtChildByDataHook | dataHook  | `Promise<void>`    | Select a specific option by its data-hook (requires the menu to be opened) |
| isMenuOpen             | -         | `Promise<boolean>` | Return true if the menu is opened, otherwise return false                  |
| childrenCount          | -         | `Promise<number>`  | Returns children count                                                     |
| itemContentAt          | index     | `Promise<string>`  | Returns text of <PopoverMenu.MenuItem/> of a specific index                |
