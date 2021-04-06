import React from 'react';
import { description } from 'wix-storybook-utils/Sections';
import { storySettings } from './storySettings';
import { Layout, Cell } from '../../src/Layout';
import colors from '../../src/colors.scss';
import Text from '../../src/Text';
import Box from '../../src/Box';
import rgba_to_hex8 from '../../src/Foundation/stylable/mixins/rgba_to_hex8';

const empty = {};
const lightText = true;
const darkBorder = true;

const colorsTable = [
  {
    name: 'General',
    units: [
      empty,
      empty,
      {
        name: 'D10',
        description: 'Text',
        lightText,
      },
      {
        name: 'D20',
        description: 'Secondary Text',
        lightText,
      },
      {
        name: 'D30',
      },
      {
        name: 'D40',
        description: 'Placeholder Text',
        lightText,
      },
      {
        name: 'D50',
        darkBorder,
      },
      {
        name: 'D55',
        darkBorder,
      },
      {
        name: 'D60',
        description: 'Divider',
        darkBorder,
      },
      {
        name: 'D70',
        description: 'Background',
        darkBorder,
      },
      {
        name: 'D80',
        description: 'card',
        darkBorder,
      },
    ],
  },
  {
    name: 'Primary',
    units: [
      {
        name: 'B00',
        description: 'Loader, ProgressBar',
        lightText,
      },
      {
        name: 'B05',
      },
      {
        name: 'B10',
        description: 'Button, Text Link (Default; Click)',
        lightText,
      },
      {
        name: 'B20',
        description: 'Button (Hover), Notification Bar',
      },
      {
        name: 'B30',
        description: 'Tag (Hover), Floating Notification Border',
      },
      {
        name: 'B40',
        description: 'Tag(Default), Badge',
      },
      {
        name: 'B50',
        description: 'Floating Notification',
        darkBorder,
      },
      empty,
      {
        name: 'B60',
        darkBorder,
      },
    ],
  },
  {
    name: 'Destructive',
    units: [
      {
        name: 'R00',
      },
      {
        name: 'R05',
      },
      {
        name: 'R10',
        description: 'Button, Text Link (Default; Click)',
        lightText,
      },
      {
        name: 'R20',
        description: 'Button (Hover), Notification Bar',
      },
      {
        name: 'R30',
        description: 'Tag (Hover), Floating Notification Border',
      },
      {
        name: 'R40',
        description: 'Tag(Default), Badge',
      },
      {
        name: 'R50',
        description: 'Floating Notification',
        darkBorder,
      },
      empty,
      {
        name: 'R60',
        darkBorder,
      },
    ],
  },
  {
    name: 'Premium',
    units: [
      {
        name: 'P00',
      },
      empty,
      {
        name: 'P10',
        description: 'Button, Text Link (Default; Click)',
        lightText,
      },
      {
        name: 'P20',
        description: 'Button (Hover), Notification Bar',
      },
      {
        name: 'P30',
        description: 'Notification Border',
      },
      {
        name: 'P40',
        description: 'Badge',
      },
      {
        name: 'P50',
        description: 'Floating Notification',
        darkBorder,
      },
      empty,
      {
        name: 'P60',
        darkBorder,
      },
    ],
  },
  {
    name: 'Success',
    units: [
      {
        name: 'G00',
      },
      {
        name: 'G05',
      },
      {
        name: 'G10',
        description: 'Badge',
        lightText,
      },
      {
        name: 'G20',
        description: 'Notification Bar',
      },
      {
        name: 'G30',
        description: 'Notification Border',
      },
      {
        name: 'G40',
        description: 'Badge',
      },
      {
        name: 'G50',
        description: 'Floating Notification',
        darkBorder,
      },
      empty,
      {
        name: 'G60',
        darkBorder,
      },
    ],
  },
  {
    name: 'Warning',
    units: [
      {
        name: 'Y00',
      },
      {
        name: 'Y05',
      },
      {
        name: 'Y10',
        description: 'Notification Bar, Badge',
        lightText,
      },
      {
        name: 'Y20',
      },
      {
        name: 'Y30',
        description: 'Tag (Hover), Floating Notification Border',
      },
      {
        name: 'Y40',
        description: 'Tag(Default), Badge',
      },
      {
        name: 'Y50',
        description: 'Floating Notification',
        darkBorder,
      },
      empty,
      {
        name: 'Y60',
        darkBorder,
      },
    ],
  },
  {
    name: 'Urgent',
    units: [
      {
        name: 'O00',
      },
      empty,
      {
        name: 'O10',
        description: 'Badge',
        lightText,
      },
      {
        name: 'O20',
      },
    ],
  },
  // TODO - Colors with opacity will have a page of their own.
  // {
  //   name: 'Opacity',
  //   units: [
  //     empty,
  //     empty,
  //     empty,
  //     empty,
  //     empty,
  //     empty,
  //     {
  //       name: 'D10-05',
  //       darkBorder,
  //       rgba_to_hex8,
  //     },
  //     {
  //       name: 'D10-10',
  //       darkBorder,
  //       rgba_to_hex8,
  //     },
  //     {
  //       name: 'D10-20',
  //       darkBorder,
  //       rgba_to_hex8,
  //     },
  //     {
  //       name: 'D10-30',
  //       darkBorder,
  //       rgba_to_hex8,
  //     },
  //   ],
  // },
  {
    name: 'Misc',
    units: [
      {
        name: 'F00',
        description: 'Focus',
      },
    ],
  },
];

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  sections: [
    description({
      title: 'Wix Style design system color palette',
    }),

    <Layout cols={9}>
      {colorsTable.map((category, c_index) => (
        <Cell key={c_index} span={1}>
          <Box margin={1}>
            <Text>{category.name}</Text>
          </Box>
          <Layout>
            {category.units.map((unit, u_index) => (
              <Cell key={u_index}>
                <Box height="140px" direction="vertical">
                  <Box
                    height="80px"
                    width="80px"
                    borderRadius="8px"
                    padding="10px"
                    backgroundColor={colors[unit.name]}
                    borderColor="D30"
                    border={unit.darkBorder ? '1px solid transparent' : ''}
                  >
                    <Text light={unit.lightText} size="small">
                      {unit.description}
                    </Text>
                  </Box>
                  <Box marginTop={1}>
                    <Text size="small">{unit.name}</Text>
                  </Box>
                  <Box>
                    {unit.rgba_to_hex8 && (
                      <Text size="small">
                        {rgba_to_hex8(colors[unit.name])}
                      </Text>
                    )}
                  </Box>
                  <Box>
                    <Text size="small">{colors[unit.name]}</Text>
                  </Box>
                </Box>
              </Cell>
            ))}
          </Layout>
        </Cell>
      ))}
    </Layout>,
  ],
};
