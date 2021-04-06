import React from 'react';
import { storySettings } from './storySettings';
import {
  header,
  divider,
  tabs,
  tab,
  title,
  importExample,
  api,
  testkit,
  playground,
  description,
  example as baseExample,
  doDont,
} from 'wix-storybook-utils/Sections';
import allComponents from '../../../stories/utils/allComponents';
import * as examples from './examples';

import Input from '..';

const example = config => baseExample({ components: allComponents, ...config });

export default {
  category: storySettings.kind,
  storyName: storySettings.storyName,
  component: Input,
  componentPath: '../Input.js',

  componentProps: {},

  exampleProps: {
    status: [
      {
        label: 'Error',
        value: Input.StatusError,
      },
      {
        label: 'Warning',
        value: Input.StatusWarning,
      },
      {
        label: 'Loading',
        value: Input.StatusLoading,
      },
    ],
  },

  sections: [
    header({
      issueUrl: 'https://github.com/wix/wix-style-react/issues/new',
      sourceUrl: 'https://github.com/wix/wix-style-react/tree/master/src/Input',
      component: (
        <div style={{ width: '50%' }}>
          <Input />
        </div>
      ),
    }),

    tabs([
      tab({
        title: 'Design',
        sections: [
          description({
            title: 'Usage',
            text: 'Input allows to insert short text values. This component is used in submit forms or to build other form components like \`<Autocomplete/>\` or \`<NumberInput/>\`.<br/>',
          }),

          doDont({
            do: {
              list: [
                'To insert names, titles and other short textual information.',
                'To build custom inputs like Credit Card input.',
              ],
            },
            dont: {
              list: [
                'To insert long paragraphs, instead use the <InputArea/> component.',
                'As a search input, instead use the <Search/> component.',
              ],
            },
          }),

          importExample("import { Input } from 'wix-style-react';"),

          divider(),

          title('Variations'),

          example({
            title: 'Size',
            text: `
              Adjust the component size using \`size\` prop. It supports 3 sizes:<br/>
              &emsp;- \`large\` - use it in onboarding flows, where input needs emphasis.<br/>
              &emsp;- \`medium\` (default) - use in all common cases.<br/>
              &emsp;- \`small\` - use in more dense and narrow layouts.<br/>
            `,
            source: examples.size,
          }),

          example({
            title: 'Border',
            text: `
              Style the component using \`border\` prop. It supports 3 styles:<br/>
              &emsp;- \`default\` - use in all common cases.<br/>
              &emsp;- \`round\` (default) - use to build filter inputs, like search.<br/>
              &emsp;- \`bottomLine\` - use as a title which can be edited on the click.<br/>
            `,
            source: examples.border,
          }),

          example({
            title: 'Status',
            text: `
            Control component status using \`status\` prop. It supports 3 states:<br/>
              &emsp;- \`error\` - use to highlight invalid input value.<br/>
              &emsp;- \`warning\` - use to highlight inputs that values impact user business or can’t be validated.<br/>
              &emsp;- \`loading\` - use to show that the value is being uploaded to the server.<br/>
            `,
            source: examples.status,
          }),

          example({
            title: 'Status Message',
            text: `
              Explain the status with \`statusMessage\` prop. The message is revealed when a user mouse hovers the status icon.
              The placement of a tooltip is controlled with \`tooltipPlacement\` prop.
            `,
            source: examples.statusMessage,
          }),

          example({
            title: 'Read-Only and Disabled',
            text: `
              Control input interaction with:<br/>
              &emsp;- \`readOnly\` - disables writing new values, but allows to copy the current value. Use to display urls, codes and similar text.<br/>
              &emsp;- \`disabled\` - disables all input interactions. Use to highlight unavailable functions.<br/>
            `,
            source: examples.readOnlyAndDisabled,
          }),

          example({
            title: 'Affix',
            text: `
              Support input value with additional information added to \`prefix\` and \`suffix\` props. 
              Props can contain text, icons and even buttons.
            `,
            source: examples.affix,
          }),

          example({
            title: 'Clear Button',
            text: `
              Enable a button that clears input value by using \`clearButton\` prop.
              Show it when input’s value is optional or often has to be clear, for example date and search inputs.
            `,
            source: examples.clearButton,
          }),

          example({
            title: 'Text Overflow',
            text: `
              Control long text value truncation with \`textOverflow\` prop. It has 2 options:<br/>
              &emsp;- \`clip\`(default) - ends the text  with a sharp cut.<br/>
              &emsp;- \`ellipsis\` - shows ellipsis where  text is truncated. Use to emphasize that text doesn’t fit, especially when \`bottomLine\` style is enabled.<br/>
            `,
            source: examples.textOverflow,
          }),

          divider(),

          title('Common Use Cases'),

          example({
            title: 'Compound Input',
            text:
              'When multiple inputs represent the same data, like phone number or address input, fields can be stacked together using `Layout` component.',
            source: examples.compoundInput,
          }),

          example({
            title: 'Input as a title',
            text:
              'Input can be used as a card title when its border is set to bottomLine. This pattern is great when it’s needed to give a control to quickly organize groups and files.',
            source: examples.inputAsTitle,
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
