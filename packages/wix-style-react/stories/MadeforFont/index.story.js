import React from 'react';
import { Category } from '../storiesHierarchy';
import { header, description } from 'wix-storybook-utils/Sections';
import LinkTo from '@storybook/addon-links/react';
import {
  Text,
  Heading,
  FontUpgrade,
  Box,
  Button,
  FormField,
  Input,
  Image,
} from '../../src';

const ContentHelper = ({ title, content }) => (
  <Box marginBottom="24px" direction="vertical">
    <Box marginBottom="12px">
      <Heading appearance="H2">{title}</Heading>
    </Box>
    {content}
  </Box>
);

const B = ({ children }) => <Text weight="bold">{children}</Text>;

const QA = ({ q, a }) => (
  <Box direction="vertical" marginBottom="12px">
    <B>Q: {q}</B>
    <Text>A: {a}</Text>
  </Box>
);

export default {
  category: Category.GETTINGSTARTED,
  storyName: 'Madefor Font',

  sections: [
    header(),

    description({
      text: (
        <>
          <ContentHelper
            title="What is it"
            content={
              <Text>
                <B>Madefor</B> is the new Wix brand font and it is ready to be
                implemented in your project
              </Text>
            }
          />
          <ContentHelper
            title="How does it look like?"
            content={
              <Box direction="vertical">
                {['Helvetica', 'Madefor'].map((v, k) => (
                  <FontUpgrade key={k} active={v === 'Madefor'}>
                    <Box marginBottom="18px" verticalAlign="bottom">
                      <Box marginRight="18px">
                        <FormField label={v}>
                          <Input placeholder={v} />
                        </FormField>
                      </Box>
                      <Button size="large">{v}</Button>
                    </Box>
                  </FontUpgrade>
                ))}
                <Text>
                  Explore more by clicking the{' '}
                  <Text weight="bold">Madefor Toggle</Text> in the storybook
                  toolbar and navigate through the{' '}
                  <LinkTo
                    kind={Category.CHEATSHEET}
                    story="Components Cheatsheet"
                  >
                    Cheatsheet
                  </LinkTo>{' '}
                  and any other component documentation page
                </Text>
              </Box>
            }
          />
          <ContentHelper
            title="How can I start using it?"
            content={
              <Text>
                In order to use the new font you will need to:
                <ul>
                  <li>
                    Include the Madefor font family css to your project's html
                    from the{' '}
                    <a
                      href="https://bo.wix.com/pages/wix-fonts/?path=/story/fonts--madefor"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      wix-fonts cdn
                    </a>
                  </li>
                  <li>
                    Apply the{' '}
                    <Text>
                      <LinkTo
                        kind={Category.COMPONENTS}
                        story="FontUpgrade"
                      >{`<FontUpgrade/>`}</LinkTo>
                    </Text>{' '}
                    component on the root of your application
                  </li>
                  <li>
                    Review your design with your UX designer to make sure it
                    looks ok
                  </li>
                </ul>
              </Text>
            }
          />
          <ContentHelper
            title="Dev FAQ"
            content={
              <div>
                <QA
                  q="I don't have an HTML file in my project, what should I do with the fonts?"
                  a={`If your application is rendered as a module in another host (e.g. Wix's Business Manager), then the font css should be added to the host only, and you should only apply the <FontUpgrade/> component yourself.`}
                />
                <QA
                  q="Some texts didn't change to Madefor, what can I do?"
                  a={`Take a look at the font-family definition with chrome dev tools to trace the problem. Then fix it locally or let us know if it's a global problem.`}
                />
              </div>
            }
          />

          <ContentHelper
            title="UX FAQ"
            content={
              <div>
                <QA
                  q="How to move from Helvetica to Madefor?"
                  a={`After moving to Madefor, Helvetica 45 will be Madefor 'thin', Helvetica 55 will be Madefor 'normal' and Helvetica 65 will be Madefor 'bold'.`}
                />
                <QA
                  q="Madefor font is wider than Helvetica, it broke my line!"
                  a={`The wider font can cause line break, It can be less readable or visually less nice.
You might want to adjust the content in these places.`}
                />
                <Box marginBottom={3}>
                  <Image src="madefor_example2.png" width="600px" />
                </Box>
              </div>
            }
          />
        </>
      ),
    }),
  ],
};
