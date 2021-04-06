import messageBoxMarketerialLayoutDriverFactory from './MessageBoxMarketerialLayout.driver';

const messageBoxMarketerialLayoutPrivateDriverFactory = ({ element }) => {
  const primaryButton = () =>
    element.querySelector('[data-hook="primary-button"]');
  const closeButton = () => element.querySelector('[data-hook="close-button"]');

  return {
    ...messageBoxMarketerialLayoutDriverFactory({ element }),
    hasPrimaryButtonSkin: skin => primaryButton().dataset.skin === skin,
    isPrimaryButtonDisabled: () => !!primaryButton().disabled,
    closeButtonHasSkin: skin => closeButton().dataset.skin === skin,
  };
};

export default messageBoxMarketerialLayoutPrivateDriverFactory;
