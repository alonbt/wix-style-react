import React from 'react';
import { createRendererWithUniDriver, cleanup } from '../../../test/utils/unit';

import TestimonialList from '../TestimonialList';
import { testimonialListPrivateDriverFactory } from './TestimonialList.private.uni.driver';

describe(TestimonialList.displayName, () => {
  const render = createRendererWithUniDriver(
    testimonialListPrivateDriverFactory,
  );

  afterEach(() => {
    cleanup();
  });

  it('should render', async () => {
    const { driver } = render(<TestimonialList />);

    expect(await driver.exists()).toBe(true);
  });

  it('should render 3 testimonials', async () => {
    const { driver } = render(
      <TestimonialList
        testimonials={[
          {
            avatar: <div />,
            text: 'I love it! This product is exactly what I needed.',
            authorName: 'Guy in glasses',
          },
          {
            avatar: <div />,
            text: 'Amazing! It helped me to solve my problems.',
            authorName: 'Person with a hat',
          },
          {
            avatar: <div />,
            text: 'A perfect tool for my every day tasks.',
            authorName: 'Smiling lady',
          },
        ]}
      />,
    );

    expect(await driver.getNumberOfTestimonials()).toEqual(3);
  });

  describe('Testimonial', () => {
    describe('avatar', () => {
      it('should display avatar', async () => {
        const { driver } = render(
          <TestimonialList
            testimonials={[
              {
                avatar: <div />,
                text: 'I love it! This product is exactly what I needed.',
                authorName: 'Guy in glasses',
              },
              {
                avatar: <div />,
                text: 'Amazing! It helped me to solve my problems.',
                authorName: 'Person with a hat',
              },
            ]}
          />,
        );

        expect(await driver.hasTestimonialAvatar(1)).toEqual(true);
      });

      it('should not display avatar', async () => {
        const { driver } = render(
          <TestimonialList
            testimonials={[
              {
                text: 'I love it! This product is exactly what I needed.',
                authorName: 'Guy in glasses',
              },
            ]}
          />,
        );

        expect(await driver.hasTestimonialAvatar(0)).toEqual(false);
      });
    });

    describe('text', () => {
      it('should display text', async () => {
        const { driver } = render(
          <TestimonialList
            testimonials={[
              {
                avatar: <div />,
                text: 'I love it! This product is exactly what I needed.',
                authorName: 'Guy in glasses',
              },
              {
                avatar: <div />,
                text: 'Amazing! It helped me to solve my problems.',
                authorName: 'Person with a hat',
              },
            ]}
          />,
        );

        expect(await driver.hasTestimonialText(1)).toEqual(true);
        expect(await driver.getTestimonialText(1)).toEqual(
          'Amazing! It helped me to solve my problems.',
        );
      });

      it('should not display text', async () => {
        const { driver } = render(
          <TestimonialList
            testimonials={[
              {
                avatar: <div />,
                authorName: 'Guy in glasses',
              },
            ]}
          />,
        );

        expect(await driver.hasTestimonialText(0)).toEqual(false);
      });
    });

    describe('author name', () => {
      it('should display author name', async () => {
        const { driver } = render(
          <TestimonialList
            testimonials={[
              {
                avatar: <div />,
                text: 'I love it! This product is exactly what I needed.',
                authorName: 'Guy in glasses',
              },
              {
                avatar: <div />,
                text: 'Amazing! It helped me to solve my problems.',
                authorName: 'Person with a hat',
              },
            ]}
          />,
        );

        expect(await driver.hasTestimonialAuthorName(1)).toEqual(true);
        expect(await driver.getTestimonialAuthorName(1)).toEqual(
          'Person with a hat',
        );
      });

      it('should not display author name', async () => {
        const { driver } = render(
          <TestimonialList
            testimonials={[
              {
                avatar: <div />,
                text: 'I love it! This product is exactly what I needed.',
              },
            ]}
          />,
        );

        expect(await driver.hasTestimonialAuthorName(0)).toEqual(false);
      });
    });
  });
});
