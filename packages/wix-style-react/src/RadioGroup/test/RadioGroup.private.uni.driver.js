import { radioGroupUniDriverFactory as publicDriverFactory } from '../RadioGroup.uni.driver';
import { dataHooks } from '../constants';
import { radioUniDriverFactory } from '../../Radio/Radio.uni.driver';

export const radioGroupPrivateDriverFactory = (base, body) => {
  const getRadios = async () =>
    await base
      .$$(`[data-hook^="${dataHooks.RadioItem}-"]`)
      .map(radio => radioUniDriverFactory(radio, body));

  const getRadioContainerAt = async index =>
    (
      await base
        .$$(`[data-hook="${dataHooks.RadioOptionContainer}"]`)
        .map(radio => radio)
    )[index];

  const getLabelElements = async () => {
    const allLabels = [];
    for (const radio of await getRadios()) {
      allLabels.push(await radio.getLabelElement());
    }
    return allLabels;
  };

  return {
    ...publicDriverFactory(base, body),
    /** Get the class of the label element at the provided index */
    getClassOfLabelAt: async index =>
      (await getLabelElements())[index].classList,

    /** Checks if the display is set to vertical */
    isVerticalDisplay: async () =>
      (await base.attr('data-display')) === 'vertical',

    /** Checks if the display is set to horizontal */
    isHorizontalDisplay: async () =>
      (await base.attr('data-display')) === 'horizontal',

    /** Get the value of applied spacing between radios */
    spacing: async () => {
      const secondOption = await getRadioContainerAt(1);
      return (await secondOption._prop('style')).marginTop;
    },

    /** Get the value of applied line-height on the radio's labels */
    lineHeight: async () => await base.attr('data-lineheight'),
  };
};
