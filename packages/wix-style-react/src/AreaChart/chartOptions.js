import { stVars } from './AreaChart.st.css';

export const DATASET_PROPS = {
  backgroundColor: stVars.datasetBg,
  borderColor: stVars.datasetLineColor,
  borderWidth: 2,
  pointBorderColor: stVars.pointBorderColor,
  pointHoverBackgroundColor: stVars.pointHoverBackgroundColor,
  pointHoverBorderColor: stVars.pointHoverBorderColor,
  lineTension: 0.12,
  pointBackgroundColor: 'transparent',
  pointHitRadius: 1,
  pointHoverBorderWidth: 2,
};

export const OPTIONS_PROPS = {
  maintainAspectRatio: false,
  hover: {
    mode: 'index',
    intersect: false,
    animationDuration: 0,
  },
  legend: {
    display: false,
    labels: {
      family: 'Madefor',
    },
  },
};

export const GRIDLINE_PROPS = {
  borderDash: [1, 1],
  color: [
    stVars.gridLineZeroLineColor,
    ...new Array(90).fill(stVars.gridLineFontColor),
  ],
  borderDashOffset: 1,
  drawBorder: true,
};

export const Y_AXES_TICKS_PROPS = {
  beginAtZero: true,
  labelOffset: 4,
  padding: 5,
};

export const TOOLTIP_PROPS = {
  backgroundColor: stVars.tooltipBg,
  mode: 'index',
  intersect: false,
  caretPadding: 10,
  xPadding: 24,
  yPadding: 14,
  xAlign: 'center',
  yAlign: 'bottom',
  displayColors: false,
  bodyFontSize: 14,
  bodySpacing: 4,
  cornerRadius: 8,
};
