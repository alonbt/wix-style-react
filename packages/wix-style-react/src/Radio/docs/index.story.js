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

import { storySettings } from '../test/storySettings';
import allComponents from '../../../stories/utils/allComponents';
import * as examples from './examples';

import Radio from '..';

const example = config => baseExample({ components: allComponents, ...config });

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  component: Radio,
  componentPath: '..',

  componentProps: {
    checked: true,
    disabled: false,
    alignItems: 'center',
    label: 'Radio label',
  },

  sections: [
    header({
      sourceUrl: `https://github.com/wix/wix-style-react/tree/master/src/${Radio.displayName}/`,
    }),

    tabs([
      tab({
        title: 'Description',
        sections: [
          description({
            title: 'Description',
            text:
              'Radio button represents an item of a single selection list. It is a part of RadioGroup or can be used to recreate it.',
          }),

          importExample(),

          divider(),

          title('Examples'),

          example({
            title: 'Structure',
            text:
              'Radio button consists of a radio itself and a label on the side.',
            source: examples.structure,
          }),
          example({
            title: 'States',
            text:
              'Radio button has three states - `default`, `checked` and `disabled`.',
            source: examples.states,
          }),
          example({
            title: 'Label',
            text:
              'Label value accepts `node` or `string` based values. It is recommended to use `string` as it complies with design systems typography.',
            source: examples.label,
          }),
          example({
            title: 'Alignment',
            text:
              'Radio is vertically centered to its label by default. Items can be aligned to the top with alignItems prop.',
            source: examples.alignment,
          }),
          example({
            title: 'Advanced Example',
            text: 'Radio can be used to recreate Radio Group.',
            source: examples.advancedRadioGroup,
          }),
          example({
            title: 'Advanced Example',
            text: 'Radio can be used to build custom selection lists.',
            source: examples.advancedCustomSelection,
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
