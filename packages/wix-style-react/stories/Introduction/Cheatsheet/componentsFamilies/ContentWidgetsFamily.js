import React, { PureComponent } from 'react';
import {
  FamilyStructure,
  SingleComponentStacked,
  NotDefined,
  NotDeveloped,
  Preview,
  singleComponentSizes,
} from '../sharedComponents';

import { contentWidgetsSymbolsToComponents } from '../../../symbolsComponentsMapping/families/contentWidgetsFamily';

import { createLinkedComponentsNames } from '../sharedComponents/utils';
import { standardData as areaChartData } from '../../../../src/AreaChart/docs/examples';

import {
  contentWidgetsSymbols,
  symbolsGroup,
} from '../../../symbolsComponentsMapping/symbols';

import Hint from 'wix-ui-icons-common/Hint';
import ChevronDown from 'wix-ui-icons-common/ChevronDown';

import {
  Layout,
  Cell,
  AnalyticsLayout,
  Input,
  FormField,
  Dropdown,
  Text,
  Box,
  CardGalleryItem,
  Badge,
  Card,
  DropdownBase,
  TextButton,
  Button,
  EmptyState,
  StatisticsWidget,
  Carousel,
  Accordion,
  PreviewWidget,
  MobilePreviewWidget,
  BrowserPreviewWidget,
  MarketingLayout,
  BarChart,
  Timeline,
  FunnelChart,
  AreaChart,
  SelectableAccordion,
  StackedBarChart,
  SparklineChart,
  AudioPlayer,
  HorizontalTimeline,
  TestimonialList,
  Avatar,
  FeatureList,
  Image,
  AnalyticsSummaryCard,
  GooglePreview,
} from 'wix-style-react';

const groupSymbol = symbolsGroup.contentWidgets;

const ImageWidgetExample = () => {
  const symbol = contentWidgetsSymbols.imageWidget;
  const components = contentWidgetsSymbolsToComponents[symbol];

  const singleComponentProps = {
    name: symbol,
    componentsNames: components,
  };

  return (
    <SingleComponentStacked {...singleComponentProps}>
      <NotDefined />
    </SingleComponentStacked>
  );
};

const EmptyStateExample = () => {
  const symbol = contentWidgetsSymbols.emptyState;
  const components = contentWidgetsSymbolsToComponents[symbol];

  const singleComponentProps = {
    name: symbol,
    componentsNames: createLinkedComponentsNames(components),
  };

  return (
    <SingleComponentStacked {...singleComponentProps}>
      <Preview wrapWithCardContent stretch>
        <EmptyState
          image={
            <Box
              height="120px"
              width="120px"
              backgroundColor="D60"
              borderRadius="50%"
            />
          }
          subtitle="Create your product item in an easy & fast way to display it on your site"
          title="You don't have any items yet"
        />
      </Preview>
    </SingleComponentStacked>
  );
};

class StatisticsWidgetExamples extends PureComponent {
  state = { date: '7d', filter: 'All' };

  _getSuffix() {
    return [
      <DropdownBase
        key="days"
        onSelect={({ id }) => this.setState({ date: id })}
        options={[
          { id: '7d', value: 'Last 7 days' },
          { id: '14d', value: 'Last 14 days' },
        ]}
      >
        {({ toggle, selectedOption = { id: '7d', value: 'Last 7 days' } }) => {
          return (
            <TextButton
              skin="dark"
              suffixIcon={<ChevronDown />}
              onClick={toggle}
            >
              {selectedOption.value}
            </TextButton>
          );
        }}
      </DropdownBase>,
      <Box key="spacer" width="24px" />,
      <DropdownBase
        key="region"
        onSelect={({ id }) => this.setState({ filter: id })}
        options={[
          { id: 'US', value: 'Only from US' },
          { id: 'All', value: 'All' },
        ]}
      >
        {({ toggle, selectedOption = { id: 'All', value: 'All' } }) => {
          return (
            <TextButton
              skin="dark"
              suffixIcon={<ChevronDown />}
              onClick={toggle}
            >
              {selectedOption.value}
            </TextButton>
          );
        }}
      </DropdownBase>,
    ];
  }

