import React from 'react';
import FloatingHelperContent from '..';
import Box from '../../../Box/Box';
import Text from '../../../Text/Text';
import { storySettings } from './storySettings';
import Image from 'wix-ui-icons-common/Image';
import * as examples from './examples';
import LinkTo from '@storybook/addon-links/react';

import {
  header,
  tabs,
  tab,
  description,
  title,
  divider,
  example as baseExample,
  playground,
  api,
  testkit,
  columns,
} from 'wix-storybook-utils/Sections';

import allComponents from '../../../../stories/utils/allComponents';
import { Category } from '../../../../stories/storiesHierarchy';

const example = config => baseExample({ components: allComponents, ...config });

const image = <Image width="102" height="102" />;

const componentProps = {
  title: 'This is the title',
  body: 'This is the a long text which is passed in the "body" property',
  actionText: 'Ok, Take Me There!',
  onActionClick: () => 'I was called!',
  appearance: 'light',
  actionTheme: 'standard',
};

const previewProps = {
  style: {
    width: '75%',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
};

const exampleProps = {
  onActionClick: () => 'I was called!',
  image: [{ label: 'with image', value: image }],
  footer: [
    {
      label: 'Dark appearance',
      value: (
        <Box align="center" verticalAlign="middle">
          <Text light>This is a footer of a dark appearance</Text>
        </Box>
      ),
    },
    {
      label: 'Light appearance',
      value: (
        <Box align="center" verticalAlign="middle">
          <Text>This is a footer of a light appearance</Text>
        </Box>
      ),
    },
  ],
};

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,
  component: FloatingHelperContent,
  componentPath: '..',
  componentProps,
  exampleProps,

  sections: [
    header({
      sourceUrl:
        'https://github.com/wix/wix-style-react/tree/master/src/FloatingHelper/FloatingHelperContent',
    }),

    tabs([
      tab({
        title: 'Description',
        sections: [
          columns([
            description({
              title: 'Description',
              text: [
                'This component should be used with the "content" prop of the  ',
                <LinkTo
                  kind={Category.COMPONENTS}
                  story="FloatingHelper"
                >{`<FloatingHelper/>`}</LinkTo>,
                ' component.',
              ],
            }),
          ]),

          divider(),

          title('Examples'),

          example({
            title: 'Appearance',
            text:
              '`<FloatingHelper.Content/>` has two appearances: `dark` (default) and `light`.',
            source: examples.appearance,
            previewProps,
          }),

          example({
            title: 'Action Button Themes',
            text:
              '`<FloatingHelper.Content/>` action button has 5 action themes: `white` (default) , `standard`, `standardPrimary`, `premium` and `lightPrimary`.',
            source: examples.actionThemes,
            previewProps,
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
