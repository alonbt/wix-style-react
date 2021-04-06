import { DataHooks } from './hooks';

const headerDriverFactory = ({ element }) => {
  const title = () => element.querySelector(`[data-hook="${DataHooks.title}"]`);
  const subtitle = () =>
    element.querySelector(`[data-hook="${DataHooks.subtitle}"]`);

  return {
    exists: () => !!element,
    title: () => {
      const el = title();
      return el && el.textContent;
    },
    subtitle: () => {
      const el = subtitle();
      return el && el.textContent;
    },
  };
};

export default headerDriverFactory;
