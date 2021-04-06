import React from 'react';
import { storiesOf } from '@storybook/react';
import { uniTestkitFactoryCreator } from 'wix-ui-test-utils/vanilla';

import RichTextInputArea from '..';
import richTextInputAreaPrivateDriverFactory from '../RichTextInputArea.private.uni.driver';
import Box from '../../Box';

const placeholderText = 'Default text goes here';
const interactiveDataHook = 'interactive-richtextinputarea';

const richTextInputAreaUniTestkitFactory = uniTestkitFactoryCreator(
  richTextInputAreaPrivateDriverFactory,
);
const createDriver = dataHook =>
  richTextInputAreaUniTestkitFactory({
    wrapper: document.body,
    dataHook,
  });

class InteractiveEyeTest extends React.Component {
  async componentDidMount() {
    this.props.componentDidMount();
  }

  render() {
    const { componentDidMount, ...restProps } = this.props;

    return (
      <Box marginTop={10}>
        <RichTextInputArea dataHook={interactiveDataHook} {...restProps} />
      </Box>
    );
  }
}

const tests = [
  {
    describe: 'Editor',
    its: [
      {
        it: 'Bold',
        props: {
          initialValue: `<p><strong>Text</strong></p>`,
        },
      },
      {
        it: 'Italic',
        props: {
          initialValue: `<p><em>Text</em></p>`,
        },
      },
      {
        it: 'Underline',
        props: {
          initialValue: `<p><u>Text</u></p>`,
        },
      },
      {
        it: 'Bulleted list',
        props: {
          initialValue: `<ul><li>Text</li><li>Text</li><li>Text</li></ul>`,
        },
      },
      {
        it: 'Numbered list',
        props: {
          initialValue: `<ol><li>Text</li><li>Text</li><li>Text</li></ol>`,
        },
      },
      {
        it: 'Link',
        props: {
          initialValue: `<p><a href="http://wix.com">Text</a></p>`,
        },
      },
    ],
  },
  {
    describe: 'Placeholder',
    its: [
      {
        it: 'Basic',
        props: {
          placeholder: placeholderText,
        },
      },
      {
        it: 'Hidden when editor has text',
        props: {
          placeholder: placeholderText,
          initialValue: 'Some text',
        },
      },
    ],
  },
  {
    describe: 'Disabled',
    its: [
      {
        it: 'Basic',
        props: {
          initialValue: 'Some text',
          disabled: true,
        },
      },
    ],
  },
  {
    describe: 'Max height',
    its: [
      {
        it: 'Default',
        props: {
          initialValue:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At consectetur lorem donec massa sapien faucibus et molestie ac. Sed viverra ipsum nunc aliquet. Condimentum vitae sapien pellentesque habitant morbi tristique senectus et netus. Semper feugiat nibh sed pulvinar proin gravida hendrerit. Risus viverra adipiscing at in tellus. Tincidunt arcu non sodales neque sodales ut etiam sit amet. Vitae purus faucibus ornare suspendisse sed nisi lacus sed viverra. Lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant. Vitae congue eu consequat ac. Ac odio tempor orci dapibus ultrices in. Velit aliquet sagittis id consectetur purus ut. Eu ultrices vitae auctor eu augue ut lectus arcu. Magna fringilla urna porttitor rhoncus dolor purus non enim. Diam vulputate ut pharetra sit amet. Enim nunc faucibus a pellentesque. Faucibus a pellentesque sit amet porttitor eget dolor. Ut placerat orci nulla pellentesque dignissim enim sit. Feugiat in fermentum posuere urna nec tincidunt. Lectus urna duis convallis convallis. Est ullamcorper eget nulla facilisi etiam dignissim. Eget arcu dictum varius duis at consectetur lorem donec. Cursus metus aliquam eleifend mi in nulla posuere. Risus nec feugiat in fermentum posuere urna. Quis vel eros donec ac odio tempor orci dapibus. Semper eget duis at tellus at urna condimentum mattis pellentesque. Sed libero enim sed faucibus turpis in eu mi. Varius duis at consectetur lorem donec massa. Maecenas pharetra convallis posuere morbi leo urna. Porttitor eget dolor morbi non arcu risus quis varius quam. At auctor urna nunc id. Eget dolor morbi non arcu risus quis varius quam. Commodo elit at imperdiet dui accumsan sit amet nulla facilisi. Non consectetur a erat nam at lectus urna duis. Nisl pretium fusce id velit. Eget nullam non nisi est sit.',
          maxHeight: '150px',
        },
      },
    ],
  },
  {
    describe: 'Min height',
    its: [
      {
        it: 'Default',
        props: {
          initialValue: 'Small text',
          minHeight: '150px',
        },
      },
    ],
  },
  {
    describe: 'Error',
    its: [
      {
        it: 'Display error design with indicator',
        props: {
          initialValue: 'Some text',
          status: 'error',
        },
      },
      {
        it: 'Hide error design and indicator when disabled',
        props: {
          initialValue: 'Some text',
          status: 'error',
          disabled: true,
        },
      },
    ],
  },
];

const interactiveTests = [
  {
    describe: 'Link insertion form',
    its: [
      {
        it: 'Disabled submit button when URL is empty',
        componentDidMount: async () => {
          const driver = createDriver(interactiveDataHook);
          await driver.clickLinkButton();
        },
      },
      {
        it: 'Enabled submit button when URL is not empty',
        componentDidMount: async () => {
          const driver = createDriver(interactiveDataHook);
          await driver.clickLinkButton();
          await driver.insertUrl('Some URL');
        },
      },
    ],
  },
  {
    describe: 'Interactive',
    its: [
      {
        it: 'Enter simple text',
        componentDidMount: async () => {
          const driver = createDriver(interactiveDataHook);
          await driver.enterText('This is a rich text area');
        },
      },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(
      `RichTextInputArea${describe ? '/' + describe : ''}`,
      module,
    ).add(it, () => <RichTextInputArea {...props} />);
  });
});

interactiveTests.forEach(({ describe, its }) => {
  its.forEach(({ it, props, componentDidMount }) => {
    storiesOf(
      `RichTextInputArea${describe ? '/' + describe : ''}`,
      module,
    ).add(it, () => (
      <InteractiveEyeTest {...props} componentDidMount={componentDidMount} />
    ));
  });
});
