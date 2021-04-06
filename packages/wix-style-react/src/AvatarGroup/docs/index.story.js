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
  doDont,
} from 'wix-storybook-utils/Sections';

import { storySettings } from '../test/storySettings';
import allComponents from '../../../stories/utils/allComponents';
import * as examples from './examples';
import AvatarGroup from '..';

const avatarItems = [
  {
    ariaLabel: 'Avatar for John Doe',
    color: 'A1',
    name: 'John Doe',
    title: 'Wix Account: John Doe (johndoe@gmail.com)',
  },
  {
    ariaLabel: 'Avatar for Snoop Dogg',
    name: 'Snoop Dogg',
    title: 'Wix Account: Snoop Dogg (dog@gmail.com)',
  },
  {
    ariaLabel: 'Avatar for Sia Kate',
    imgProps: {
      src:
        'https://lh3.googleusercontent.com/proxy/EI3faU3-0hCPyjBKktiVuPKfZTMXx6BsDFE0f7UBr_8CKSMRWL28dLZJrWGWExcTRgWI2v3pcuBT19YpJ-xdmxla4mmqWw',
    },
    name: 'Sia Kate',
  },
  {
    ariaLabel: 'Avatar for Steven Tyler',
    title: 'Wix Account: Steven Tyler (steventyler@gmail.com)',
  },
  {
    ariaLabel: 'Avatar for Karen Carpenter',
    name: 'Karen Carpenter',
    title: 'Wix Account: Karen Carpenter (karencarpenter@gmail.com)',
  },
  {
    name: 'Levon Helm',
    title: 'Wix Account: Levon Helm (levonhelm@gmail.com)',
  },
  {
    ariaLabel: 'Avatar for Willie Nelson',
    name: 'Willie Nelson',
    title: 'Wix Account: Willie Nelson (willienelson@gmail.com)',
  },
  {
    ariaLabel: 'Avatar for Patti Smith',
    name: 'Patti Smith',
  },
];
const example = config => baseExample({ components: allComponents, ...config });

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  component: AvatarGroup,
  componentPath: '..',

  componentProps: {
    showDivider: true,
    type: 'stretched',
    size: 'medium',
    maxItems: 5,
    items: [...avatarItems],
  },

  exampleProps: {},

  sections: [
    header({
      sourceUrl: `https://github.com/wix/wix-style-react/tree/master/src/${AvatarGroup.displayName}/`,
    }),

    tabs([
      tab({
        title: 'Design',
        sections: [
          description({
            title: 'Usage',
            text: `AvatarGroup allows to display a number of avatars (digital representation of a user) as a single entity. It’s a building block grouping number of standalone <Avatar/> components.`,
          }),

          doDont({
            do: {
              list: [
                'To display a group of 2+ users',
                'To display users that have something in common (i.e. belong to a project, are in the same team, attend the same event, etc.)',
              ],
            },
            dont: {
              list: [
                'To display single avatar',
                'To display visual content other than users (i.e. images - use <Image/>)',
              ],
            },
          }),

          importExample("import { AvatarGroup } from 'wix-style-react'"),

          divider(),

          title('Variations'),

          example({
            title: 'Size',
            text:
              'Controls size of a component. It supports 2 sizes:' +
              '\n' +
              ' - medium (default)- use in all common cases\n' +
              ' - small -  use to de-emphasise the group, also in more dense and narrow layouts',
            source: examples.size,
          }),

          example({
            title: 'Group type',
            text:
              'Changes density of a group. Component supports 2 types: \n' +
              ' - stretched (default)- use when each user is as important as a group as a whole \n' +
              ' - condensed - use in narrow layouts and in cases where it is important to show the sum of the people rather than individuals',
            source: examples.groupType,
          }),
          example({
            title: 'Divider',
            text:
              'Separates first avatar from the rest of the group to highlight the difference of a status or role (i.e. admin, team lead, etc). \n' +
              '\n' +
              'Component allows to separate single avatar only, which must be a first item on the list.\n',
            source: examples.divider,
          }),

          example({
            title: 'Max number of items',
            text:
              'Defines the maximum number of  items to show before collapsing them. \n' +
              '\n' +
              'By default component displays up to 5 items. The ‘N+’ indication will replace the last avatar, in case the number exceeds this limit.\n',
            source: examples.maxItems,
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
