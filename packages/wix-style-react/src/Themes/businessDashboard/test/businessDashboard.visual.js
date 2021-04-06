import React from 'react';
import businessDashboardTheme from '../BusinessDashboard';
import { runTests as ButtonTests } from '../../../Button/test/Button.visual';
import { runTests as CircularProgressBarTests } from '../../../CircularProgressBar/test/CircularProgressBar.visual';
import { runTests as DividerTests } from '../../../Divider/test/Divider.visual';
import { runTests as LinearProgressBarTests } from '../../../LinearProgressBar/test/LinearProgressBar.visual';
import { runTests as HeadingTests } from '../../../Heading/test/Heading.visual';
import { runTests as TextTests } from '../../../Text/test/Text.visual';
import { runTests as TextButtonTests } from '../../../TextButton/test/TextButton.visual';
import { runTests as IconButtonTests } from '../../../IconButton/test/IconButton.visual';
import { runTests as ListItemSelectTests } from '../../../ListItemSelect/test/ListItemSelect.visual';
import { runTests as SidebarTests } from '../../../Sidebar/test/Sidebar.visual';
import { runTests as SidebarBackButtonTests } from '../../../SidebarBackButton/test/SidebarBackButton.visual';
import { runTests as SidebarDividerTests } from '../../../SidebarDivider/test/SidebarDivider.visual';
import { runTests as SidebarHeaderTests } from '../../../SidebarHeader/test/SidebarHeader.visual';
import { runTests as SidebarSectionItemTests } from '../../../SidebarSectionItem/test/SidebarSectionItem.visual';
import { runTests as SidebarSectionTitleTests } from '../../../SidebarSectionTitle/test/SidebarSectionTitle.visual';
import { runTests as CardTests } from '../../../Card/Card.visual';
import { runTests as ListItemActionTests } from '../../../ListItemAction/test/ListItemAction.visual';
import { runTests as CarouselTests } from '../../../Carousel/test/Carousel.visual';
import { runTests as BadgeTests } from '../../../Badge/test/Badge.visual';
import { runTests as LoaderTests } from '../../../Loader/test/Loader.visual';
import { runTests as InputTests } from '../../../Input/test/Input.visual';
import { runTests as EmptyStateTests } from '../../../EmptyState/test/EmptyState.visual';
import { runTests as TrendIndicator } from '../../../TrendIndicator/test/TrendIndicator.visual';
import { runTests as CloseButtonTests } from '../../../CloseButton/test/CloseButton.visual';
import { runTests as TagTests } from '../../../Tag/test/Tag.visual';
import { runTests as CheckboxTests } from '../../../Checkbox/test/Checkbox.visual';
import { runTests as ThumbnailTests } from '../../../Thumbnail/test/Thumbnail.visual';
import { runTests as VerticalTabsItemTests } from '../../../VerticalTabsItem/test/VerticalTabsItem.visual';
import { runTests as CustomModalLayoutTests } from '../../../CustomModalLayout/test/CustomModalLayout.visual';
import { runTests as TableListItemTests } from '../../../TableListItem/test/TableListItem.visual';

import { ThemeProvider } from '../../..';

const themeName = 'Business Dashboard';
const testWithTheme = test => {
  return (
    <ThemeProvider theme={businessDashboardTheme()}>
      <>{test}</>
    </ThemeProvider>
  );
};

ButtonTests({ themeName, testWithTheme });
CircularProgressBarTests({ themeName, testWithTheme });
LinearProgressBarTests({ themeName, testWithTheme });
DividerTests({ themeName, testWithTheme });
HeadingTests({ themeName, testWithTheme });
TextTests({ themeName, testWithTheme });
TextButtonTests({ themeName, testWithTheme });
IconButtonTests({ themeName, testWithTheme });
CardTests({ themeName, testWithTheme });
CarouselTests({ themeName, testWithTheme });
SidebarTests({ themeName, testWithTheme });
SidebarBackButtonTests({ themeName, testWithTheme });
SidebarDividerTests({ themeName, testWithTheme });
SidebarHeaderTests({ themeName, testWithTheme });
SidebarSectionItemTests({ themeName, testWithTheme });
SidebarSectionTitleTests({ themeName, testWithTheme });
ListItemActionTests({ themeName, testWithTheme });
ListItemSelectTests({ themeName, testWithTheme });
BadgeTests({ themeName, testWithTheme });
LoaderTests({ themeName, testWithTheme });
InputTests({ themeName, testWithTheme });
EmptyStateTests({ themeName, testWithTheme });
TrendIndicator({ themeName, testWithTheme });
CloseButtonTests({ themeName, testWithTheme });
TagTests({ themeName, testWithTheme });
CheckboxTests({ themeName, testWithTheme });
ThumbnailTests({ themeName, testWithTheme });
VerticalTabsItemTests({ themeName, testWithTheme });
CustomModalLayoutTests({ themeName, testWithTheme });
TableListItemTests({ themeName, testWithTheme });
