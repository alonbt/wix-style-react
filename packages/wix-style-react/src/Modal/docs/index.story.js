import React from 'react';
import {
  tab,
  tabs,
  api,
  header,
  divider,
  columns,
  title,
  playground,
  example as baseExample,
  description,
  importExample,
  testkit,
  doDont,
} from 'wix-storybook-utils/Sections';

import { storySettings } from '../test/storySettings';

import allComponents from '../../../stories/utils/allComponents';
import * as examples from './examples';
import { Modal, Box, Button } from 'wix-style-react';

const example = config => baseExample({ components: allComponents, ...config });

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,
  component: Modal,
  componentPath: '..',
  componentWrapper: ({ component }) => (
    <Box>
      <Button onClick={() => component.props.onRequestClose()}>
        Open Modal
      </Button>
      {component}
    </Box>
  ),

  componentProps: (setState, getState) => ({
    isOpen: false,
    shouldDisplayCloseButton: true,
    shouldCloseOnOverlayClick: true,
    onRequestClose: () => setState({ isOpen: !getState().isOpen }),
    children: (
      <Box
        width="50vw"
        height="50vh"
        align="center"
        verticalAlign="middle"
        backgroundColor="D80"
      >
        This is the content!
      </Box>
    ),
  }),

  sections: [
    header(),

    tabs([
      tab({
        title: 'Design',
        sections: [
          columns([
            description({
              title: 'Usage',
              text: 'Modal controls the overlay layout that appears on call functions. It’s a container for components like \`CustomModalLayout\`, \`ModalPreviewLayout\` and others.',
            }),
          ]),

          doDont({
            do: {
              list: [
                'To reveal all types of modal layouts',
                'To display a full page loading state',
              ],
            },
          }),

          importExample("import { Modal } from 'wix-style-react';"),

          divider(),

          title('Variations'),

          example({
            title: 'Structure',
            text: `
              Render modal content by using \`children\` prop. Control modal appearance with props:<br/>
              &emsp;- \`isOpen\` - this bool prop shows and hides the modal.<br/>
              &emsp;- \`onRequestClose\` - this prop calls a function you request. It can be used to control isOpen prop.<br/>
            `,
            source: examples.structure,
          }),

          example({
            title: 'Side Margins',
            text: `
              Control the spacing between the viewport and modal content by using \`screen\` prop. It has 3 options:<br/>
              &emsp;- \`full\` (default) - used with ModalMobileLayout.<br/>
              &emsp;- \`desktop\` - used with all major desktop modals.<br/>
              &emsp;- \`mobile\` - used with ModalMobileLayout component.<br/>
            `,
            source: examples.sideMargins,
          }),

          divider(),

          title('Common Use Cases'),

          example({
            title: 'Desktop modal with popover elements',
            text:
              'Modal layouts prevent content overflowing, therefore it’s important to use popover `appendTo` prop to make sure the content is displayed correctly.',
            source: examples.modalWithForm,
          }),

          divider(),

          title('Feedback'),

          description(
            'You can help us improve this component by providing feedback, asking questions or leaving any  other comments via `#wix-style-ux` or `#wix-style-react` Slack channels or GitHub. Found a bug? Please report it to: <a href="https://goo.gl/forms/wrVuHnyBrEISXUPF2" target="_blank">goo.gl/forms/wrVuHnyBrEISXUPF2</a>',
          ),
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
