import { tooltipTestkitFactory } from 'wix-ui-core/dist/src/testkit';

const fieldLabelAttributesDriverFactory = ({ element }) => {
  const tooltipTestkit = tooltipTestkitFactory({ element, dataHook: 'info' });
  return {
    exists: () => !!element,
    getTooltipTestKit: () => tooltipTestkit,
    hasRequired: () =>
      !!element.querySelectorAll('[data-hook="required"]').length,
    hasInfo: () => !!element.querySelectorAll('[data-hook="info"]').length,
  };
};

export default fieldLabelAttributesDriverFactory;
