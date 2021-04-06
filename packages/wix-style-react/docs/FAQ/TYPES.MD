
   # Typescript type definitions in `wix-style-react`

## Background
`wix-style-react` was initially created as a Javascript library, using "PropTypes" to define the components APIs. In the past few years, many new projects were created with Typescript support, enjoying the benefits of types definitions. Due to that, we decided to gradually start adding type definitions to the library.

## Introducing the type definitions in the library
Adding type definitions to all the components in the library is not an easy task. Creating more than 400 type definitions for the components and their test kits, making sure props aren't missing, demystifying complex object structures and keeping them in sync while the library keeps evolving every day.

### Release

In order not to get code divergence, we decided to introduce the types in `wix-style-react@7` as a `minor` change.

### Type definitions correctness

All the types were tested and validated on projects heavily using the library, getting validation that they are very much accurate, however, there might still be some mismatches, so pull-requests for fixes will be highly apprecaiated

## Usage and common issues

### Using the new types

#### Should I do something in order to get the new type definitions?

**No!** all types are built-in in the library, so you get them out of the box.

#### I already use `wix-style-react` and my build got broken after types were added. What should I do?

First, we're really sorry about that, and our immediate solution is to **opt-out all types**. Simply add the following line to your `tsconfig.json`:
`"files": ["./node_modules/wix-style-react/ignore.d.ts"]`
Now that your build passes again, you can fix it whenever you are ready.

#### Opting-out specific components
If your components are imported like this `import Button from 'wix-style-react/Button'`, you can decide to **opt-out specific components**. This means you will get all of the component types, besides specific ones that break your project

1. Remove `./node_modules/wix-style-react/ignore.d.ts` from the `tsconfig.json` in case you added it.
2. Add a new file entry to your `tsconfig.json` files:
    `"files": ["./src/ignore-wsr-types.d.ts"]`.
3. Override only specific components
    ```ts
    //ignore-wsr-types.d.ts
    declare module 'wix-style-react/Button';
    ```
This option is great if most of the project work and you want to get the new types and only leave out those who are not working for you. When coming to fix your issue, simply comment out this override.

If you're consuming applying  "tree-shaking" by importing `ESModule` components (`import {Button} from 'wix-style-react'`), then this method will not work, unfortunately... you will need to continue opting-out the entire library.

#### Common reason for broken builds

1. You are using `string`, but the type is too permissive.
Wrong:
     ```tsx
    import { Button } from wix-style-react;
    const CompProps = {
      buttonSize: string;
    }
    class MyComponent<CompProps> {
       render() {
          <Button size={this.props.buttonSize}/>
      }
    }
     ```
    Correct:
    
    ```tsx 
    import { Button, ButtonSize } from wix-style-react;
    const CompProps = {
      buttonSize: ButtonSize;
    }
    class MyComponent<CompProps> {
       render() {
          <Button size={this.props.buttonSize}/>
      }
    }
    ```

2. You are passing a function that is too permissive.
     Wrong:
    ```tsx
     const onClick: Function;
     <Button onClick={onClick}/>
     ```
     
    Correct:
    ```tsx
    const onClick: React.MouseEventHandler<HTMLElement>;
    <Button onClick={onClick}/>
    ```
    
    Workaround:
    ```jsx
     <Button onClick={onClick as any}/>
    ```

3. You are using a redundant prop (e.g `upgrade`) which no longer exists.
   This prop has no longer any effect, but you still kept on passing it. In such case, just remove this prop.
   

#### I found an issue with your types
We'll appreciate it if you could [open an issue](https://github.com/wix/wix-style-react/issues/new/choose), and will be very happy if you could make a **pull-request** fixing it. We'll do our best to be as responsive as possible to get it merged.
