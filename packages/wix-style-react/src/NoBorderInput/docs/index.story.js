import React from 'react';
import { storySettings } from './storySettings';

import NoBorderInput from '..';
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
import SectionHelper from '../../SectionHelper';

const example = config => baseExample({ components: allComponents, ...config });

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  component: NoBorderInput,
  componentPath: '..',

  componentProps: setState => ({
    value: '',
    label: 'No border input',
    placeholder: 'This is a placeholder',
    onChange: e => setState({ value: e.target.value }),
    size: 'normal',
    statusMessage: undefined,
  }),

  sections: [
    header({
      sourceUrl: `https://github.com/wix/wix-style-react/tree/master/src/${NoBorderInput.displayName}/`,
    }),

    tabs([
      tab({
        title: 'Description',
        sections: [
          description(
            `Displays an input with no borders, useful for editing inline text content`,
          ),

          description({
            text: (
              <SectionHelper appearance="danger" title="WARNING">
                This component is deprecated! Instead, we advise you to use
                <br />
                &lt;Input border="bottomLine"/&gt; instead.
              </SectionHelper>
            ),
          }),

          importExample(),

          divider(),

          title('Examples'),

          example({
            title: 'With placeholder',
            source: examples.withPlaceholder,
          }),
          example({ title: 'With label', source: examples.withLabel }),
          example({
            title: 'Controlled with state',
            source: examples.controlled,
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
