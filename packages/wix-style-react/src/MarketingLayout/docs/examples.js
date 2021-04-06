import React from 'react';
import Button from '../../Button';
import Image from '../../Image';

export const description = {
  title: 'Description',
  text:
    'Marketing layout is a layout designed to promote new features or display first time visit. Component has title, description, action and illustration areas.',
};

export const sizeTiny = `
  <MarketingLayout
    title="Tiny Size Layout"
    description="This layout requires less attention. It can promote side features that might add value, but are not mandatory to achieve main goals."
    actions={<Button size="small">Get Started</Button>}
    size="tiny"
    image={
      <Box width="100%" align="right">
        <Image width="96px" height="96px" />
      </Box>
    }
  />
`;

export const sizeSmall = `
  <MarketingLayout
    title="Small Size Layout"
    description="This layout requires less attention. It can promote side features that might add value, but are not mandatory to achieve main goals."
    actions={<Button size="small">Get Started</Button>}
    image={<Image/>}
  />
`;

export const sizeMedium = `
  <MarketingLayout
    title="Medium Size Layout"
    description="This layout is big enough to be noticed and can be used to promote big things while still leaving plenty of space."
    actions={<Button size="medium">Get Started</Button>}
    size="medium"
    image={<Image/>}
  />
`;

export const inverted = `
  <MarketingLayout
    inverted
    title="Inverted Layout"
    description="This layout has an image on the left side."
    actions={<Button size="medium">Get Started</Button>}
    size="small"
    image={<Image/>}
  />
`;

export const alignItemsStretch = `
  <MarketingLayout
    title="Align Items Stretched"
    description="This layout has its content stretched instead of the default centered alignment."
    actions={<Button size="medium">Get Started</Button>}
    size="large"
    image={<Image/>}
    alignItems="stretch"
  />
`;

export const imageBackgroundColor = `
  <MarketingLayout
    title="Image Background"
    description="This layout has a background color set for the image area."
    actions={<Button size="medium">Get Started</Button>}
    size="medium"
    imageBackgroundColor="B50"
    image={<Image/>}
  />
`;

export const badge = `
  <Card>
    <MarketingLayout
      title="Badge"
      description="The badge prop is meant to receive a Badge component, and display it at the corner of the layout."
      actions={<Button size="medium">Get Started</Button>}
      image={<Image/>}
      badge={<Badge size="small">badge</Badge>}
    />
  </Card>
`;

export const hiddenBadge = `
  <Card>
    <MarketingLayout
      title="Hidden Badge"
      description="The hiddenBadge prop is used to align the layout with marketing layouts that do have a badge."
      actions={<Button size="medium">Get Started</Button>}
      image={<Image/>}
      hiddenBadge
    />
  </Card>
`;

export const advanced = `
  <Card>
    <MarketingLayout
      inverted
      title={
        <Box direction="vertical">
          <Heading appearance="H5">STEP 1</Heading>
          <Heading appearance="H2">Get Your Site Listed on Google</Heading>
        </Box>
      }
      description={
        <Box direction="vertical" align="left">
          <Text>Complete this checklist to connect your site to Google.</Text>
          <TextButton>Learn More</TextButton>
        </Box>
      }
      size="medium"
      actions={<Button size="medium" priority="secondary" prefixIcon={<Icons.Google/>}>Connect to Google</Button>}
      image="https://static.parastorage.com/services/promote-seo/1.980.0/assets/task-list/ic-connect-to-google-icon.svg"
    />
  </Card>
`;

export const images = [
  {
    label: 'GIF',
    value:
      'https://static.wixstatic.com/media/25125b_fde50458cc6746c79267182c4b4592e0~mv2.gif',
  },
  {
    label: 'SVG',
    value:
      'https://static.parastorage.com/services/promote-seo/1.980.0/assets/task-list/ic-connect-to-google-icon.svg',
  },
];

export const actions = [
  { label: 'One button', value: <Button size="small">Button</Button> },
  {
    label: 'Two buttons',
    value: (
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '170px',
        }}
      >
        <Button size="small">Button</Button>
        <Button size="small" priority="secondary">
          Button
        </Button>
      </div>
    ),
  },
];

export const directions = `
<Layout>
  <Cell>
    <Card>
      <MarketingLayout
        direction="horizontal"
        title="Horizontal Layout"
        description="In this layout example, the direction of the content is aligned horizontally, from left to right."
        actions={<Button size="medium">Get Started</Button>}
        image={
          <Box width="100%" align="right">
            <Image width="180px" height="120px" />
          </Box>
        }
      />
    </Card>
  </Cell>
  <Cell>
    <Card>
      <MarketingLayout
        direction="vertical"
        title="Vertical Layout"
        description="In this layout example, the direction of the content is aligned vertically, from top to bottom."
        actions={<Button size="medium">Get Started</Button>}
        image={
          <Box width="100%" align="left">
            <Image width="180px" height="120px" />
          </Box>
        }
      />
    </Card>
  </Cell>
</Layout>
`;
