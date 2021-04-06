import React from 'react';
import {
  header,
  tabs,
  tab,
  description,
  importExample,
  title,
  divider,
  example as baseExample,
  code as baseCode,
  playground,
  api,
  testkit,
} from 'wix-storybook-utils/Sections';

import { storySettings } from '../test/storySettings';
import allComponents from '../../../stories/utils/allComponents';
import * as examples from './examples';

import {
  TestimonialList,
  FeatureList,
  Image,
  MarketingPageLayoutContent,
  Button,
  Avatar,
  Text,
} from 'wix-style-react';

import MarketingPageLayout from '..';

const code = config => baseCode({ components: allComponents, ...config });

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  component: MarketingPageLayout,
  componentPath: '..',

  componentProps: {
    removeImageHorizontalPadding: false,
    removeImageVerticalPadding: false,
    horizontalSize: 'large',
    verticalSize: 'large',
  },

  exampleProps: {
    content: [
      {
        label: 'With content',
        value: (
          <MarketingPageLayoutContent
            size="medium"
            overline="Coming Soon"
            title="Medium Size Content"
            content={
              <Text>
                <ul>
                  <li>Brand your dashboard with a custom logo</li>
                  <li>Remove Wix ads and promotions</li>
                  <li>Promote your business when sharing in-progress work</li>
                </ul>
              </Text>
            }
            actions={<Button size="large">Contact Us</Button>}
          />
        ),
      },
      {
        label: 'Without content',
        value: '',
      },
    ],
    image: [
      {
        label: 'With image',
        value: <Image />,
      },
      {
        label: 'Without image',
        value: '',
      },
    ],
    footer: [
      {
        label: 'None',
        value: '',
      },
      {
        label: 'Testimonials',
        value: (
          <TestimonialList
            cols={2}
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
            ]}
          />
        ),
      },
      {
        label: 'Features',
        value: (
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
                text:
                  'Let your customers and clients pay you online at checkout.',
              },
            ]}
          />
        ),
      },
    ],
  },

  sections: [
    header({
      sourceUrl: `https://github.com/wix/wix-style-react/tree/master/src/${MarketingPageLayout.displayName}/`,
    }),

    tabs([
      tab({
        title: 'Description',
        sections: [
          description({
            title: 'Description',
            text:
              'MarketingPageLayout is a container capable of displaying a brief introduction about a product and its key features. Use it to promote new products that site owners are unaware of.',
          }),

          importExample(
            "import { MarketingPageLayout } from 'wix-style-react';",
          ),

          divider(),

          title('Examples'),

          description({
            title: 'Structure',
            text:
              'Component includes the following sections: a content, an image and a footer. Use content area to add text descriptions, image area to show a preview of promoted product, footer area to emphasize key features or user testimonials.',
          }),

          code({
            compact: true,
            source: examples.basicExample,
          }),

          description({
            title: 'Sizes',
            text:
              'Component has 2 properties that control size – HorizontalSize and VerticalSize. Both of them have medium and large values. They should be used together with the breakpoints. VerticalSize should change from medium to large at the breakpoint of 630 pixels height. HorizontalSize should change from medium to large at the breakpoint of 1464 pixels width.',
          }),

          code({
            compact: true,
            source: examples.mediumSizeExample,
          }),

          code({
            compact: true,
            source: examples.largeSizeExample,
          }),

          description({
            title: 'Footer with Feature List',
            text:
              'Component lets to insert additional information to the footer. Use FeatureList to display top features that need additional descriptions and visual emphasis.',
          }),

          code({
            compact: true,
            source: examples.featureListExample,
          }),

          description({
            title: 'Footer With Testimonial List',
            text:
              'Use TestimonialList in the footer to show real user feedback, so site owners can learn how others users see the promoted product.',
          }),

          code({
            compact: true,
            source: examples.testimonialListExample,
          }),
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
