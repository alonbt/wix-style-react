import rangeWithLabelCompositeDriverFactory from './RangeInputWithLabelComposite/RangeInputWithLabelComposite.protractor.driver';

const rangeDriverFactory = component => {
  return {
    ...rangeWithLabelCompositeDriverFactory(component),
  };
};

export default rangeDriverFactory;
