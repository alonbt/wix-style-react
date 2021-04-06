import {
  header,
  tabs,
  tab,
  title,
  description,
  importExample,
  divider,
  example as baseExample,
  api,
  testkit,
  playground,
} from 'wix-storybook-utils/Sections';

import Highlighter from '..';
import { storySettings } from './storySettings';
import allComponents from '../../../stories/utils/allComponents';
import * as examples from './examples';

const example = config => baseExample({ components: allComponents, ...config });

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  component: Highlighter,
  componentPath: '..',

  componentProps: () => ({
    children:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto consequuntur earum eius eum fugiat',
    match: '',
  }),

  sections: [
    header(),

    tabs([
      tab({
        title: 'Description',
        sections: [
          description(
            `It highlights string type children by wrapping match with strong dom element.
            It remains children element structure.`,
          ),

          importExample(),

          divider(),

          title('Examples'),

          example({ title: 'Simple Usage', source: examples.simple }),

          example({ title: 'Interactive', source: examples.interactive }),
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
