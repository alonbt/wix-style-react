import allComponents from '../../../autodocs-registry/autodocs-registry.json';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Layout, Cell } from '../../../src/Layout';
import Tooltip from '../../../src/Tooltip';

function getTestValues(
  { type, required, defaultValue },
  { skipUndefinedValue },
) {
  const testValues = [];

  if (!skipUndefinedValue && !required && !defaultValue) {
    testValues.push(undefined);
  }

  switch (type.name) {
    case 'bool':
      testValues.push(false, true);
      break;

    case 'string':
      testValues.push('Hello World');
      break;

    case 'number':
      testValues.push(5);
      break;

    case 'enum':
      type.value.forEach(value => {
        if (value.computed) {
          testValues.push(value.value);
        } else {
          // eslint-disable-next-line no-eval
          testValues.push(eval(value.value));
        }
      });
      break;

    default:
  }

  return testValues;
}

function getPropsPermutations(componentName, options) {
  const { props } = options;
  let permutations = [];
  const component = allComponents[componentName];
  const propsMap = {};

  props.forEach(propName => {
    if (typeof propName === 'string') {
      if (!component.props[propName])
        throw new Error(
          `prop ${propName} does not exist in component ${componentName}`,
        );

      propsMap[propName] = getTestValues(component.props[propName], options);
    } else if (typeof propName === 'object') {
      if (!component.props[propName.name])
        throw new Error(
          `prop ${propName} does not exist in component ${componentName}`,
        );
      propsMap[propName.name] = propName.values;
    }
  });

  Object.keys(propsMap).forEach(key => {
    if (permutations.length === 0) {
      propsMap[key].forEach(value => permutations.push({ [key]: value }));
    } else {
      const arr = [];
      propsMap[key].forEach(value =>
        permutations.forEach(group => arr.push({ ...group, [key]: value })),
      );
      permutations = arr;
    }
  });

  return permutations;
}

/**
 * Create a story of props permutations
 * @param Story - A renderable node
 * @param Component - The component class
 * @param options - {
 *   props - string[] - Names of the props to test
 *   skipUndefinedValue - boolean - If true, will not test undefined values
 * }
 */
export const storyOfAllPermutations = (Story, Component, options = {}) => {
  const permutations = getPropsPermutations(Component.displayName, options);
  const {
    storyName = 'Props Permutations',
    testWithTheme = i => i,
    themeName,
  } = options;
  storiesOf(
    `${themeName ? `${themeName}|` : ''}${Component.displayName}`,
    module,
  ).add(storyName, () =>
    testWithTheme(
      <Layout>
        {permutations.map((props, key) => (
          <Cell key={key}>
            <Layout>
              <Cell span={1}>
                <Tooltip content={JSON.stringify(props)}>
                  <span>{key}</span>
                </Tooltip>
              </Cell>
              <Cell span={11}>
                <Story {...props} />
              </Cell>
            </Layout>
          </Cell>
        ))}
      </Layout>,
    ),
  );
};

/** A simple wait function to test components with animations */
export const wait = timeToDelay =>
  new Promise(resolve => setTimeout(resolve, timeToDelay));
