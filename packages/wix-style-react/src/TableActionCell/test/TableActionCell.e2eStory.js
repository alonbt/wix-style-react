import React from 'react';
import { storiesOf } from '@storybook/react';
import CodeExample from 'wix-storybook-utils/CodeExample';

import { getTestStoryKind } from '../../../stories/storiesHierarchy';
import { testStories, storySettings } from '../docs/storySettings';
import { classes } from '../docs/TableActionCell.story.st.css';

import PrimaryBlueExample from '../docs/examples/PrimaryBlueExample';
import PrimaryWhiteExample from '../docs/examples/PrimaryWhiteExample';
import PrimarySecondaryExample from '../docs/examples/PrimarySecondaryExample';
import PrimarySecondaryHiddenExample from '../docs/examples/PrimarySecondaryHiddenExample';
import PopoverMenuPropsExample from '../docs/examples/PopoverMenuPropsExample';
import AlwaysVisibleSecondaryExample from '../docs/examples/AlwaysVisibleSecondaryExample';
import OnlySecondaryExample from '../docs/examples/OnlySecondaryExample';
import OnlyVisibleSecondaryExample from '../docs/examples/OnlyVisibleSecondaryExample';
import PrimaryWithOnlyVisibleSecondaryExample from '../docs/examples/PrimaryWithOnlyVisibleSecondaryExample';
import PrimarySecondaryRTLExample from '../docs/examples/PrimarySecondaryRTLExample';
import DisabledSecondaryExample from '../docs/examples/DisabledSecondaryExample';
import DisabledPrimaryExample from '../docs/examples/DisabledPrimaryExample';
import SmallButtonsExample from '../docs/examples/SmallButtonsExample';

const kind = getTestStoryKind(storySettings);

storiesOf(kind, module).add(testStories.tableActionCell, () => (
  <div>
    <div className={classes.example}>
      <CodeExample title="Blue primary action">
        <PrimaryBlueExample />
      </CodeExample>
    </div>

    <div className={classes.example}>
      <CodeExample title="White primary action">
        <PrimaryWhiteExample />
      </CodeExample>
    </div>

    <div className={classes.example}>
      <CodeExample title="Primary action and secondary actions">
        <PrimarySecondaryExample />
      </CodeExample>
    </div>

    <div className={classes.example}>
      <CodeExample title="Primary action and hidden secondary action">
        <PrimarySecondaryHiddenExample />
      </CodeExample>
    </div>

    <div className={classes.example}>
      <CodeExample title="With custom PopoverMenu props">
        <PopoverMenuPropsExample />
      </CodeExample>
    </div>

    <div className={classes.example}>
      <CodeExample title="Always visible secondary actions">
        <AlwaysVisibleSecondaryExample />
      </CodeExample>
    </div>

    <div className={classes.example}>
      <CodeExample title="Only secondary actions">
        <OnlySecondaryExample />
      </CodeExample>
    </div>

    <div className={classes.example}>
      <CodeExample title="Only visible secondary actions">
        <OnlyVisibleSecondaryExample />
      </CodeExample>
    </div>

    <div className={classes.example}>
      <CodeExample title="Primary and secondary actions with RTL">
        <PrimarySecondaryRTLExample />
      </CodeExample>
    </div>

    <div className={classes.example}>
      <CodeExample title="Disabled secondary actions">
        <DisabledSecondaryExample />
      </CodeExample>
    </div>

    <div className={classes.example}>
      <CodeExample title="Disabled primary actions">
        <DisabledPrimaryExample />
      </CodeExample>
    </div>

    <div className={classes.example}>
      <CodeExample title="Primary with only visible secondary actions">
        <PrimaryWithOnlyVisibleSecondaryExample />
      </CodeExample>
    </div>

    <div className={classes.example}>
      <CodeExample title="Small buttons">
        <SmallButtonsExample />
      </CodeExample>
    </div>
  </div>
));
