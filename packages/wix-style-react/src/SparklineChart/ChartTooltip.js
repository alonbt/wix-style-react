import React from 'react';
import { classes } from './ChartTooltip.st.css';
import Popover from '../Popover';
import { dataHooks } from './constants';
import Text from '../Text';

export const ChartTooltip = props => {
  const { dataPoint } = props;

  return (
    <div
      className={classes.absolutePosition}
      style={{
        left: dataPoint.xCoordinate,
        top: dataPoint.yCoordinate,
      }}
    >
      <Popover
        theme="dark"
        showArrow
        shown
        appendTo="parent"
        placement="top"
        fluid
        dataHooks={dataHooks.chartPopover}
      >
        <Popover.Element>{null}</Popover.Element>
        <Popover.Content>
          <div className={classes.contentWrapper}>
            <Text>{dataPoint.content}</Text>
          </div>
        </Popover.Content>
      </Popover>
    </div>
  );
};