  render() {
    const weekUS = [
      {
        value: '500',
        description: 'Views',
        percentage: 21,
        onClick: () => {},
      },
      {
        value: '350',
        description: 'Unique visits',
        percentage: 21,
      },
      {
        value: '3.9',
        description: 'Pages per visitor',
        percentage: -11,
      },
      {
        value: '$3,500',
        description: 'Revenue',
        percentage: -11,
        descriptionInfo: 'Revenue in 7 days',
        onClick: () => {},
      },
      {
        value: '0',
        description: 'Shares',
        percentage: 0,
        descriptionInfo: 'Shares in 7 days',
        onClick: () => {},
      },
    ];

    const twoWeeksUS = [
      {
        value: '700',
        description: 'Views',
        percentage: 19,
        onClick: () => {},
      },
      {
        value: '500',
        description: 'Unique visits',
        percentage: 21,
      },
      {
        value: '3.2',
        description: 'Pages per visitor',
        percentage: -11,
      },
      {
        value: '$5,700',
        description: 'Revenue',
        percentage: -11,
        descriptionInfo: 'Revenue in 14 days',
        onClick: () => {},
      },
      {
        value: '0',
        description: 'Shares',
        percentage: 0,
        descriptionInfo: 'Shares in 14 days',
        onClick: () => () => {},
      },
    ];

    const weekAll = [
      {
        value: '1200',
        description: 'Views',
        percentage: 21,
        onClick: () => {},
      },
      {
        value: '900',
        description: 'Unique visits',
        percentage: 21,
      },
      {
        value: '4.1',
        description: 'Pages per visitor',
        percentage: 2,
      },
      {
        value: '$5,200',
        description: 'Revenue',
        percentage: 7,
        descriptionInfo: 'Revenue in 7 days',
        onClick: () => {},
      },
      {
        value: '3',
        description: 'Shares',
        percentage: 100,
        descriptionInfo: 'Shares in 7 days',
        onClick: () => {},
      },
    ];

    const twoWeeksAll = [
      {
        value: '1300',
        description: 'Views',
        percentage: 29,
        onClick: () => {},
      },
      {
        value: '1100',
        description: 'Unique visits',
        percentage: 14,
      },
      {
        value: '3.2',
        description: 'Pages per visitor',
        percentage: -1,
      },
      {
        value: '$6,400',
        description: 'Revenue',
        percentage: 11,
        descriptionInfo: 'Revenue in 14 days',
        onClick: () => {},
      },
      {
        value: '8',
        description: 'Shares',
        percentage: 95,
        descriptionInfo: 'Shares in 14 days',
        onClick: () => {},
      },
    ];

    const data = {
      '7d': {
        US: weekUS,
        All: weekAll,
      },
      '14d': {
        US: twoWeeksUS,
        All: twoWeeksAll,
      },
    };

    const getData = (date, filter) => data[date][filter];
    const { date, filter } = this.state;

    const symbol = contentWidgetsSymbols.statisticsWidget;
    const components = contentWidgetsSymbolsToComponents[symbol];

    const singleComponentProps = {
      name: symbol,
      componentsNames: createLinkedComponentsNames(components),
    };

    return (
      <SingleComponentStacked {...singleComponentProps}>
        <Preview stretch>
          <Card>
            <Card.Header
              title="Article performance"
              suffix={this._getSuffix()}
            />
            <Card.Content>
              <StatisticsWidget items={getData(date, filter)} />
            </Card.Content>
          </Card>
        </Preview>
      </SingleComponentStacked>
    );
  }
}

