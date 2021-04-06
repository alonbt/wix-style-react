import { storySettings } from './storySettings';
import {
  tab,
  code as baseCode,
  api,
  importExample,
  testkit,
  playground,
  header,
  tabs,
} from 'wix-storybook-utils/Sections';
import allComponents from '../../../../stories/utils/allComponents';
import * as examples from './examples';

import Subheader from '../Subheader';

const code = config => baseCode({ components: allComponents, ...config });

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,
  component: Subheader,
  componentPath: '../Subheader.js',

  componentProps: {
    title: 'Card Subheader',
    suffix: '',
    skin: 'standard',
  },

  sections: [
    header({
      issueUrl: 'https://github.com/wix/wix-style-react/issues/new',
      sourceUrl:
        'https://github.com/wix/wix-style-react/tree/master/src/Card/Subheader/',
    }),

    tabs([
      tab({
        title: 'Description',
        sections: [
          importExample({
            source: `
            import Card from 'wix-style-react/Card';
const Subheader = Card.Subheader;
            `,
          }),
          code({
            title: 'Example usage',
            compact: true,
            source: examples.sampleUsage,
          }),
          code({
            title: 'With text title prop',
            compact: true,
            source: examples.textTitle,
          }),
          code({
            title: 'Neutral skin',
            compact: true,
            source: examples.neutralSkin,
          }),
          code({
            title: 'With custom node as title',
            compact: true,
            source: examples.nodeTitle,
          }),
          code({
            title: 'With custom suffix',
            compact: true,
            source: examples.suffix,
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
