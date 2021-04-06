import React from 'react';
import { visualize, snap } from 'storybook-snapper';
import GoogleAddressInput from '..';
import clients from '../../clients';
import GoogleAPILoader from '../../../stories/utils/GoogleAPILoader';

const defaultProps = {
  Client: clients.GoogleMapsClient,
};

const tests = [
  {
    describe: 'basic',
    its: [
      {
        it: 'default render',
        props: {},
      },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    visualize(`GoogleAddressInput${describe ? '/' + describe : ''}`, () => {
      snap(it, done => (
        <GoogleAPILoader onLoad={() => done()}>
          <GoogleAddressInput {...defaultProps} {...props} />
        </GoogleAPILoader>
      ));
    });
  });
});
