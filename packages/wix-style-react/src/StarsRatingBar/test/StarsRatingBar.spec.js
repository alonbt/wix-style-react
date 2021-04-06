import React from 'react';
import { createRendererWithUniDriver, cleanup } from '../../../test/utils/unit';

import StarsRatingBar from '../StarsRatingBar';
import { starsRatingBarPrivateDriverFactory } from './StarsRatingBar.private.uni.driver';

describe(StarsRatingBar.displayName, () => {
  const render = createRendererWithUniDriver(
    starsRatingBarPrivateDriverFactory,
  );

  afterEach(cleanup);

  it('should render stars rating bar', async () => {
    const { driver } = render(<StarsRatingBar value={1} />);

    expect(await driver.exists()).toBe(true);
  });

  it('should show correct value on interactive mode', async () => {
    const ratingValue = 2;
    const { driver } = render(<StarsRatingBar value={ratingValue} />);

    expect(await driver.getSelectedRating()).toEqual(ratingValue);
  });

  it('should show correct value on readOnly mode', async () => {
    const ratingValue = 2;
    const { driver } = render(<StarsRatingBar value={ratingValue} readOnly />);

    expect(await driver.getSelectedRating()).toEqual(ratingValue);
  });

  describe('rate caption', () => {
    it.each([
      { index: 1, text: 'bad' },
      { index: 2, text: 'not good' },
      { index: 3, text: 'ok' },
      { index: 4, text: 'good' },
      { index: 5, text: 'excellent' },
    ])('should display the correct rate caption', async rateCaption => {
      const descriptionValues = ['bad', 'not good', 'ok', 'good', 'excellent'];
      const { driver } = render(
        <StarsRatingBar
          value={rateCaption.index}
          descriptionValues={descriptionValues}
        />,
      );

      expect(await driver.getDisplayedRateCaptionLabel()).toEqual(
        rateCaption.text,
      );
    });

    it('should not display a rate caption', async () => {
      const { driver } = render(<StarsRatingBar value={2} />);

      expect(await driver.isRatingCaptionExists()).toBe(false);
    });
  });

  it('expect onChange to be called after selecting a rating', async () => {
    const onChange = jest.fn();
    const { driver } = render(<StarsRatingBar value={0} onChange={onChange} />);

    expect(await driver.getSelectedRating()).toEqual(0);

    await driver.selectRating(4);
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith(4);
  });

  describe('hover', () => {
    it('should show correct value on hover', async () => {
      const { driver } = render(<StarsRatingBar value={0} />);

      expect(await driver.getSelectedRating()).toEqual(0);

      await driver.hoverOnStar(3);
      expect(await driver.getSelectedRating()).toEqual(3);
    });

    it.each([
      { index: 1, text: 'bad' },
      { index: 2, text: 'not good' },
      { index: 3, text: 'ok' },
      { index: 4, text: 'good' },
      { index: 5, text: 'excellent' },
    ])(
      'should display the rate caption of the hovered star',
      async rateCaption => {
        const descriptionValues = [
          'bad',
          'not good',
          'ok',
          'good',
          'excellent',
        ];
        const { driver } = render(
          <StarsRatingBar value={3} descriptionValues={descriptionValues} />,
        );

        expect(await driver.getSelectedRating()).toEqual(3);

        await driver.hoverOnStar(rateCaption.index);
        expect(await driver.getDisplayedRateCaptionLabel()).toEqual(
          rateCaption.text,
        );
      },
    );
  });
});
