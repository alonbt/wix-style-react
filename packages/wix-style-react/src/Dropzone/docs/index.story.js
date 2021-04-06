import React from 'react';
import {
  header,
  tabs,
  tab,
  description,
  importExample,
  title,
  divider,
  example as baseExample,
  code as baseCode,
  playground,
  api,
  testkit,
} from 'wix-storybook-utils/Sections';

import { storySettings } from '../test/storySettings';
import allComponents from '../../../stories/utils/allComponents';

import Dropzone from '..';
import Box from '../../Box';

const example = config => baseExample({ components: allComponents, ...config });
const code = config => baseCode({ components: allComponents, ...config });

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  component: Dropzone,
  componentPath: '..',

  componentProps: {
    children: [
      <Dropzone.Overlay>
        <Box
          height="250px"
          width="250px"
          backgroundColor="lightgreen"
          align="center"
        >
          <Box margin="auto">Overlay</Box>
        </Box>
      </Dropzone.Overlay>,
      <Dropzone.Content>
        <Box
          height="250px"
          width="250px"
          backgroundColor="lightblue"
          align="center"
        >
          <Box margin="auto">Content</Box>
        </Box>
      </Dropzone.Content>,
    ],
  },

  exampleProps: {
    onDrop: files => `dropped file: ${files[0].name}`,
  },

  sections: [
    header({
      sourceUrl: `https://github.com/wix/wix-style-react/tree/master/src/${Dropzone.displayName}/`,
    }),

    tabs([
      tab({
        title: 'Description',
        sections: [
          description({
            title: 'Description',
            text: 'Defines a region in the page where files can be dropped.',
          }),

          importExample(),

          divider(),

          title('Example'),

          example({
            title: 'Usage',
            text:
              'Sample usage for the Dropzone component. This will create a region in the page where you could drop files onto and do with them as you please.',
            source: `
() => {
  const [src, setSrc] = React.useState();

  return (
    <Box direction="vertical">
      <Text>Drag an image file here:</Text>
      <Box height="250px" width="250px">
        <Dropzone
          onDrop={files => {
            const reader = new FileReader();
            reader.onloadend = function() {
              setSrc(reader.result);
            };

            reader.readAsDataURL(files[0]);
          }}
        >
          <Dropzone.Overlay>
            <AddItem size="large">Drop image here</AddItem>
          </Dropzone.Overlay>
          <Dropzone.Content>
            <Image height="250px" width="250px" src={src} />
          </Dropzone.Content>
        </Dropzone>
      </Box>
    </Box>
  );
};
            `,
          }),
        ],
      }),

      ...[
        { title: 'API', sections: [api()] },
        { title: 'Testkit', sections: [testkit()] },
        { title: 'Playground', sections: [playground()] },
      ].map(tab),
    ]),
  ],
};
