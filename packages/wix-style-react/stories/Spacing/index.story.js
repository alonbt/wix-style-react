import React from 'react';
import { description } from 'wix-storybook-utils/Sections';
import { storySettings } from './storySettings';
import { Layout, Cell } from '../../src/Layout';
import Text from '../../src/Text';
import Box from '../../src/Box';
import { stVars } from '../../src/Foundation/stylable/spacing.st.css';

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  sections: [
    description({
      title: 'Wix Style design system spacing presets',
    }),

    <div>
      <Text secondary>
        In order to ease up the layout process, wix-style-react provides spacing
        presets. All preset values are a multiplication of 6px.
      </Text>
      <Box marginTop="SP9">
        <Layout>
          {Object.entries(stVars)
            .filter(([key]) => key.startsWith('SP'))
            .map(([name]) => (
              <Cell key={name}>
                <Box width="150px" display="block">
                  <Layout gap={0}>
                    <Cell span={5}>
                      <Text size="medium">{name}</Text>
                    </Cell>
                    <Cell span={3}>
                      <Text>=</Text>
                    </Cell>
                    <Cell span={4}>
                      <Text secondary>
                        {`${
                          parseInt(name.substr(2)) * parseInt(stVars.Spacing)
                        }px`}
                      </Text>
                    </Cell>
                  </Layout>
                </Box>
              </Cell>
            ))}
        </Layout>
      </Box>
    </div>,
  ],
};