const CarouselExample = () => {
  const carouselItems = ['first', 'second', 'third'].map((ordinalNum, i) => (
    <Card key={`carousel-item-${i}`}>
      <Box height="66px" align="center" verticalAlign="middle">
        <Hint size="54px" color="#89cff8" />
        <Text>This is the {ordinalNum} information text </Text>
      </Box>
    </Card>
  ));

  const symbol = contentWidgetsSymbols.carousel;
  const components = contentWidgetsSymbolsToComponents[symbol];

  const singleComponentProps = {
    name: symbol,
    componentsNames: createLinkedComponentsNames(components),
    size: singleComponentSizes.compact,
  };

  return (
    <SingleComponentStacked {...singleComponentProps}>
      <Preview stretch>
        <Carousel>{carouselItems}</Carousel>
      </Preview>
    </SingleComponentStacked>
  );
};

const AccordionExample = () => {
  const itemText = (
    <Text>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua
    </Text>
  );

  const accordionItems = [
    {
      title: 'First Initially Open Row',
      children: itemText,
      open: true,
      collapseLabel: 'Less',
    },
    {
      title: 'Second Row',
      children: itemText,
      collapseLabel: 'Less',
    },
    {
      title: 'Third Row',
      children: itemText,
      collapseLabel: 'Less',
    },
  ];

  const symbol = contentWidgetsSymbols.accordion;
  const components = contentWidgetsSymbolsToComponents[symbol];

  const singleComponentProps = {
    name: symbol,
    componentsNames: createLinkedComponentsNames(components),
    size: singleComponentSizes.compact,
  };

  return (
    <SingleComponentStacked {...singleComponentProps}>
      <Preview stretch>
        <Accordion multiple items={accordionItems} />
      </Preview>
    </SingleComponentStacked>
  );
};

const CardGalleryItemExample = () => {
  const backgroundImageUrl = 'example.jpg';

  const symbol = contentWidgetsSymbols.cardGalleryItem;
  const components = contentWidgetsSymbolsToComponents[symbol];

  const singleComponentProps = {
    name: symbol,
    componentsNames: createLinkedComponentsNames(components),
  };

  return (
    <SingleComponentStacked {...singleComponentProps}>
      <Layout>
        <Cell span={4}>
          <Preview stretch>
            <CardGalleryItem
              title="Scheduled on Facebook"
              badge={
                <Badge size="medium" skin="standard" type="solid" uppercase>
                  scheduled
                </Badge>
              }
              subtitle="For Jan 30, 2019 (05:06 PM)"
              primaryActionProps={{
                label: 'Edit Post',
                onClick: () => {
                  alert('Primary action clicked');
                },
              }}
              backgroundImageUrl={backgroundImageUrl}
            />
          </Preview>
        </Cell>
      </Layout>
    </SingleComponentStacked>
  );
};

const PreviewExample = () => {
  const symbol = contentWidgetsSymbols.preview;
  const components = contentWidgetsSymbolsToComponents[symbol];

  const singleComponentProps = {
    name: symbol,
    componentsNames: createLinkedComponentsNames(components),
  };

  return (
    <SingleComponentStacked {...singleComponentProps}>
      <Layout>
        <Cell>
          <Layout>
            <Cell span={5}>
              <PreviewWidget>
                <Box padding="20px" backgroundColor="Y30">
                  <Text>Content goes here</Text>
                </Box>
              </PreviewWidget>
            </Cell>
          </Layout>
        </Cell>
        <Cell>
          <Layout>
            <Cell span={5}>
              <BrowserPreviewWidget browserBarSize="size9">
                <Box padding="20px" backgroundColor="Y30">
                  <Text>Content goes here</Text>
                </Box>
              </BrowserPreviewWidget>
            </Cell>
          </Layout>
        </Cell>
        <Cell>
          <Layout>
            <Cell span={5}>
              <MobilePreviewWidget>
                <Box
                  align="center"
                  verticalAlign="middle"
                  height="100%"
                  backgroundColor="Y30"
                >
                  <Text>Content goes here</Text>
                </Box>
              </MobilePreviewWidget>
            </Cell>
          </Layout>
        </Cell>
      </Layout>
    </SingleComponentStacked>
  );
};

