import React from 'react';
import {
  tabs,
  tab,
  description,
  importExample,
  title,
  divider,
  example as baseExample,
} from 'wix-storybook-utils/Sections';
import AllIcons from 'wix-ui-icons-common/dist/es/stories/general/GeneralCategoryList';
import API_Table from 'wix-ui-icons-common/dist/es/stories/APITable';
import TextButton from '../../src/TextButton';

import allComponents from '../utils/allComponents';
import { foundationSymbols } from '../symbolsComponentsMapping/symbols';
import { Category } from '../storiesHierarchy';
import * as examples from './examples';
import SectionHelper from '../../src/SectionHelper';
import Box from '../../src/Box';

const packageURL = 'https://www.npmjs.com/package/wix-ui-icons-common';

const example = config => baseExample({ components: allComponents, ...config });

export default {
  category: Category.FOUNDATION,
  storyName: foundationSymbols.icons,

  sections: [
    tabs([
      tab({
        title: 'Inventory',
        sections: [
          description({
            title: 'Description',
            text: [
              'To use icons, please install a separate ',
              <TextButton
                as="a"
                href={packageURL}
                underline="onHover"
                size="small"
                target="_blank"
              >
                wix-ui-icons-common
              </TextButton>,
              ' package.',
            ],
          }),

          importExample(
            "import Duplicate from 'wix-ui-icons-common/Duplicate';\n",
          ),

          divider(),
          <AllIcons />,
        ],
      }),

      tab({
        title: 'Common Usages',
        sections: [
          <Box marginBottom="50px">
            <SectionHelper appearance="danger" title="Important">
              In storybook, we import icons using "Icons" prefix. When using in
              your application, remember to remove this prefix.
            </SectionHelper>
          </Box>,

          title('Examples'),

          example({
            title: 'Custom Icon color',
            description:
              "The icon is an svg that inherits its parent's color or can directly be colored by passing a `className` or using the `style` prop.",
            source: examples.colorsExample,
          }),

          example({
            title: 'Icon Size',
            description:
              'Most icons have two versions: medium- `24px` x `24px` and small- `18px` x `18px`. A small icon has the `Small` suffix.',
            source: examples.sizesExample,
          }),

          example({
            title: 'Usage',
            source: examples.usageExample,
          }),
        ],
      }),

      tab({
        title: 'API',
        sections: [description({ title: 'Props', text: API_Table })],
      }),
    ]),
  ],
};
