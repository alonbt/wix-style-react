import * as React from 'react';
import * as examples from './examples';
import {
  description,
  header,
  api,
  divider,
  importExample,
  playground,
  tab,
  code as baseCode,
  tabs,
  testkit,
  title,
} from 'wix-storybook-utils/Sections';
import { allComponents } from '../../../../stories/utils/allComponents';
import { MobileDrawer } from '../';
import { storyComponent } from '../../../../stories/helperComponents/storyComponent';
import { StoryCategory } from '../../../../stories/storyHierarchy';

const code = (config) =>
  baseCode({ components: allComponents, compact: true, ...config });

const childrenExamples = [
  {
    label: 'Simple text',
    value: (
      <div
        style={{
          width: '100%',
          height: '320px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        This is the content!
      </div>
    ),
  },
];
export default {
  category: StoryCategory.COMPONENTS,
  storyName: 'MobileDrawer',
  component: storyComponent(MobileDrawer),
  componentPath: '../MobileDrawer.tsx',
  componentProps: (setState) => ({
    'data-hook': 'storybook-MobileDrawer',
    isOpen: false,
    onRequestClose: () => setState({ isOpen: false }),
    children: childrenExamples[0].value,
  }),
  exampleProps: {
    children: childrenExamples,
  },
  dataHook: 'storybook-MobileDrawer',
  sections: [
    header(),
    tabs([
      tab({
        title: 'Usage',
        sections: [
          description(
            'MobileDrawers provide access to destinations and functionality menus, such as Action Menus, Filter Dropdown etc. This component should be used on mobile only.',
          ),

          importExample({
            source: examples.importExample,
          }),

          divider(),

          title('Examples'),

          code({
            title: 'Simple Usage',
            description:
              'The component content is customizable. Use the `children` prop to add your content to the MobileDrawer.',
            source: examples.simpleExample,
          }),

          code({
            title: 'With Action Menu',
            description:
              'An example for the MobileDrawer with Action Menu as children.',
            source: examples.actionMenuExample,
          }),

          code({
            title: 'With Social Menu',
            description:
              'An example for the MobileDrawer with Social Menu as children.',
            source: examples.socialMenuExample,
          }),
        ],
      }),

      ...[
        { title: 'API', sections: [api()] },
        { title: 'TestKit', sections: [testkit()] },
        { title: 'Playground', sections: [playground()] },
      ].map(tab),
    ]),
  ],
};
