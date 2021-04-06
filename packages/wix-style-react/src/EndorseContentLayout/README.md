# EndorseContentLayout

Generic content layout for cases where confirmation, error, promotional or other dialogs are displayed.

You give components to props so all `onClick`, `onChange` or whatever is
handled by you however you like.

All props optional. None given, nothing rendered.

All props expect type `node` so simple text or any component is accepted.

## Properties

| propName     | propType | defaultValue | isRequired | description                                        |
| ---          | ---      | ---          | ---        | ---                                                |
| head         | node     |              | -          | Title thing, big text                              |
| content      | node     |              | -          | Description, text or whatever component you put in |
| primaryCta   | node     |              | -          | Usually a button but can be any component          |
| secondaryCta | node     |              | -          | Usually a link but can be any component            |

