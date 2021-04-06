import { testkit as inputTestkit } from '../Input/Input.uni.driver';
import { tickerDriverFactory } from '../Input/Ticker/Ticker.uni.driver';

export const numberInputDriverFactory = (base, body) => {
  const getTickerDriver = () =>
    tickerDriverFactory(base.$('[data-hook="number-input-ticker"]'));
  return {
    ...inputTestkit(base, body),
    /** Click on ticker up */
    clickOnIncrement: () => getTickerDriver().clickUp(),
    /** Click on ticker down */
    clickOnDecrement: () => getTickerDriver().clickDown(),
    /** Check if ticker down is disabled */
    isDownDisabled: () => getTickerDriver().isDownDisabled(),
    /** Check if ticker up is disabled */
    isUpDisabled: () => getTickerDriver().isUpDisabled(),
  };
};
