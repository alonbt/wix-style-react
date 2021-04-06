import React from 'react';
import { SingleComponentStacked, Preview } from '../../../sharedComponents';
import { createLinkedComponentsNames } from '../../../sharedComponents/utils';

import { layoutSymbolsToComponents } from '../../../../../symbolsComponentsMapping/families/layoutFamily';
import { layoutSymbols } from '../../../../../symbolsComponentsMapping/symbols';

import {
  MarketingPageLayout,
  MarketingPageLayoutContent,
  Text,
  Button,
  Image,
  TestimonialList,
  Avatar,
} from 'wix-style-react';

const MarketingPageLayoutExample = () => {
  const symbol = layoutSymbols.marketingPageLayout;
  const components = layoutSymbolsToComponents[symbol];

  const singleComponentProps = {
    name: symbol,
    componentsNames: createLinkedComponentsNames(components),
  };

  return (
    <SingleComponentStacked {...singleComponentProps}>
      <Preview stretch>
        <MarketingPageLayout
          content={
            <MarketingPageLayoutContent
              overline="Coming Soon"
              title="Create a branded client experience"
              content={
                <Text>
                  <ul>
                    <li>Brand your dashboard with a custom logo</li>
                    <li>Remove Wix ads and promotions</li>
                    <li>Promote your business when sharing in-progress work</li>
                    <li>Customize your client’s dashboard</li>
                  </ul>
                </Text>
              }
              actions={<Button size="large">Contact Us</Button>}
            />
          }
          image={<Image />}
          footer={
            <TestimonialList
              testimonials={[
                {
                  id: '0001',
                  avatar: <Avatar name="Guy in glasses" size="size60" />,
                  text: 'I love it! This product is exactly what I needed.',
                  authorName: 'Guy in glasses',
                },
                {
                  id: '0002',
                  avatar: <Avatar name="Person with a hat" size="size60" />,
                  text: 'Amazing! It helped me to solve my problems.',
                  authorName: 'Person with a hat',
                },
                {
                  id: '0003',
                  avatar: <Avatar name="Smiling lady" size="size60" />,
                  text: 'A perfect tool for my every day tasks.',
                  authorName: 'Smiling lady',
                },
              ]}
            />
          }
        />
      </Preview>
    </SingleComponentStacked>
  );
};

export default MarketingPageLayoutExample;
