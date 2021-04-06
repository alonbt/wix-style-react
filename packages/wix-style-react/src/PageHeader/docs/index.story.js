import React from 'react';
import PageHeader from '..';
import Breadcrumbs from '../../Page/test/examples/Breadcrumbs';
import { storySettings } from './storySettings';
import {
  api,
  example as baseExample,
  description,
  divider,
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
import { Button } from 'wix-style-react';

const example = config => baseExample({ components: allComponents, ...config });

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,
  component: PageHeader,
  componentPath: '../PageHeader.js',

  componentProps: {
    title: 'Page Header',
  },

  exampleProps: {
    onBackClicked: () => 'I was called!',
    breadcrumbs: [{ label: 'Breadcrumbs', value: Breadcrumbs }],
    actionsBar: [
      { label: 'Button', value: <Button>Action</Button> },
      {
        label: 'Two buttons',
        value: (
          <div>
            <Button>Button #1</Button>
            <Button>Button #2</Button>
          </div>
        ),
      },
    ],
  },

  sections: [
    header(),

    tabs([
      tab({
        title: 'Description',
        sections: [
          description(
            `A header that sticks at the top of the container which minimizes on scroll.`,
          ),

          importExample("import { PageHeader } from 'wix-style-react';"),

          divider(),

          title('Examples'),

          example({ title: 'Breadcrumbs', source: examples.breadcrumbs }),
          example({ title: 'Actionbar', source: examples.actionBar }),
          example({
            title: 'Editable title',
            description: 'Title can be set with the EditableTitle component',
            source: examples.editableTitle,
          }),
          example({
            title: 'Ellipsis',
            description:
              'Title is limited to a single line of text.\n' +
              'Subtitle is limited to 2 lines of text.\n',
            source: examples.ellipsis,
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
