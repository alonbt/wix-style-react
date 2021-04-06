import React from 'react';
import { storySettings } from './storySettings';

import EditableTitle from '..';
import {
  api,
  description,
  divider,
  example as baseExample,
  header,
  importExample,
  playground,
  tab,
  tabs,
  testkit,
  title,
} from 'wix-storybook-utils/dist/src/Sections';
import allComponents from '../../../stories/utils/allComponents';
import * as examples from './examples';

const example = config => baseExample({ components: allComponents, ...config });

export default {
  category: storySettings.category,
  storyName: 'EditableTitle',

  component: EditableTitle,
  componentPath: '..',

  componentProps: {
    initialValue: 'Some title',
    defaultValue: undefined,
  },

  sections: [
    header({
      sourceUrl: `https://github.com/wix/wix-style-react/tree/master/src/${EditableTitle.displayName}/`,
    }),

    tabs([
      tab({
        title: 'Description',
        sections: [
          description(
            `A text component to be used inside the PageHeader component as the title`,
          ),

          importExample("import { EditableTitle } from 'wix-style-react';"),

          divider(),

          title('Examples'),

          example({ title: 'With a value', source: examples.withValue }),
          example({
            title: 'With a default value',
            source: examples.widthDefaultValue,
          }),
          example({
            title: 'With a default value and an initial value',
            source: examples.widthDefaultValueAndInitialValue,
          }),
          example({
            title: 'With an ellipsis - initial',
            source: examples.withEllipsisInitial,
          }),
          example({
            title: 'With an ellipsis - default',
            source: examples.withEllipsisDefault,
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