const OmniSetupExample = () => {
  const symbol = contentWidgetsSymbols.omniSetup;
  const components = contentWidgetsSymbolsToComponents[symbol];

  const singleComponentProps = {
    name: symbol,
    componentsNames: components,
  };

  return (
    <SingleComponentStacked {...singleComponentProps}>
      <NotDeveloped />
    </SingleComponentStacked>
  );
};

const MarketingLayoutCardExample = () => {
  const symbol = contentWidgetsSymbols.marketingCardLayout;
  const components = contentWidgetsSymbolsToComponents[symbol];

  const singleComponentProps = {
    name: symbol,
    componentsNames: createLinkedComponentsNames(components),
  };

  return (
    <SingleComponentStacked {...singleComponentProps}>
      <Preview wrapWithCard stretch>
        <MarketingLayout
          title="Marketing Card Title"
          description="Description text for Marketing Card."
          size="medium"
          actions={<Button size="medium">Action</Button>}
          image="https://static.parastorage.com/services/promote-seo/1.980.0/assets/task-list/ic-connect-to-google-icon.svg"
        />
      </Preview>
    </SingleComponentStacked>
  );
};

const BarChartExample = () => {
  const symbol = contentWidgetsSymbols.barChart;
  const components = contentWidgetsSymbolsToComponents[symbol];

  const singleComponentProps = {
    name: symbol,
    componentsNames: createLinkedComponentsNames(components),
    size: singleComponentSizes.compact,
  };

  return (
    <SingleComponentStacked {...singleComponentProps}>
      <BarChart
        items={[
          {
            value: 25000,
            label: '$25,000',
            description: 'Sales',
          },
          {
            value: 48000,
            label: '$48,000',
            description: 'Subscription',
          },
          {
            value: 42000,
            label: '$42,000',
            description: 'Ads',
          },
        ]}
      />
    </SingleComponentStacked>
  );
};

const AreaChartExample = () => {
  const symbol = contentWidgetsSymbols.areaChart;
  const components = contentWidgetsSymbolsToComponents[symbol];

  const singleComponentProps = {
    name: symbol,
    componentsNames: createLinkedComponentsNames(components),
  };

  return (
    <SingleComponentStacked {...singleComponentProps}>
      <Preview wrapWithCardContent stretch>
        <AreaChart
          data={areaChartData}
          tooltipContent={item => 'tooltip ' + item.label}
        />
      </Preview>
    </SingleComponentStacked>
  );
};

const TimelineExample = () => {
  const symbol = contentWidgetsSymbols.timeline;
  const components = contentWidgetsSymbolsToComponents[symbol];

  const singleComponentProps = {
    name: symbol,
    componentsNames: createLinkedComponentsNames(components),
    size: singleComponentSizes.compact,
  };

  const items = [
    {
      label:
        'New Order: 1 item, $4.99 this will be a longer text that will be two lines or a very very long text for a vertical that needs a lot of text that will be three lines',
      suffix: (
        <TextButton weight="normal" size="small">
          suffix button
        </TextButton>
      ),
      labelAction: (
        <TextButton weight="normal" size="small">
          View Order
        </TextButton>
      ),
    },
    {
      label:
        'New Order: 1 item, $4.99 this will be a longer text that will be two lines or a very very long text for a vertical that needs a lot of text that will be three lines',
      suffix: 'Jan 1, 2019 12:03 AM',
      labelAction: (
        <TextButton weight="normal" size="small">
          View Order
        </TextButton>
      ),
    },
    {
      id: 1,
      label: 'Quote #8 Accepted: Website setup, $7.00',
    },
    {
      label:
        'New Order: 1 item, $4.99 this will be a longer text that will be two lines or a very very long text for a vertical that needs a lot of text that will be three lines',
      labelAction: (
        <TextButton weight="normal" size="small">
          View Order
        </TextButton>
      ),
    },
    {
      label:
        'New Order: 1 item, $4.99 this will be a longer text that will be two lines or a very very long text for a vertical that needs a lot of text that will be three lines',
      suffix: 'Jan 1, 2019 12:03 AM',
      labelAction: (
        <TextButton weight="normal" size="small">
          View Order
        </TextButton>
      ),
    },
  ];

  return (
    <SingleComponentStacked {...singleComponentProps}>
      <Preview wrapWithCardContent>
        <Timeline items={items} />
      </Preview>
    </SingleComponentStacked>
  );
};

