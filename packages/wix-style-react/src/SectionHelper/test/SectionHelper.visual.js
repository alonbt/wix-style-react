import React from 'react';
import { storiesOf } from '@storybook/react';
import { Layout, Cell } from '../../Layout';
import { Appearance } from '../constants';
import SectionHelper from '../index';

const commonProps = {
  title:
    'Look at this really long and important message that could in some cases contain many lengthy words like psychophysicotherapeutics!',
  children:
    'This is the content of very important message which actually has a lot of detailed explanation about various things. It may even have multiple sentences but they do not need to be those boring Lorem Ipsum',
  onClose: () => undefined,
};

storiesOf('SectionHelper', module)
  .add('Appearances', () => (
    <Layout>
      {Object.values(Appearance).map(appearance => (
        <Cell key={appearance}>
          <SectionHelper
            appearance={appearance}
            actionText="I understand the consequences"
            title="Look at this important message!"
            children="This is a very important message"
            onAction={() => undefined}
            showCloseButton
            onClose={() => undefined}
          />
        </Cell>
      ))}
    </Layout>
  ))
  .add('Padding: with/without CloseButton', () => (
    <div style={{ width: '250px' }}>
      <Layout>
        <Cell>
          <SectionHelper {...commonProps} showCloseButton />
        </Cell>
        <Cell>
          <SectionHelper {...commonProps} showCloseButton={false} />
        </Cell>
      </Layout>
    </div>
  ));
