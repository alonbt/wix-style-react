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
import Swatches from '../../Swatches/Swatches';
import * as examples from './examples';

import ColorPicker from '..';

const example = config => baseExample({ components: allComponents, ...config });
const code = config => baseCode({ components: allComponents, ...config });

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  component: ColorPicker,
  componentPath: '..',

  componentProps: {
    value: 'lightblue',
    showConverter: true,
    showInput: true,
    showHistory: false,
    allowEmpty: false,
    onChange: value => ({ value: value.alpha() === 0 ? '' : value.hex() }),
    onCancel: () => {},
    onConfirm: () => {},
  },

  exampleProps: {
    onChange: value => ({ value: value.alpha() === 0 ? '' : value.hex() }),
    onCancel: () => {},
    onConfirm: () => {},
    onAdd: value => value,
    addTooltipContent: [
      { label: 'With add tooltip content', value: 'Add your color' },
    ],
  },

  sections: [
    header({
      sourceUrl: `https://github.com/wix/wix-style-react/tree/master/src/${ColorPicker.displayName}/`,
    }),

    tabs([
      tab({
        title: 'Description',
        sections: [
          description({
            title: 'Description',
            text:
              'The Color picker component is used for selecting color by clicking and dragging cursor inside the picking area or directly entering the color value. Allows to convert different color formats (HEX/RGB/HSB). <br/> Under the hood uses color manipulation library [https://github.com/Qix-/color](https://github.com/Qix-/color). Value for this component can be given in `string` or `object` format. The callbacks always respond with color `object` format.',
          }),

          importExample(),

          divider(),

          title('Examples'),

          example({
            title: 'Simple Usage',
            text: 'A simple example of color picker',
            source: examples.simple,
          }),
          example({
            title: 'With Color Converter',
            text: 'Color Picker can be with `HEX`/`RGB`/`HSB` converter.',
            source: examples.withConverter,
          }),
          example({
            title: 'With History',
            text:
              'Whether to display the previously selected color. Used for comparing the current and previous selected colors.',
            source: examples.withHistory,
          }),
          example({
            title: 'With Empty Input',
            text:
              'Empty value can be allowed, in this case for the input can be set placeholder.',
            source: examples.withEmptyInput,
          }),
          example({
            title: 'With Children',
            text:
              'Node or function can be added as children above the action buttons.',
            source: examples.withChildren,
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
