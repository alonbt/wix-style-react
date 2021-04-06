import { testkitFactoryCreator } from 'wix-ui-test-utils/vanilla';
import textDriverFactory from '../Text/Text.driver';
import { dataHooks } from './ContactItemBuilderDataHooks';

const contactItemBuilderDriverFactory = ({ element }) => {
  const textTestkitFactory = testkitFactoryCreator(textDriverFactory);

  const titleDriver = textTestkitFactory({
    wrapper: element,
    dataHook: dataHooks.pickerOptionTitle,
  });

  const subtitleDriver = textTestkitFactory({
    wrapper: element,
    dataHook: dataHooks.pickerOptionSubtitle,
  });

  return {
    exists: () => !!element,
    getTitle: () => titleDriver.getText(),
    getSubtitle: () => subtitleDriver.getText(),
  };
};

export default contactItemBuilderDriverFactory;
