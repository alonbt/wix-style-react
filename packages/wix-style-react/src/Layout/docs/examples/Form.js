import React from 'react';

import { style, classes } from '../styles.st.css';

import {
  Layout,
  Cell,
  Card,
  FormField,
  Input,
  InputArea,
  Checkbox,
  Text,
  Button,
  RadioGroup,
} from 'wix-style-react';

export default () => (
  <div className={style(classes.exampleContainer)}>
    <Layout>
      {/* Big area, the main content */}
      <Cell span={8}>
        <Layout>
          <Cell>
            <Card>
              <Card.Header title="Various Inputs" />
              <Card.Divider />
              <Card.Content>
                <Layout>
                  <Cell>{field('Your Best Joke:', InputArea)}</Cell>
                  <Cell>{field('Your Email:')}</Cell>
                </Layout>

                {divider()}

                <Layout>
                  <Cell span={6}>{field('First Name:')}</Cell>
                  <Cell span={6}>{field('Second Name:')}</Cell>
                </Layout>

                {divider()}

                <Layout gap="10px">
                  <Cell span={3} vertical>
                    <Text>Home Address:</Text>
                  </Cell>
                  <Cell span={9} vertical>
                    {field('')}
                  </Cell>
                </Layout>

                {divider()}

                <Layout gap="10px">
                  <Cell>
                    <Text>Get In Touch</Text>
                  </Cell>
                  {['Name', 'Email', 'Phone No.'].map(label => (
                    <Cell
                      key={label}
                      span={4}
                      vertical
                      children={<Input placeholder={label} />}
                    />
                  ))}
                </Layout>

                {divider()}

                <Layout>
                  <Cell span={8} vertical>
                    <Checkbox>I Accept to Decline</Checkbox>
                  </Cell>

                  <Cell span={4}>
                    <Button>Useless Button</Button>
                  </Cell>
                </Layout>
              </Card.Content>
            </Card>
          </Cell>

          {['left', 'right'].map(direction => (
            <Cell span={6} key={direction}>
              {card(`something on the ${direction}`, 'Anything goes')}
            </Cell>
          ))}

          {['left', 'middle', 'right'].map(direction => (
            <Cell span={4} key={direction}>
              {card(`something on the ${direction}`, 'Anything goes')}
            </Cell>
          ))}
        </Layout>
      </Cell>

      {/* sidebar */}
      <Cell span={4}>
        <Card>
          <Card.Header title="Additional Info" />
          <Card.Divider />
          <Card.Content>
            <Text>{'No need for <Layout> for just column'}</Text>

            {divider()}

            <RadioGroup>
              {'Mixing and matching components is easy!'
                .split(' ')
                .map(word => (
                  <RadioGroup.Radio key={word}>{word}</RadioGroup.Radio>
                ))}
            </RadioGroup>

            {divider()}

            <Button>I Agree!</Button>
          </Card.Content>
        </Card>
      </Cell>
    </Layout>
  </div>
);

function field(label, component = Input) {
  return <FormField label={label}>{React.createElement(component)}</FormField>;
}

function divider() {
  return <div style={{ height: '30px' }} />;
}

function card(title, children) {
  return (
    <Card>
      <Card.Header title={title} />
      <Card.Divider />
      <Card.Content children={children} />
    </Card>
  );
}