const FunnelChartExample = () => {
  const symbol = contentWidgetsSymbols.funnelChart;
  const components = contentWidgetsSymbolsToComponents[symbol];

  const singleComponentProps = {
    name: symbol,
    componentsNames: createLinkedComponentsNames(components),
  };

  const funnelChartData = [
    {
      value: 1220,
      label: 'visits',
    },
    {
      value: 800,
      label: 'product views',
    },
    {
      value: 630,
      label: 'cart',
    },
    {
      value: 410,
      label: 'checkout',
    },
    {
      value: 200,
      label: 'ordered',
    },
  ];

  return (
    <SingleComponentStacked {...singleComponentProps}>
      <Preview stretch wrapWithCardContent>
        <FunnelChart data={funnelChartData} />
      </Preview>
    </SingleComponentStacked>
  );
};

const SelectableAccordionExample = () => {
  const symbol = contentWidgetsSymbols.selectableAccordion;
  const components = contentWidgetsSymbolsToComponents[symbol];

  const singleComponentProps = {
    name: symbol,
    componentsNames: createLinkedComponentsNames(components),
    size: singleComponentSizes.compact,
  };

  const items = [
    {
      initiallyOpen: true,
      title: 'Free Plan',
      subtitle: 'Offer this plan free of charge',
      content: (
        <FormField label="Length of Plan" required>
          <Dropdown
            placeholder="Select"
            options={[{ id: 0, value: '1 Month' }]}
          />
        </FormField>
      ),
    },
    {
      title: 'One-time Payment',
      subtitle: 'Charge a single upfront fee',
      content: (
        <Layout cols={1}>
          <FormField label="Price" required>
            <Input value={99} prefix={<Input.Affix>$</Input.Affix>} />
          </FormField>
          <FormField label="Length of Plan" required>
            <Dropdown
              placeholder="Select"
              options={[{ id: 0, value: '1 Month' }]}
            />
          </FormField>
        </Layout>
      ),
    },
  ];

  return (
    <SingleComponentStacked {...singleComponentProps}>
      <Preview>
        <SelectableAccordion items={items} />
      </Preview>
    </SingleComponentStacked>
  );
};

const SparklineChartExample = () => {
  const symbol = contentWidgetsSymbols.sparklineChart;
  const components = contentWidgetsSymbolsToComponents[symbol];

  const singleComponentProps = {
    name: symbol,
    componentsNames: createLinkedComponentsNames(components),
  };

  const data = [
    { label: new Date('Thu Sep 4 2020'), value: 3 },
    { label: new Date('Thu Sep 5 2020'), value: 17 },
    { label: new Date('Thu Sep 6 2020'), value: 18 },
    { label: new Date('Thu Sep 7 2020'), value: 12 },
    { label: new Date('Thu Sep 8 2020'), value: 8 },
    { label: new Date('Thu Sep 9 2020'), value: 7 },
    { label: new Date('Thu Sep 10 2020'), value: 9 },
  ];

  return (
    <SingleComponentStacked {...singleComponentProps}>
      <SparklineChart
        getTooltipContent={index => (
          <span style={{ color: '#ffffff' }}>{index}</span>
        )}
        data={data}
        color="#ee00ff"
        width={400}
        height={80}
      />
    </SingleComponentStacked>
  );
};

