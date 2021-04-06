import { $ } from 'protractor';
import { circularProgressBarDriverFactory as coreCircularProgressBarDriverFactory } from 'wix-ui-core/drivers/protractor';
import { dataHooks } from './constants';

const circularProgressBarDriverFactory = element => {
  return {
    ...coreCircularProgressBarDriverFactory(
      $(`[data-hook='${dataHooks.circularProgressBar}']`),
    ),
    getTooltip: () => $(`[data-hook='${dataHooks.tooltip}']`),
  };
};

export default circularProgressBarDriverFactory;
