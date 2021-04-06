import React from 'react';
import { st, classes } from './FunnelStep.st.css';
import { FunnelBadge } from '../FunnelBadge';

import {
  countPercentageFromBase,
  formatToPercent,
} from '../../utils/numberFormatters';

const FIXED_PERCENT_BADGE_POSITION = 0.6;
const BADGE_MAX_TOP_POSITION = 86;
const BADGE_OVERFLOWED_TOP_POSITION = 10;

function calculateBadgeTopPosition(currentDeltaHeight, nextDeltaHeight) {
  const calculatedBadgePosition = Math.max(
    currentDeltaHeight + nextDeltaHeight * FIXED_PERCENT_BADGE_POSITION,
    100 - BADGE_MAX_TOP_POSITION,
  );

  return calculatedBadgePosition < 0
    ? BADGE_OVERFLOWED_TOP_POSITION
    : calculatedBadgePosition;
}

export const FunnelStep = ({
  currentBarIndex,
  currentBarData,
  nextBarData,
  currentBarHeight,
  nextBarHeight,
  hideDifferenceBadge,
  getTooltipContent,
  onTooltipShow,
}) => {
  const nextDeltaHeight = currentBarHeight - nextBarHeight;
  const currentDeltaHeight = 100 - currentBarHeight;
  const badgeTopPosition = calculateBadgeTopPosition(
    currentDeltaHeight,
    nextDeltaHeight,
  );

  const differenceInPercentage = formatToPercent(
    countPercentageFromBase(+currentBarData.value, +nextBarData.value, 0),
  );

  const dataForDifferenceBadge = {
    currentIndex: currentBarIndex,
    difference: differenceInPercentage,
  };

  return (
    <div className={st(classes.root, { nextBarIsFlat: nextBarHeight === 0 })}>
      <div
        className={classes.funnelStepRotated}
        style={{
          height: `${nextDeltaHeight}%`,
        }}
      />
      <div
        className={classes.funnelStep}
        style={{ height: `${nextBarHeight}%` }}
      />
      <div
        className={classes.funnelStepPlaceholder}
        style={{
          top: `${currentDeltaHeight}%`,
          height: `${nextDeltaHeight}%`,
        }}
      />

      {hideDifferenceBadge ? null : (
        <div
          className={classes.badgeWrapper}
          style={{ top: `${badgeTopPosition}%` }}
        >
          <FunnelBadge
            value={differenceInPercentage}
            tooltipContent={getTooltipContent(dataForDifferenceBadge)}
            onTooltipShow={() => onTooltipShow(dataForDifferenceBadge)}
          />
        </div>
      )}
    </div>
  );
};

/** It just takes place but doesn't display or calculate anything */
export const EmptyFunnelStep = () => <div className={st(classes.root)} />;
