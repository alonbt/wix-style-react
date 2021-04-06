export const basicExample = `
    <MarketingPageLayout
      content={<Box verticalAlign="middle" align="center" height="450">Content</Box>}
      image={<Image height="450" width="450" />}
      footer={<Box verticalAlign="middle" align="center" height={100}>Footer</Box>}
    />
`;

export const mediumSizeExample = `
  <MarketingPageLayout
    horizontalSize="medium"
    verticalSize="medium"
    content={
      <MarketingPageLayoutContent
        size="medium"
        overline="Medium overline"
        title="Medium title"
        content={
          <Text size="small">
            <ul>
              <li>Medium content item one</li>
              <li>Medium content item two</li>
              <li>Medium content item three</li>
            </ul>
          </Text>
        }
        actions={<Button size="medium">Medium Action</Button>}
      />
    }
    image={<Image />}
  />;
`;

export const largeSizeExample = `
  <MarketingPageLayout
    horizontalSize="large"
    verticalSize="large"
    content={
      <MarketingPageLayoutContent
        size="large"
        overline="Large overline"
        title="Large title"
        content={
          <Text size="medium">
            <ul>
              <li>Large content item one</li>
              <li>Large content item two</li>
              <li>Large content item three</li>
            </ul>
          </Text>
        }
        actions={<Button size="large">Large Action</Button>}
      />
    }
    image={<Image />}
  />;
`;

export const featureListExample = `
    <MarketingPageLayout
      content={
        <MarketingPageLayoutContent
          title="Upgrade Your Site with a Premium Plan"
          content="Wix gives you everything you need for a stunning website. Upgrade your site to Premium and get even more."
          actions={<Button skin="premium" size="large">Upgrade Your Site</Button>}
        />
      }
      image={<Image />}
      footer={
        <FeatureList
          features={[
            {
              id: '0001',
              image: <Image width={60} height={60} />,
              title: 'Remove Wix Ads',
              text:
                "Enjoy a website that's completely your own brand by removing Wix ads.",
            },
            {
              id: '0002',
              image: <Image width={60} height={60} />,
              title: 'Connect a Custom Domain',
              text: 'Get your business found with a custom domain.',
            },
            {
              id: '0003',
              image: <Image width={60} height={60} />,
              title: 'Accept Online Payment',
              text: 'Let your customers and clients pay you online at checkout.',
            },
          ]}
        />
      }
    />;
`;

export const testimonialListExample = `
    <MarketingPageLayout
      content={
        <MarketingPageLayoutContent
          title="Reach the Right Shoppers on Facebook & Instagram"
          subtitle="Get set up and Wix’s AI will take care of the rest"
          content={
            <Text>
              <ul>
                <li>Show your ad to the people most likely to buy</li>
                <li>Test your ad non-stop to see what’s working </li>
                <li>Optimize your budget to get you the best results </li>
              </ul>
            </Text>
          }
          actions={<Button size="large">Start Now</Button>}
        />
      }
      image={<Image />}
      footer={
        <TestimonialList
          testimonials={[
            {
              id: '0001',
              avatar: <Avatar name="Guy in glasses" size="size60" />,
              text: 'I love it! It helped me to increase the sales.',
              authorName: 'John Smith',
            },
            {
              id: '0002',
              avatar: <Avatar name="Person with a hat" size="size60" />,
              text: 'Amazing! It is simple to use, I had no struggle to setup.',
              authorName: 'Templeton Peck',
            },
            {
              id: '0003',
              avatar: <Avatar name="Smiling lady" size="size60" />,
              text: 'A perfect tool for creating ad campaigns that sell.',
              authorName: 'Bosco B.A.',
            },
          ]}
        />
      }
    />;
`;
