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

import { storySettings } from '../test/storySettings';
import allComponents from '../../../stories/utils/allComponents';

import ListItemEditable from '..';
import * as examples from './examples';
import { commonTooltipPropsExample } from '../../../stories/utils/playgroundUtils';

const example = config => baseExample({ components: allComponents, ...config });

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  component: ListItemEditable,
  componentPath: '..',

  componentProps: {
    placeholder: 'Value',
    cancelButtonTooltipContent: 'Cancel',
    approveButtonTooltipContent: 'Approve',
    margins: 'none',
  },

  exampleProps: {
    status: ['error', 'warning', 'loading'],
    statusMessage: '',
    size: ['small', 'medium'],
    cancelButtonTooltipProps: commonTooltipPropsExample,
    approveButtonTooltipProps: commonTooltipPropsExample,
  },

  sections: [
    header({
      sourceUrl: `https://github.com/wix/wix-style-react/tree/master/src/${ListItemEditable.displayName}/`,
      component: (
        <ListItemEditable
          onApprove={() => {}}
          onCancel={() => {}}
          placeholder="Value"
          cancelButtonTooltipContent="Cancel"
          approveButtonTooltipContent="Approve"
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
              'ListItemEditable is an internal editable component which is used to build dropdown or menu like components. Usually this item should not be used by consumers, though custom options builder is exposed for usage with DropdownBase.',
          }),

          importExample(`
// Use directly
import { ListItemEditable } from 'wix-style-react';
// Or use a builder
import { listItemEditableBuilder } from 'wix-style-react';
`),

          divider(),

          title('Examples'),

          example({
            title: 'Size',
            text: '`<ListItemEditable/>` can be small (default) or medium size',
            source: examples.sie,
          }),

          example({
            title: 'With a status',
            text: `Setting a status to indicate some there's an issue.`,
            source: examples.status,
          }),

          example({
            title: 'Part of a dropdown',
            text:
              'The editable list item can be used alongside any other list item, build by a dedicated builder',
            source: examples.advanced,
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
