import React from 'react';
import { Simulate, renderIntoDocument } from 'react-dom/test-utils';
import Ticker from '..';
import { InputContext } from '../../InputContext';
import { dataHooks } from '../constants';

export const tickerDriverFactory = component => {
  const handlers = {
    getUp: () => component.querySelector(`[data-hook="${dataHooks.tickerUp}"]`),
    getDown: () =>
      component.querySelector(`[data-hook="${dataHooks.tickerDown}"]`),
    clickUp: () => Simulate.click(handlers.getUp()),
    clickDown: () => Simulate.click(handlers.getDown()),
    isUpDisabled: () => handlers.getUp().hasAttribute('data-disabled'),
    isDownDisabled: () => handlers.getDown().hasAttribute('data-disabled'),
    exists: () => !!component,
  };
  return handlers;
};

export const componentFactory = (props = {}, context = {}) =>
  renderIntoDocument(
    <div>
      <InputContext.Provider value={context}>
        <Ticker dataHook="ticker" {...props} />
      </InputContext.Provider>
    </div>,
  ).childNodes[0];

export const tickerTestkitFactory = ({ wrapper }) =>
  tickerDriverFactory(wrapper.querySelector('[data-hook=ticker]'));
