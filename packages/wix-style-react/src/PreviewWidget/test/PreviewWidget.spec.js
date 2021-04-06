import React from 'react';
import { createRendererWithUniDriver, cleanup } from '../../../test/utils/unit';

import PreviewWidget from '../PreviewWidget';
import { previewWidgetPrivateDriverFactory } from '../PreviewWidget.private.uni.driver';

import Box from '../../Box';
import Text from '../../Text';

const requiredProps = {
  children: (
    <Box padding="20px" backgroundColor="Y30">
      <Text>Content goes here</Text>
    </Box>
  ),
};

describe('PreviewWidget', () => {
  const render = createRendererWithUniDriver(previewWidgetPrivateDriverFactory);

  afterEach(cleanup);

  it('should render', async () => {
    const { driver } = render(<PreviewWidget {...requiredProps} />);

    expect(await driver.exists()).toBe(true);
  });

  it('should render the preview content', async () => {
    const previewContent = 'preview-content';
    const props = {
      children: <div>{previewContent}</div>,
    };
    const { driver } = render(<PreviewWidget {...requiredProps} {...props} />);

    expect(await driver.getContent().text()).toBe(previewContent);
  });
});
