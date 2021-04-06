import React from 'react';
import { storiesOf } from '@storybook/react';
import Image from '../Image';

const commonProps = {
  // Test image (100px x 100px)
  src:
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAACTklEQVR4Xu2dMW4bQRTFonPkHCly/8JFzuFzxIhLCcgnBvuJtUHXnHkrUpAKFX68//7190d/tzHwKMhtWnw+SEHu1aMgN+vxGuTn25/H3R7yOz/P81fGy0dWQdz8BXF9j2sFGRW5QEFc3+NaQUZFLlAQ1/e4VpBRkQsUxPU9rhVkVOQCBXF9j2sFGRW5QEFc3+NaQUZFLlAQ1/e4VpBRkQsUxPU9rmlBvvNv9Vf+ZlSQ8T07AwWZHalEQVTd89iXDDK/rGuI58/gK2Vd84T/v0X7DjFezL+Nglim4U5BoCgLK4hlGu4UBIqysIJYpuFOQaAoCyuIZRruFASKsrCCWKbhTkGgKAsriGUa7hQEirKwglim4U5BoCgLK4hlGu4UBIqysIJYpuFOQaAoCyuIZRruFASKsrCCWKbhTkGgKAsriGUa7hQEirKwglim4U5BoCgLK4hlGu4UBIqysIJYpuFOQaAoCyuIZRruFASKsrCCWKbhTkGgKAsriGUa7hQEirKwglim4U5BoCgLK4hlGu4UBIqysIJYpuFOQaAoCyuIZRruFASKsrCCWKbhTkGgKAsriGUa7hQEirKwglim4U5BoCgLK4hlGu4UBIqysIJYpuFOQaCoMGbg+Q3V/8Jl3taogqypPbu4IGfe1k4VZE3t2cUFOfO2dqoga2rPLi7Imbe1UwVZU3t2cUHOvK2dKsia2rOLC3Lmbe1UQdbUnl1ckDNva6cKsqb27OKCnHlbOzUGWVvuYmTg5fcQdCpozUBB1tSeXVyQM29rpz4AiuhEmroNH+YAAAAASUVORK5CYII=',
  width: 150,
  height: 150,
};

const tests = [
  {
    describe: 'src',
    its: [
      {
        it: 'not empty',
        props: {},
      },
      {
        it: 'empty',
        props: {
          src: '',
        },
      },
      {
        it: 'not specified',
        props: {
          src: undefined,
        },
      },
      {
        it: 'broken',
        props: {
          src: 'doesnotexist',
        },
      },
    ],
  },
  {
    describe: 'size',
    its: [
      {
        it: 'both width and height undefined',
        props: {
          width: undefined,
          height: undefined,
        },
        wrapperStyle: {
          width: 100,
          height: 100,
        },
      },
      {
        it: 'width defined and height undefined',
        props: {
          width: 150,
          height: undefined,
        },
      },
      {
        it: 'height defined and width undefined',
        props: {
          width: undefined,
          height: 150,
        },
        wrapperStyle: {
          width: 150,
        },
      },
      {
        it: 'both width and height defined',
        props: {
          width: 250,
          height: 150,
        },
      },
    ],
  },
  {
    describe: 'fit',
    its: [
      {
        it: 'none',
        props: {
          fit: 'none',
        },
      },
      {
        it: 'contain',
        props: {
          height: 80,
          fit: 'contain',
        },
      },
      {
        it: 'cover',
        props: {
          width: 100,
          fit: 'cover',
        },
      },
      {
        it: 'tile',
        props: {
          width: 250,
          fit: 'tile',
        },
      },
    ],
  },
  {
    describe: 'position',
    its: [
      {
        it: 'center',
        props: {
          fit: 'none',
          position: 'center',
        },
      },
      {
        it: 'top',
        props: {
          fit: 'none',
          position: 'top',
        },
      },
      {
        it: 'top left',
        props: {
          fit: 'none',
          position: 'top left',
        },
      },
      {
        it: 'top right',
        props: {
          fit: 'none',
          position: 'top right',
        },
      },
      {
        it: 'bottom left',
        props: {
          fit: 'none',
          position: 'bottom left',
        },
      },
      {
        it: 'bottom',
        props: {
          fit: 'none',
          position: 'bottom',
        },
      },
      {
        it: 'bottom right',
        props: {
          fit: 'none',
          position: 'bottom right',
        },
      },
    ],
  },
  {
    describe: 'showBorder',
    its: [
      {
        it: 'should show border if showBorder prop is true',
        props: { showBorder: true },
      },
    ],
  },
  {
    describe: 'border radius',
    its: [
      {
        it:
          'should show different border radius if a valid borderRadius prop is passed',
        props: {
          borderRadius: '10px 20px 30px 40px',
        },
      },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props, wrapperStyle }) => {
    storiesOf(`Image${describe ? '/' + describe : ''}`, module).add(it, () => (
      <div style={wrapperStyle}>
        <Image {...commonProps} {...props} />
      </div>
    ));
  });
});
