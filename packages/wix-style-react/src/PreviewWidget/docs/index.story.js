import React from 'react';
import {
  header,
  tabs,
  tab,
  description,
  importExample,
  title,
  columns,
  divider,
  example as baseExample,
  playground,
  api,
  testkit,
} from 'wix-storybook-utils/Sections';

import { storySettings } from '../test/storySettings';
import allComponents from '../../../stories/utils/allComponents';

import PreviewWidget from '..';

import { skins, contentOutlines } from '../constants';

import { Text, Box } from 'wix-style-react';

const example = config => baseExample({ components: allComponents, ...config });

const childNode = (
  <Box padding="20px" backgroundColor="Y30">
    <Text>Content goes here</Text>
  </Box>
);

const childNodeString = `<Box padding="20px" backgroundColor="Y30">
        <Text>Content goes here</Text>
      </Box>`;

export default {
  category: storySettings.category,
  storyName: 'PreviewWidget',

  component: PreviewWidget,
  componentPath: '..',

  componentProps: {
    skin: skins.neutral,
    contentOutline: contentOutlines.shadow,
    backgroundColor: '',
    height: '100%',
    width: '100%',
    children: childNode,
  },

  sections: [
    header({
      component: (
        <PreviewWidget height="100px" width="250px">
          {childNode}
        </PreviewWidget>
      ),
    }),

    tabs([
      tab({
        title: 'Description',
        sections: [
          columns([
            description({
              title: 'Description',
              text: 'Preview content widget.',
            }),
          ]),

          importExample("import { PreviewWidget } from 'wix-style-react';"),

          divider(),

          title('Examples'),

          example({
            title: 'Skin',
            text:
              'PreviewWidget supports `neutral` (default), `gradient` and `custom` skins. To use `custom` skin, set it to `custom` and use the `backgroundColor` prop with the desired color',
            source: `<Layout>
                <Cell>
                    <PreviewWidget>${childNodeString}</PreviewWidget>
                </Cell>
                <Cell>
                    <PreviewWidget skin='gradient'>${childNodeString}</PreviewWidget>
                </Cell>
                <Cell>
                    <PreviewWidget skin='custom' backgroundColor='B10'>${childNodeString}</PreviewWidget>
                </Cell>
              </Layout>`,
          }),

          example({
            title: 'Content Outline',
            text:
              'PreviewWidget supports `shadow` (default), `border` or `none` content outline.',
            source: `<Layout>
                <Cell>
                    <PreviewWidget skin="custom" backgroundColor="D80">${childNodeString}</PreviewWidget>
                </Cell>
                <Cell>
                    <PreviewWidget skin="custom" backgroundColor="D80" contentOutline='border'>${childNodeString}</PreviewWidget>
                </Cell>
                <Cell>
                    <PreviewWidget skin="custom" backgroundColor="D80" contentOutline='none'>${childNodeString}</PreviewWidget>
                </Cell>
              </Layout>`,
          }),

          example({
            title: 'Custome Size',
            text:
              'PreviewWidget supports customizing the `height` and `width` of the component. The content area is centered. Default `height` and `width` are `100%` ',
            source: `<Layout>
                <Cell>
                    <PreviewWidget height="200px">${childNodeString}</PreviewWidget>
                </Cell>
                <Cell>
                    <PreviewWidget width="250px">${childNodeString}</PreviewWidget>
                </Cell>
              </Layout>`,
          }),

          example({
            title: 'Scrollable content',
            text:
              'PreviewWidget supports scroll for overflowed content. To enable this feature use `scrollable` prop.',
            source: `<Layout>
                <Cell>
                    <PreviewWidget scrollable height="200px"><Box padding="20px" backgroundColor="Y30"><Text>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. </Text></Box></PreviewWidget>
                </Cell>
              </Layout>`,
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
