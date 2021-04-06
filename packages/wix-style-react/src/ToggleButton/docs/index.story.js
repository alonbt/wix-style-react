import React from 'react';
import CropRotate from 'wix-ui-icons-common/CropRotate';
import {
  tab,
  tabs,
  api,
  playground,
  description,
  divider,
  importExample,
  columns,
  header,
  title,
  testkit,
  example as baseExample,
} from 'wix-storybook-utils/Sections';

import ToggleButton from '..';
import { Layout } from '../../Layout';
import { storySettings } from '../test/storySettings';
import icons from '../../../stories/utils/icons-for-story';
import allComponents from '../../../stories/utils/allComponents';
import * as examples from './examples';

const Link = ({ children, ...rest }) => <a {...rest}>{children}</a>;

const example = config =>
  baseExample({ components: { ...allComponents, Link }, ...config });

export default {
  category: storySettings.kind,
  storyName: storySettings.storyName,
  component: ToggleButton,
  componentPath: '..',

  componentProps: {
    as: 'button',
    children: <CropRotate />,
    skin: 'standard',
    shape: 'square',
    border: false,
    size: 'medium',
    selected: false,
    disabled: false,
    labelValue: 'Crop & Rotate',
    labelPlacement: 'tooltip',
    tooltipProps: { placement: 'top' },
  },

  exampleProps: {
    onClick: () => 'Clicked!',
    children: icons,
    as: ['button', 'a', 'span', 'div'],
  },

  sections: [
    header({
      component: (
        <Layout gap={0}>
          <ToggleButton labelValue="Crop & Rotate">
            <CropRotate />
          </ToggleButton>
        </Layout>
      ),
    }),

    tabs({
      tabs: [
        tab({
          title: 'Description',
          sections: [
            columns([
              description({
                text: `Toggle Button is used when action is lower priority than a regular action or there’s no space available to place a button with text.`,
              }),
            ]),

            importExample("import { ToggleButton } from 'wix-style-react';"),

            divider(),

            columns([title('Examples')]),

            example({
              title: 'Skin',
              text:
                'Toggle supports 4 skin styles – `standard`, `inverted`, `destructive` and `success`. Skin `dark` is deprecated.',
              source: examples.skins,
            }),

            example({
              title: 'Size',
              text:
                'Toggle Button supports 4 sizes: `tiny`, `small`, `medium` (default) and `large`',
              source: examples.sizes,
            }),

            example({
              title: 'Shape',
              text:
                'Toggle Button supports 2 shapes: `square` (default) or `round`',
              source: examples.shapes,
            }),

            example({
              title: 'Label',
              text:
                'Component’s action must be explained using text. Text’s label can be placed at the `end` or `bottom` of the icon or can appear in a `tooltip`',
              source: examples.labelPlacements,
            }),

            example({
              title: 'Selected',
              text:
                'It can be `selected` when needed to indicate that some state is enabled',
              source: examples.selected,
            }),

            example({
              title: 'Disabled',
              text:
                'It can be `disabled` when needed to indicate that action is available, but cannot be performed at the moment.',
              source: examples.disabled,
            }),

            example({
              title: 'Custom HTML tag',
              text: `
                  This component can be rendered as any given HTML tag – \`<button/>\`, \`<a/>\`, \`<Link/>\` (from react router), \`<div/>\`, \`<span/>\` etc.<br/>
                  All props/attributes will pass to the <em>rendered</em> HTML tag.<br/>
                  <br/>
                  For example:<br/>
                  - as an \`<a/>\`, the component can have attributes like \`href\`, \`target\`, etc.<br/>
                  - as a \`<Link/>\` from react router, the component can have props like \`to\`, \`replace\`, etc.
                `,
              source: examples.custom,
            }),
          ],
        }),

        ...[
          { title: 'API', sections: [api()] },
          { title: 'Testkit', sections: [testkit()] },
          { title: 'Playground', sections: [playground()] },
        ].map(tab),
      ],
    }),
  ],
};