const StackedBarChartExample = () => {
  const symbol = contentWidgetsSymbols.stackedBarChart;
  const components = contentWidgetsSymbolsToComponents[symbol];

  const singleComponentProps = {
    name: symbol,
    componentsNames: createLinkedComponentsNames(components),
  };

  return (
    <SingleComponentStacked {...singleComponentProps}>
      <Preview wrapWithCardContent>
        <Box align="center">
          <StackedBarChart
            data={[
              { label: 'Jan 20', values: [500, 200] },
              { label: 'Feb 20', values: [200, 700] },
              { label: 'Mar 20', values: [0, 400] },
              { label: 'Apr 20', values: [900, 100] },
              { label: 'Mai 20', values: [300, 300] },
              { label: 'Jun 20', values: [400, 300] },
              { label: 'Jul 20', values: [100, 100] },
              { label: 'Aug 20', values: [0, 0] },
              { label: 'Sep 20', values: [800, 0] },
              { label: 'Oct 20', values: [600, 300] },
              { label: 'Nov 20', values: [200, 300] },
              { label: 'Dec 20', values: [300, 200] },
            ]}
            tooltipTemplate={({ label, values }) => (
              <Box direction="vertical">
                <Text size="small" light>
                  Total: {values[0] + values[1]} $
                </Text>
                <Text size="small" light>
                  Payout: {values[1]} $
                </Text>
              </Box>
            )}
            width={800}
            height={400}
          />
        </Box>
      </Preview>
    </SingleComponentStacked>
  );
};

const VoicePlayerExample = () => {
  const symbol = contentWidgetsSymbols.voicePlayer;
  const components = contentWidgetsSymbolsToComponents[symbol];

  const singleComponentProps = {
    name: symbol,
    componentsNames: createLinkedComponentsNames(components),
    size: singleComponentSizes.compact,
  };

  return (
    <SingleComponentStacked {...singleComponentProps}>
      <AudioPlayer src="https://music.wixstatic.com/preview/84770f_29a80480c24f4946a477c8ad03b92cbc-128.mp3" />
    </SingleComponentStacked>
  );
};

const HorizontalTimelineExample = () => {
  const symbol = contentWidgetsSymbols.horizontalTimeline;
  const components = contentWidgetsSymbolsToComponents[symbol];

  const singleComponentProps = {
    name: symbol,
    componentsNames: createLinkedComponentsNames(components),
    size: singleComponentSizes.compact,
  };

  return (
    <SingleComponentStacked {...singleComponentProps}>
      <Preview wrapWithCardContent>
        <HorizontalTimeline
          items={[
            {
              label: 'Complete',
              skin: 'dark',
              icon: <HorizontalTimeline.CompleteIcon />,
            },
            {
              label: 'Active',
              skin: 'dark',
              icon: <HorizontalTimeline.ActiveIcon />,
            },
            {
              label: 'Blank',
              icon: <HorizontalTimeline.DefaultIcon />,
            },
            {
              label: 'Destructive',
              icon: <HorizontalTimeline.DestructiveIcon />,
            },
          ]}
        />
      </Preview>
    </SingleComponentStacked>
  );
};

const TestimonialListExample = () => {
  const symbol = contentWidgetsSymbols.testimonialList;
  const components = contentWidgetsSymbolsToComponents[symbol];

  const singleComponentProps = {
    name: symbol,
    componentsNames: createLinkedComponentsNames(components),
  };

  return (
    <SingleComponentStacked {...singleComponentProps}>
      <Preview wrapWithCardContent>
        <TestimonialList
          testimonials={[
            {
              avatar: <Avatar name="Guy in glasses" size="size60" />,
              text: 'I love it! This product is exactly what I needed.',
              authorName: 'Guy in glasses',
            },
            {
              avatar: <Avatar name="Person with a hat" size="size60" />,
              text: 'Amazing! It helped me to solve my problems.',
              authorName: 'Person with a hat',
            },
            {
              avatar: <Avatar name="Smiling lady" size="size60" />,
              text: 'A perfect tool for my every day tasks.',
              authorName: 'Smiling lady',
            },
          ]}
        />
      </Preview>
    </SingleComponentStacked>
  );
};

