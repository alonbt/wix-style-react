import React from 'react';
import {
  header,
  tabs,
  tab,
  description,
  importExample,
  title,
  divider as sectionDivider,
  example as baseExample,
} from 'wix-storybook-utils/Sections';
import LinkTo from '@storybook/addon-links/react';
import { storySettings } from './storySettings';
import { businessDashboardComponents } from '../../../../stories/utils/allComponents';
import SectionHelper from '../../../SectionHelper';
import * as carousel from './components/Carousel';
import * as buttons from './components/Button';
import * as headings from './components/Heading';
import * as texts from './components/Text';
import * as textButtons from './components/TextButton';
import * as iconButtons from './components/IconButton';
import * as tooltips from './components/Tooltip';
import * as card from './components/Card';
import * as badge from './components/Badge';
import * as loader from './components/Loader';
import * as divider from './components/Divider';
import * as circularProgressBar from './components/CircularProgressBar';
import * as linearProgressBar from './components/LinearProgressBar';
import * as listItemSelect from './components/ListItemSelect';
import * as sidebar from './components/Sidebar';
import * as listItemActions from './components/ListItemAction';
import * as popoverMenu from './components/PopoverMenu';
import * as input from './components/Input';
import * as search from './components/Search';
import * as emptyState from './components/EmptyState';
import * as modal from './components/Modal';
import * as trendIndicator from './components/TrendIndicator';
import * as closeButton from './components/CloseButton';
import * as tag from './components/Tag';
import * as checkbox from './components/Checkbox';
import * as thumbnail from './components/Thumbnail';
import * as verticalTabsItem from './components/VerticalTabsItem';
import * as customModalLayout from './components/CustomModalLayout';
import * as tableListItem from './components/TableListItem';

import { Category } from '../../../../stories/storiesHierarchy';
import Box from '../../../Box';
import Text from '../../../Text';

const example = config =>
  baseExample({ components: businessDashboardComponents, ...config });

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  component: () => null,

  sections: [
    header({
      sourceUrl: `https://github.com/wix/wix-style-react/tree/master/src/Themes/businessDashboard/`,
    }),

    tabs([
      tab({
        title: 'Description',
        sections: [
          description({
            text: (
              <SectionHelper title="WARNING">
                Do not use this theme unless you've been instructed to
              </SectionHelper>
            ),
          }),

          description({
            title: 'Description',
            text: `
            This theme provides the flavor of the new Business manager dashboard design on top of wix-style-react components.
            Important: This is an experimental theme which might change, so do not use it unless you've been instructed to`,
          }),

          importExample(`
import { ThemeProvider } from 'wix-style-react';
import { theme } from 'wix-style-react/themes/businessDashboard';

() => (
  <ThemeProvider theme={theme({ active: true })}>
    ...
  </ThemeProvider>
);
          `),
          sectionDivider(),
          title('Playground'),
          example({
            text: TextComponent('Button'),
            source: buttons.playground,
          }),
          example({
            text: TextComponent('Carousel'),
            source: carousel.playground,
          }),
          example({
            text: TextComponent('CircularProgressBar'),
            source: circularProgressBar.playground,
          }),
          example({
            text: TextComponent('Divider'),
            source: divider.playground,
          }),
          example({
            text: TextComponent('LinearProgressBar'),
            source: linearProgressBar.playground,
          }),
          example({
            text: TextComponent('Heading'),
            source: headings.playground,
          }),
          example({
            text: TextComponent('Text'),
            source: texts.playground,
          }),
          example({
            text: TextComponent('TextButton'),
            source: textButtons.playground,
          }),
          example({
            text: TextComponent('IconButton'),
            source: iconButtons.playground,
          }),
          example({
            text: TextComponent('ListItemSelect'),
            source: listItemSelect.playground,
          }),
          example({
            text: TextComponent('Tooltip'),
            source: tooltips.playground,
          }),
          example({
            text: TextComponent('Sidebar'),
            source: sidebar.playground,
          }),
          example({
            text: TextComponent('Card'),
            source: card.playground,
          }),
          example({
            text: TextComponent('ListItemAction'),
            source: listItemActions.playground,
          }),
          example({
            text: TextComponent('PopoverMenu'),
            source: popoverMenu.playground,
          }),
          example({
            text: TextComponent('Badge'),
            source: badge.playground,
          }),
          example({
            text: TextComponent('Loader'),
            source: loader.playground,
          }),
          example({
            text: TextComponent('Input'),
            source: input.playground,
          }),
          example({
            text: TextComponent('Search'),
            source: search.playground,
          }),
          example({
            text: TextComponent('EmptyState'),
            source: emptyState.playground,
          }),
          example({
            text: TextComponent('Modal'),
            source: modal.playground,
          }),
          example({
            text: TextComponent('TrendIndicator'),
            source: trendIndicator.playground,
          }),
          example({
            text: TextComponent('CloseButton'),
            source: closeButton.playground,
          }),
          example({
            text: TextComponent('Tag'),
            source: tag.playground,
          }),
          example({
            text: TextComponent('Checkbox'),
            source: checkbox.playground,
          }),
          example({
            text: TextComponent('Thumbnail'),
            source: thumbnail.playground,
          }),
          example({
            text: TextComponent('VerticalTabsItem'),
            source: verticalTabsItem.playground,
          }),
          example({
            text: TextComponent('CustomModalLayout'),
            source: customModalLayout.playground,
          }),
          example({
            text: TextComponent('TableListItem'),
            source: tableListItem.playground,
          }),
        ],
      }),
    ]),
  ],
};

export function TextComponent(componentName) {
  return (
    <Box direction="horizontal" verticalAlign="middle" breakInside>
      <Box marginRight="SP1">
        <Text>Based&nbsp;on</Text>
      </Box>
      <Box marginRight="SP1">
        <LinkTo kind={Category.COMPONENTS} story={componentName}>
          {componentName}
        </LinkTo>
      </Box>
    </Box>
  );
}
