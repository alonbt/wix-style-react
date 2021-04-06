import { storySettings } from './storySettings';
import {
  tab,
  importExample,
  api,
  testkit,
  playground,
  header,
  tabs,
  example as baseExample,
} from 'wix-storybook-utils/Sections';
import allComponents from '../../../stories/utils/allComponents';
import * as examples from './examples';

import { NumberInput } from 'wix-style-react';

const example = config => baseExample({ components: allComponents, ...config });

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,
  component: NumberInput,
  componentPath: '../NumberInput.js',

  componentProps: {
    step: 1,
    min: -5,
    max: 5,
  },

  sections: [
    header({
      issueUrl: 'https://github.com/wix/wix-style-react/issues/new',
      sourceUrl:
        'https://github.com/wix/wix-style-react/tree/master/src/NumberInput/',
    }),

    tabs([
      tab({
        title: 'Description',
        sections: [
          importExample("import { NumberInput } from 'wix-style-react';"),
          example({ title: 'Standard', source: examples.standard }),
          example({ title: 'Error', source: examples.error }),
          example({ title: 'Affix', source: examples.affix }),
          example({ title: 'Icon Affix', source: examples.iconAffix }),
          example({ title: 'Sizes', source: examples.sizes }),
          example({ title: 'Rounded', source: examples.rounded }),
          example({ title: 'Strict', source: examples.strict }),
          example({
            title: 'Hide Stepper',
            text:
              "In order to keep the component's functionality, another visual clue should be added, such as prefix or suffix.",
            source: examples.stepper,
          }),
          example({
            title: 'Controlled',
            source: examples.controlled,
            autoRender: false,
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
