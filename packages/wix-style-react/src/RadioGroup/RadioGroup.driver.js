import toArray from 'lodash/toArray';
import radioDriverFactory from '../Radio/Radio.driver';
import { dataHooks, dataAttr } from './constants';
import { dataHooks as radioDataHooks } from '../Radio/constants';

const radioGroupDriverFactory = ({ element, eventTrigger }) => {
  const getOptionContainer = () =>
    element.querySelector(`[data-hook="${dataHooks.RadioOptionContainer}"]`);

  const getRadios = () =>
    toArray(
      element.querySelectorAll(
        `[data-hook^="${dataHooks.RadioContainer}-"] > :first-child`,
      ),
    ).map(radio =>
      radioButtonDriverFactory({
        element: radio,
        eventTrigger,
        container: getOptionContainer,
      }),
    );

  const getRadioByIndex = index => getRadios()[index];

  const getRadioByValue = value =>
    radioButtonDriverFactory({
      element: element.querySelector(
        `[data-hook="${dataHooks.RadioContainer}-${value}"] > :first-child`,
      ),
      eventTrigger,
      container: getOptionContainer,
    });

  const getRadioContainerAt = index =>
    element.querySelectorAll(`[data-hook="${dataHooks.RadioOptionContainer}"]`)[
      index
    ];

  const getLabelElements = () =>
    getRadios().map(radio => radio.getLabelElement());

  const getSelectedRadio = () => getRadios().find(radio => radio.isChecked());

  return {
    /** Checks that the element exists */
    exists: () => !!element,

    /** Selects the radio that matches the provided value */
    selectByValue: value => getRadioByValue(value).click(),

    /** Selects the radio at the provided index */
    selectByIndex: index => getRadioByIndex(index).click(),

    /** Get the radio value at the provided index */
    getRadioValueAt: index => getRadioByIndex(index).getValue(),

    /** Get the radio element in the provided index */
    getRadioAtIndex: index => getRadios()[index],

    /** Get the value of the selected radio */
    getSelectedValue: () => {
      const selected = getSelectedRadio();
      return selected ? selected.getValue() : null;
    },

    /** Checks if the radio in the provided index is disabled */
    isRadioDisabled: index => getRadios()[index].isDisabled(),

    // TODO: We should deprecate getClassOfLabelAt(). Css tests should be in e2e tests.
    /** Get the class of the label element at the provided index */
    getClassOfLabelAt: index => getLabelElements()[index].className,

    /** Checks if the display is set to vertical */
    isVerticalDisplay: () =>
      element.getAttribute(dataAttr.DISPLAY) === 'vertical',

    /** Checks if the display is set to horizontal */
    isHorizontalDisplay: () =>
      element.getAttribute(dataAttr.DISPLAY) === 'horizontal',

    /** Get the value of applied spacing between radios */
    spacing: () => getRadioContainerAt(1).style._values['margin-top'],

    /** Get the value of applied line-height on the radio's labels */
    lineHeight: () => element.getAttribute(dataAttr.LINEHEIGHT),

    /** Get the number of rendered radios */
    getNumberOfRadios: () => getRadios().length,

    /** Get the value of radio button id at the provided index */
    getRadioIdAt: index => getRadioByIndex(index).getId(),

    /** Get the value of radio button name at the provided index */
    getRadioName: () => getRadioByIndex(0).getName(),

    /** Checks if the radio with the provided index is checked */
    isRadioChecked: index => getRadioByIndex(index).isChecked(),
  };
};

const radioButtonDriverFactory = ({ element, eventTrigger, container }) => {
  const getByDataHook = dataHook =>
    element.querySelector(`[data-hook="${dataHook}"]`);
  const label = () => getByDataHook(radioDataHooks.label);

  return {
    ...radioDriverFactory({ element, eventTrigger }),
    /** Simulating a check action by clicking the input element */
    check: () => element.click(),

    /** Getting the component's label text value */
    getLabel: () => label().textContent,

    /** Getting the component's label element */
    getLabelElement: () => label(),

    /** Getting the component's tab-index value */
    // This method is deprecated and this solution is in order not to break users
    getTabIndex: () => '1',

    /** Getting the component's content element */
    getContent: () =>
      container().querySelector(`[data-hook="${dataHooks.RadioContent}"]`),
  };
};

export default radioGroupDriverFactory;
