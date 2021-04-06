### `<ComposerHeader.Actions/>`

#### Props

| Name           | Type   | Default Value  | isRequired | Description                |
| -------------- | ------ | -------------- | ---------- | -------------------------- |
| justifyContent | string | `'flex-start'` | false      | Alignment of Actions       |
| dataHook       | string | -              | false      | Hook for testing purposes  |
| ...rest        |        | -              | false      | Any valid style prop value |

### `<ComposerHeader.MainActions>`

#### Props

| Name     | Type   | Default Value | isRequired | Description               |
| -------- | ------ | ------------- | ---------- | ------------------------- |
| dataHook | string | -             | false      | Hook for testing purposes |

### `<ComposerHeader.SaveStatus>`

#### Props

| Name            | Type             | Default Value | isRequired | Description                       |
| --------------- | ---------------- | ------------- | ---------- | --------------------------------- |
| dataHook        | string           | -             | false      | Hook for testing purposes         |
| saveStatusValue | node             | -             | false      | Value for back button             |
| saveStatusError | bollean          | false         | false      | Error state for save status value |
| size            | 'small' 'medium' | 'medium'      | false      | Size of save status value         |
