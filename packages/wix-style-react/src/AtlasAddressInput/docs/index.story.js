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
import LinkTo from '@storybook/addon-links/react';

import * as examples from './examples';
import migrationMarkdown from './MIGRATION.md';
import SectionHelper from '../../SectionHelper';
import { storySettings } from '../test/storySettings';
import allComponents from '../../../stories/utils/allComponents';
import { Category } from '../../../stories/storiesHierarchy';

import AtlasAddressInput from '..';

const example = config =>
  baseExample({
    components: allComponents,
    ...config,
  });

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  component: AtlasAddressInput,
  componentPath: '..',

  componentProps: {
    clearButton: true,
    border: 'round',
    disabled: false,
    size: 'medium',
    placeholder: 'Placeholder text...',
    noResultsText: 'No results...',
  },

  exampleProps: {
    size: ['small', 'medium', 'large'],
  },

  sections: [
    header({
      sourceUrl: `https://github.com/wix/wix-style-react/tree/master/src/${AtlasAddressInput.displayName}/`,
    }),

    tabs([
      tab({
        title: 'Description',
        sections: [
          description({
            title: 'Description',
            text: [
              'An address search component, powered by Atlas autocompletion service.',
              <br />,
              'You can see how to customize address input layout in the ',
              <LinkTo kind={Category.COMPONENTS} story="AddressInput">
                {`<AddressInput/>`}
              </LinkTo>,
              ' component story.',
            ],
          }),

          description({
            text: (
              <SectionHelper title="Internal component">
                This is an internal Wix component which cannot be used outside
                of Wix projects.
              </SectionHelper>
            ),
          }),

          importExample(
            "import AtlasAddressInput from 'wix-style-react/AtlasAddressInput';",
          ),

          divider(),

          description({
            text: (
              <SectionHelper title="Dependencies" fullWidth>
                <p>
                  To use this component you must install the following
                  peer-dependencies:
                </p>
                <code>
                  npm install @wix/ambassador
                  @wix/ambassador-wix-atlas-service-web
                </code>
              </SectionHelper>
            ),
          }),

          description({
            title: 'Authorization',
            text: `Requests to Atlas must be authorized using an authorization header.\n
Check out this [Wix Doc](https://bo.wix.com/wix-docs/rnd/platformization-guidelines/authenticating-as-api-client#platformization-guidelines_authenticating-as-api-client_authenticating-from-a-browser---site-requests) on how to retreive a signed instance in your environment.\n
You can pass an authorization token to \`AtlasAddressInput\` using the \`token\` prop.`,
          }),

          divider(),

          title('Examples'),

          example({
            title: 'Basic usage',
            text: `
Atlas address input provides UI and the Atlas service internally.\n
This is a mock example, type anything to see suggestions that match your input.
            `,
            source: examples.simple,
          }),

          example({
            title: 'Display custom address',
            text: `
In order to custom the address displayed, the \`onSelect\` callback provides a \`getAddress\` function to fetch a [Wix Address Object](https://github.com/wix-private/p13n/blob/master/protos/common/src/main/proto/wix/common/address.proto) from Atlas.\n
In this example we want to display a postal code along with the address, try to type anything and select any suggestion.
            `,
            source: examples.controlled,
          }),

          example({
            title: 'Error handling',
            text: `
It's important to display errors when failing to fetch predictions.

In this example you can write <b>"Error 401"</b> (or any other status) to mock an error state.

We pass all errors to the \`onError\` handler prop.

Each error object has a \`httpStatus\` that describes which error occurred.
You can look at these [guidelines](https://bo.wix.com/wix-docs/rnd/platformization-guidelines/errors#platformization-guidelines_errors_errors) to learn about the meaning of each error status.

To show an error, set \`status="error"\` and \`statusMessage\` to the error explanation (displayed when hovering the status icon).
            `,
            source: examples.errorHandling,
          }),
        ],
      }),

      tab({
        title: 'Migration',
        sections: [description(migrationMarkdown)],
      }),

      ...[
        { title: 'API', sections: [api()] },
        { title: 'Testkit', sections: [testkit()] },
        { title: 'Playground', sections: [playground()] },
      ].map(tab),
    ]),
  ],
};