const FeatureListExample = () => {
  const symbol = contentWidgetsSymbols.featureList;
  const components = contentWidgetsSymbolsToComponents[symbol];

  const singleComponentProps = {
    name: symbol,
    componentsNames: createLinkedComponentsNames(components),
  };

  return (
    <SingleComponentStacked {...singleComponentProps}>
      <Preview wrapWithCardContent>
        <FeatureList
          features={[
            {
              image: <Image width={60} height={60} />,
              title: 'Remove Wix Ads',
              text:
                "Enjoy a website that's completely your own brand by removing Wix ads.",
            },
            {
              image: <Image width={60} height={60} />,
              title: 'Connect a Custom Domain',
              text: 'Get your business found with a custom domain.',
            },
            {
              image: <Image width={60} height={60} />,
              title: 'Accept Online Payment',
              text:
                'Let your customers and clients pay you online at checkout.',
            },
          ]}
        />
      </Preview>
    </SingleComponentStacked>
  );
};

const AnalyticsSummaryCardExample = () => {
  const symbol = contentWidgetsSymbols.analyticsSummaryCard;
  const components = contentWidgetsSymbolsToComponents[symbol];

  const singleComponentProps = {
    name: symbol,
    componentsNames: createLinkedComponentsNames(components),
  };

  return (
    <SingleComponentStacked {...singleComponentProps}>
      <Preview>
        <AnalyticsSummaryCard
          chartColorHex="#3899ec"
          chartData={[
            {
              label: new Date('2020-09-03T21:00:00.000Z'),
              value: 100,
            },
            {
              label: new Date('2020-09-04T21:00:00.000Z'),
              value: 17,
            },
            {
              label: new Date('2020-09-05T21:00:00.000Z'),
              value: 18,
            },
          ]}
          chartWidth={169}
          onChartHover={() => {}}
          trend={12}
          isTrendVisible
          valueTooltip="1,951"
          title="Sessions"
          getChartTooltipContent={index => (
            <span style={{ color: '#ffffff' }}>{index}</span>
          )}
          value="1,9K"
        />
      </Preview>
    </SingleComponentStacked>
  );
};

