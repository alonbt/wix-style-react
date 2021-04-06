export const simple = `
<FileUpload onChange={files => console.log(files)}>
{({ openFileUploadDialog })=> <Button onClick={openFileUploadDialog}>Upload a File</Button>}
</FileUpload>
`;
export const withMultipleAndAccept = `
<FileUpload
  onChange={files => console.log(files)}
  multiple
  accept=".jpeg,.gif,.png"
>
{({ openFileUploadDialog })=> (
  <TextButton prefixIcon={<Icons.Image />} onClick={openFileUploadDialog}>
    Upload Images
  </TextButton>
)}
</FileUpload>
`;
