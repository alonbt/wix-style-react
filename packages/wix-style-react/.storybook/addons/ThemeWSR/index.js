import addons, { makeDecorator } from '@storybook/addons';
import * as React from 'react';
import { ADDON_ID, ADDON_TITLE } from './shared';
import { useState } from 'react';
import { Card, Heading, ThemeProvider, Text } from '../../../src';
import StylePanel from './StylePanel';
import { calcColors } from '../../../src/Themes/floatingPanels/utils';

const ThemeWSR = makeDecorator({
  name: ADDON_TITLE,
  parameterName: ADDON_TITLE,
  allowDeprecatedUsage: true,
  wrapper: (getStory, context) => {
    const [active, setActive] = useState(false);
    const [themeData, setThemeData] = useState({});
    const channel = addons.getChannel();
    const panelWidth = 350;
    const panelX = 25;
    const panelY = 25;

    channel.on(ADDON_ID + '/change', params => setActive(params.active));

    let containerRef,
      containerWidth = 0,
      handleRef,
      dragStartLeft,
      dragStartTop,
      dragStartX,
      dragStartY;

    const initialiseDrag = event => {
      const { target, clientX, clientY } = event;
      const { offsetTop, offsetLeft } = target;
      const { left, top } = handleRef.getBoundingClientRect();
      const { width } = containerRef.getBoundingClientRect();
      containerWidth = width;
      dragStartLeft = left - offsetLeft;
      dragStartTop = top - offsetTop;
      dragStartX = clientX;
      dragStartY = clientY;
      window.addEventListener('mousemove', startDragging, false);
      window.addEventListener('mouseup', stopDragging, false);
    };

    const startDragging = ({ clientX, clientY }) => {
      let x = dragStartLeft + clientX - dragStartX;
      let y = dragStartTop + clientY - dragStartY;
      if (x < -panelX) x = -panelX;
      if (y < -panelY) y = -panelY;
      if (x > containerWidth - panelWidth) x = containerWidth - panelWidth;

      handleRef.style.transform = `translate(${x}px, ${y}px)`;
    };

    const stopDragging = () => {
      window.removeEventListener('mousemove', startDragging, false);
      window.removeEventListener('mouseup', stopDragging, false);
    };

    function storybookTheme({ mainColor, ...rest } = {}) {
      let theme = {};

      if (mainColor) {
        theme = {
          theme,
          ...calcColors(mainColor)
        };
      }

      return {
        ...theme,
        ...rest
      };
    }

    return (
      <div style={{ position: 'relative' }} ref={ref => (containerRef = ref)}>
        <ThemeProvider theme={storybookTheme(themeData)}>
          {getStory(context)}
        </ThemeProvider>
        <div
          data-active={active}
          ref={ref => (handleRef = ref)}
          style={{
            position: 'fixed',
            width: panelWidth,
            left: `${panelX}px`,
            top: `${panelY}px`,
            display: active ? 'block' : 'none',
            boxShadow:
              '0 6px 6px 0 rgba(22, 45, 61, 0.06), 0 0 18px 0 rgba(22, 45, 61, 0.12)',
          }}
        >
          <Card>
            <Card.Header
              title={[
                <Heading
                  key={1}
                  appearance="H2"
                  style={{
                    cursor: 'all-scroll',
                    userSelect: 'none',
                  }}
                  onMouseDown={initialiseDrag}
                >
                  Theme Panel
                </Heading>,
                <Text key={2}>{'(Experimental)'}</Text>
              ]}
            />
            <Card.Divider />
            <StylePanel onChange={themeData => setThemeData(themeData)} />
          </Card>
        </div>
      </div>
    );
  },
});

export default ThemeWSR;
