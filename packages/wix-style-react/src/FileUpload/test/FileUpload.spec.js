import React from 'react';
import { createRendererWithUniDriver, cleanup } from '../../../test/utils/unit';

import FileUpload from '../FileUpload';
import Button from '../../Button';
import { fileUploadPrivateDriverFactory } from './FileUpload.private.uni.driver';
import { Simulate } from 'react-dom/test-utils';

describe(FileUpload.displayName, () => {
  const render = createRendererWithUniDriver(fileUploadPrivateDriverFactory);

  afterEach(cleanup);

  const fileUploadExample = props => (
    <FileUpload onChange={() => {}} {...props}>
      {({ openFileUploadDialog }) => (
        <Button onClick={openFileUploadDialog}>upload file</Button>
      )}
    </FileUpload>
  );

  const file = new File(['(⌐@_@)'], 'myPicture.png', {
    type: 'image/png',
  });

  it('should render', async () => {
    const { driver } = render(fileUploadExample());

    expect(await driver.exists()).toBe(true);
  });

  it('should call onChange with the uploaded file', async () => {
    const onChange = _file => {
      expect(_file instanceof File).toBe(true);
    };
    const { driver } = render(fileUploadExample({ onChange }));
    await driver.simulateUpload(file);
  });
});
