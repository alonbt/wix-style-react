import ReactTestUtils from 'react-dom/test-utils';
import { Appearance } from './constants';

const sectionHelperDriverFactory = ({ element }) => {
  const hasAppearance = appearance => element.dataset.appearance === appearance;
  const byHook = hook => element.querySelector(`[data-hook="${hook}"]`);
  const getCloseButton = () => byHook('sectionhelper-close-btn');
  const getActionButton = () => byHook('sectionhelper-action-btn');

  return {
    exists: () => !!element,
    titleText: () => byHook('sectionhelper-title').textContent,
    actionText: () => getActionButton().textContent,
    clickAction: () => {
      ReactTestUtils.Simulate.click(getActionButton());
    },
    clickClose: () => {
      ReactTestUtils.Simulate.click(getCloseButton());
    },
    isCloseButtonDisplayed: () => !!getCloseButton(),
    textContent: () => element.textContent,
    isWarning: () => hasAppearance(Appearance.Warning),
    isStandard: () => hasAppearance(Appearance.Standard),
    isDanger: () => hasAppearance(Appearance.Danger),
    isExperimentalDark: () => hasAppearance(Appearance.ExperimentalDark),
    isSuccess: () => hasAppearance(Appearance.Success),
    isPremium: () => hasAppearance(Appearance.Premium),
    isPreview: () => hasAppearance(Appearance.Preview),
  };
};

export default sectionHelperDriverFactory;
