import React from 'react';
import {
  header,
  title,
  divider,
  tabs,
  tab,
  api,
  description,
  example as baseExample,
  importExample,
  playground,
  testkit,
} from 'wix-storybook-utils/Sections';
import LinkTo from '@storybook/addon-links/react';
import { storySettings } from './storySettings';
import SectionHelper from '../../SectionHelper';
import GoogleAddressInput from '..';
import allComponents from '../../../stories/utils/allComponents';
import { Category } from '../../../stories/storiesHierarchy';

import clients from '../../clients';
import GoogleAPILoader from '../../../stories/utils/GoogleAPILoader';

const example = config =>
  baseExample({ components: { ...allComponents, GoogleAPILoader }, ...config });

const basicExample = `
() => {
  const [value, setValue] = React.useState();
  return (
    <GoogleAPILoader>
      <GoogleAddressInput
        value={value}
        onChange={e => setValue(e.target.value)}
        onSet={e => setValue(e.originValue)}
        Client={clients.GoogleMapsClient}
     />
    </GoogleAPILoader>
    );
}
`;

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  component: GoogleAddressInput,
  componentPath: '..',

  componentWrapper: ({ component }) => (
    <GoogleAPILoader>{component}</GoogleAPILoader>
  ),
  componentProps: setProps => ({
    Client: clients.GoogleMapsClient,
    value: '',
    onChange: e => setProps({ value: e.target.value }),
    onSet: e => setProps({ value: e.originValue }),
    placeholder: 'Enter Address...',
  }),

  sections: [
    header(),

    tabs([
      tab({
        title: 'Description',
        sections: [
          description({
            text: (
              <SectionHelper title="Deprecated">
                {`Wix projects should now use the new `}
                <LinkTo kind={Category.COMPONENTS} story="AtlasAddressInput">
                  {`<AtlasAddressInput/>`}
                </LinkTo>
                {` component.\n`}
                {`Check the migration tab for more details.`}
              </SectionHelper>
            ),
          }),
          importExample(`
import { GoogleAddressInput, clients } from 'wix-style-react';
const client = clients.GoogleMapsClient;
            `),

          divider(),

          title('Examples'),

          example({
            title: 'Basic usage',
            source: basicExample,
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
