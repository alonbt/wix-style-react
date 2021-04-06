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
  playground,
  api,
  testkit,
} from 'wix-storybook-utils/Sections';

import { storySettings } from './storySettings';
import allComponents from '../../../stories/utils/allComponents';
import { examples } from './examples';
import GooglePreview from '..';

const example = config => baseExample({ components: allComponents, ...config });

export default {
  category: storySettings.category,
  storyName: 'GooglePreview',

  component: GooglePreview,
  componentPath: '..',

  componentProps: {
    title: 'Site Name | a title of your site',
    previewUrl: 'www.site-name.com',
    description: 'A short description for a site',
  },

  sections: [
    header({
      component: (
        <GooglePreview
          title="Site Name | a title of your site"
          previewUrl="www.site-name.com"
          description="A short description for a site"
        />
      ),
    }),

    tabs([
      tab({
        title: 'Description',
        sections: [
          description({
            title: 'Description',
            text:
              'A google preview displayer. Contains a title, url and description for SEO result',
          }),

          importExample("import { GooglePreview } from 'wix-style-react'"),

          divider(),
          title('Examples'),
          ...examples.map(example),
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
