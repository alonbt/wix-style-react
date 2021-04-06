import React from 'react';
import { createRendererWithUniDriver, cleanup } from '../../../test/utils/unit';

import FacesRatingBar from '../FacesRatingBar';
import { facesRatingBarPrivateDriverFactory } from './FacesRatingBar.private.uni.driver';

describe(FacesRatingBar.displayName, () => {
  const render = createRendererWithUniDriver(
    facesRatingBarPrivateDriverFactory,
  );

  afterEach(cleanup);

  it('should render the faces rating bar', async () => {
    const { driver } = render(<FacesRatingBar value={3} />);

    expect(await driver.exists()).toBe(true);
  });

  it('expect onChange to be called after selecting a rating', async () => {
    const onChange = jest.fn();
    const { driver } = render(<FacesRatingBar value={0} onChange={onChange} />);

    expect(await driver.getSelectedRating()).toEqual(0);

    await driver.selectRating(4);
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith(4);
  });

  describe('description values', () => {
    it.each([
      { index: 1, text: 'Strong Negative' },
      { index: 2, text: 'Negative' },
      { index: 3, text: 'Neutral' },
      { index: 4, text: 'Positive' },
      { index: 5, text: 'Strong Positive' },
    ])(
      'should display the correct description value on hover',
      async descriptionValue => {
        const descriptionValues = [
          'Strong Negative',
          'Negative',
          'Neutral',
          'Positive',
          'Strong Positive',
        ];
        const { driver } = render(
          <FacesRatingBar
            value={descriptionValue.index}
            descriptionValues={descriptionValues}
          />,
        );

        const tooltipDriver = await driver.getCurrentTooltipDriver(
          descriptionValue.index,
        );
        expect(await tooltipDriver.getTooltipText()).toEqual(
          descriptionValue.text,
        );
      },
    );

    it.each([1, 2, 3, 4, 5])(
      'should not display description values',
      async index => {
        const { driver } = render(<FacesRatingBar value={index} />);

        const tooltipDriver = await driver.getCurrentTooltipDriver(index);
        expect(await tooltipDriver.tooltipExists()).toEqual(false);
      },
    );
  });
});