const AnalyticsLayoutExample = () => {
  const symbol = contentWidgetsSymbols.analyticsLayouter;
  const components = contentWidgetsSymbolsToComponents[symbol];

  const singleComponentProps = {
    name: symbol,
    componentsNames: createLinkedComponentsNames(components),
  };

  const analyticsLayoutChildren = [
    <AnalyticsSummaryCard
      chartColorHex="#3899ec"
      chartData={[
        {
          label: new Date('2020-09-03T21:00:00.000Z'),
          value: 100,
        },
        {
          label: new Date('2020-09-04T21:00:00.000Z'),
          value: 17,
        },
        {
          label: new Date('2020-09-05T21:00:00.000Z'),
          value: 18,
        },
      ]}
      chartWidth={169}
      onChartHover={() => {}}
      trend={-5}
      isTrendVisible
      title="Total Sales"
      getChartTooltipContent={index => (
        <span style={{ color: '#ffffff' }}>{index}</span>
      )}
      value="$943"
      footer={<TextButton>Increase your Sales</TextButton>}
    />,
    <AnalyticsSummaryCard
      chartColorHex="#FC8E53"
      chartData={[
        {
          label: new Date('2020-09-03T21:00:00.000Z'),
          value: 3,
        },
        {
          label: new Date('2020-09-04T21:00:00.000Z'),
          value: 17,
        },
        {
          label: new Date('2020-09-05T21:00:00.000Z'),
          value: 18,
        },
      ]}
      chartWidth={169}
      onChartHover={() => {}}
      trend={12}
      isTrendVisible
      title="Sessions"
      getChartTooltipContent={index => (
        <span style={{ color: '#ffffff' }}>{index}</span>
      )}
      value="1,943"
      footer={<TextButton>Boost Your Traffic</TextButton>}
    />,
    <AnalyticsSummaryCard
      chartColorHex="#46C6C3"
      chartData={[
        {
          label: new Date('2020-09-03T21:00:00.000Z'),
          value: 100,
        },
        {
          label: new Date('2020-09-04T21:00:00.000Z'),
          value: 17,
        },
        {
          label: new Date('2020-09-05T21:00:00.000Z'),
          value: 18,
        },
      ]}
      chartWidth={169}
      onChartHover={() => {}}
      trend={-15}
      isTrendVisible
      title="Active Leads"
      getChartTooltipContent={index => (
        <span style={{ color: '#ffffff' }}>{index}</span>
      )}
      value="35"
      footer={<TextButton>Get More Leads</TextButton>}
    />,
    <AnalyticsSummaryCard
      chartColorHex="#3899ec"
      chartData={[
        {
          label: new Date('2020-09-03T21:00:00.000Z'),
          value: 100,
        },
        {
          label: new Date('2020-09-04T21:00:00.000Z'),
          value: 17,
        },
        {
          label: new Date('2020-09-05T21:00:00.000Z'),
          value: 18,
        },
      ]}
      chartWidth={169}
      onChartHover={() => {}}
      trend={-12}
      isTrendVisible
      title="Sessions"
      getChartTooltipContent={index => (
        <span style={{ color: '#ffffff' }}>{index}</span>
      )}
      value="$1000"
      footer={<TextButton>Increase your Sales</TextButton>}
    />,
  ];

  return (
    <SingleComponentStacked {...singleComponentProps}>
      <Preview>
        <AnalyticsLayout items={[1, 2, 3, 4, 5]}>
          {(item, index) => (
            <AnalyticsLayout.Cell key={index}>
              {analyticsLayoutChildren[index]}
            </AnalyticsLayout.Cell>
          )}
        </AnalyticsLayout>
      </Preview>
    </SingleComponentStacked>
  );
};

const GooglePreviewExample = () => {
  const symbol = contentWidgetsSymbols.googlePreview;
  const components = contentWidgetsSymbolsToComponents[symbol];

  const singleComponentProps = {
    name: symbol,
    componentsNames: createLinkedComponentsNames(components),
    size: singleComponentSizes.compact,
  };

  return (
    <SingleComponentStacked {...singleComponentProps}>
      <Preview>
        <GooglePreview
          title="Site Name | a title of your site Site Name | a title of your site "
          previewUrl="www.site-name.com"
          description="a short description for a site a short description for a site a short description for a site a short description for a site a short description for a site a short description for a site a short description for a site a short description for a site"
        />
      </Preview>
    </SingleComponentStacked>
  );
};

const ContentWidgetsFamily = () => (
  <FamilyStructure title={groupSymbol}>
    <ImageWidgetExample />
    <EmptyStateExample />
    <StatisticsWidgetExamples />
    <CarouselExample />
    <AccordionExample />
    <CardGalleryItemExample />
    <PreviewExample />
    <OmniSetupExample />
    <MarketingLayoutCardExample />
    <BarChartExample />
    <AreaChartExample />
    <TimelineExample />
    <SparklineChartExample />
    <FunnelChartExample />
    <SelectableAccordionExample />
    <StackedBarChartExample />
    <VoicePlayerExample />
    <HorizontalTimelineExample />
    <TestimonialListExample />
    <FeatureListExample />
    <AnalyticsSummaryCardExample />
    <AnalyticsLayoutExample />
    <GooglePreviewExample />
  </FamilyStructure>
);

export default ContentWidgetsFamily;
