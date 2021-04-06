import { contentWidgetsSymbols } from '../symbols';
import {
  contentWidgetsComponentsNames,
  sharedComponentsNames,
  layoutComponentsNames,
  buttonsComponentsNames,
} from '../components';

/**
 * Symbol => Component 12
 */
export const contentWidgetsSymbolsToComponents = {
  [contentWidgetsSymbols.imageWidget]: [],

  [contentWidgetsSymbols.emptyState]: [sharedComponentsNames.EmptyState],

  [contentWidgetsSymbols.statisticsWidget]: [
    contentWidgetsComponentsNames.StatisticsWidget,
  ],

  [contentWidgetsSymbols.carousel]: [contentWidgetsComponentsNames.Carousel],

  [contentWidgetsSymbols.accordion]: [contentWidgetsComponentsNames.Accordion],

  [contentWidgetsSymbols.cardGalleryItem]: [
    contentWidgetsComponentsNames.CardGalleryItem,
  ],

  [contentWidgetsSymbols.preview]: [
    contentWidgetsComponentsNames.PreviewWidget,
    contentWidgetsComponentsNames.BrowserPreviewWidget,
    contentWidgetsComponentsNames.MobilePreviewWidget,
  ],

  [contentWidgetsSymbols.omniSetup]: [],

  [contentWidgetsSymbols.marketingCardLayout]: [
    layoutComponentsNames.Card,
    contentWidgetsComponentsNames.MarketingLayout,
  ],

  [contentWidgetsSymbols.barChart]: [contentWidgetsComponentsNames.BarChart],

  [contentWidgetsSymbols.areaChart]: [contentWidgetsComponentsNames.AreaChart],

  [contentWidgetsSymbols.timeline]: [
    contentWidgetsComponentsNames.Timeline,
    buttonsComponentsNames.TextButton,
  ],

  [contentWidgetsSymbols.selectableAccordion]: [
    contentWidgetsComponentsNames.SelectableAccordion,
  ],

  [contentWidgetsSymbols.sparklineChart]: [
    contentWidgetsComponentsNames.SparklineChart,
  ],

  [contentWidgetsSymbols.stackedBarChart]: [
    contentWidgetsComponentsNames.StackedBarChart,
  ],

  [contentWidgetsSymbols.funnelChart]: [
    contentWidgetsComponentsNames.FunnelChart,
  ],

  [contentWidgetsSymbols.voicePlayer]: [
    contentWidgetsComponentsNames.AudioPlayer,
  ],

  [contentWidgetsSymbols.horizontalTimeline]: [
    contentWidgetsComponentsNames.HorizontalTimeline,
  ],

  [contentWidgetsSymbols.testimonialList]: [
    contentWidgetsComponentsNames.TestimonialList,
  ],

  [contentWidgetsSymbols.featureList]: [
    contentWidgetsComponentsNames.FeatureList,
  ],

  [contentWidgetsSymbols.analyticsSummaryCard]: [
    contentWidgetsComponentsNames.AnalyticsSummaryCard,
  ],

  [contentWidgetsSymbols.analyticsLayouter]: [
    contentWidgetsComponentsNames.AnalyticsLayout,
  ],

  [contentWidgetsSymbols.googlePreview]: [
    contentWidgetsComponentsNames.GooglePreview,
  ],
};
