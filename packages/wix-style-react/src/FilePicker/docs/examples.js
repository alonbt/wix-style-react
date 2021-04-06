export const simple = `
<FilePicker
  supportedFormats=".png, .pdf"
  onChange={file => console.log(file.name)}
/>
`;

export const filePickerWithError = `
<FilePicker
  supportedFormats=".png, .pdf"
  onChange={file => console.log(file.name)}
  error
  errorMessage="File is too large"
/>
`;
