import { Simulate } from 'react-dom/test-utils';
import { tooltipDriverFactory } from 'wix-ui-core/dist/src/components/tooltip/Tooltip.driver';
import { dataHooks } from './constants';

const formFieldDriver = ({ element, dataHook }) => {
  const byHook = hook => element.querySelector(`[data-hook*="${hook}"]`);
  const charactersCounter = () => byHook(dataHooks.counter);

  const tooltipTestkit = () =>
    tooltipDriverFactory({
      element: byHook(`${dataHook}-formfield-infoicon-tooltip`),
      eventTrigger: Simulate,
    });

  return {
    exists: () => !!element,
    element: () => element,
    /** get children */
    getChildren: () => byHook(dataHooks.children),
    /** get label */
    getLabel: () => byHook(dataHooks.label),
    /** returns true whether form field is required */
    isRequired: () => !!byHook(dataHooks.asterisk),
    /** returns the length left */
    getLengthLeft: () => {
      const counter = charactersCounter();
      return counter ? parseInt(counter.innerHTML, 10) : null;
    },
    /** returns whether the form field length is exceeded */
    isLengthExceeded: () => {
      const counter = charactersCounter();
      if (counter) {
        const length = parseInt(counter.innerHTML, 10);
        return length < 0;
      }
      return false;
    },
    /** returns true whether form field has tooltip */
    hasTooltip: () => tooltipTestkit().exists(),
    /** returns tooltip text of the info content */
    getInfoContent: () => {
      const tooltipDriver = tooltipTestkit();
      tooltipDriver.mouseEnter();
      return tooltipDriver.getContentElement().textContent;
    },
    /** get form field suffix */
    getSuffix: () => byHook(dataHooks.suffix),
  };
};

export default formFieldDriver;
