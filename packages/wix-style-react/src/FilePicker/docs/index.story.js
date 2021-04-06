import {
  header,
  tabs,
  tab,
  description,
  importExample,
  title,
  divider,
  example as baseExample,
  playground,
  api,
  testkit,
} from 'wix-storybook-utils/Sections';

import { storySettings } from './storySettings';
import FilePicker from '..';
import allComponents from '../../../stories/utils/allComponents';
import * as examples from './examples';

const example = config => baseExample({ components: allComponents, ...config });

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  component: FilePicker,
  componentPath: '..',

  componentProps: {
    mainLabel: 'Choose File',
    subLabel: 'No file chosen (Max size 5 MB)',
  },

  exampleProps: {
    onChange: file => file.name,
  },

  sections: [
    header(),

    tabs([
      tab({
        title: 'Description',
        sections: [
          description(
            'Component that opens system browser dialog for choosing files to upload',
          ),

          importExample(),

          divider(),

          title('Examples'),

          example({
            title: 'Simple Usage',
            source: examples.simple,
          }),
          example({
            title: 'FilePicker with error',
            source: examples.filePickerWithError,
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
