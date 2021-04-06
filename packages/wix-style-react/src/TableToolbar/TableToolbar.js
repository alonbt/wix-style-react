import React from 'react';
import PropTypes from 'prop-types';
import { Toolbar, ItemGroup, Item, Label, Divider } from './Toolbar';
import Heading from '../Heading';
import Text from '../Text';

export const Title = props => {
  const { dataHook } = props;
  return (
    <Heading dataHook={dataHook} appearance="H3">
      {props.children}
    </Heading>
  );
};

Title.displayName = 'TableToolbar.Title';
Title.propTypes = {
  children: PropTypes.node,
  dataHook: PropTypes.string,
};

export const SelectedCount = props => {
  const { dataHook } = props;
  return (
    <Text dataHook={dataHook} weight="normal" size="medium">
      {props.children}
    </Text>
  );
};
SelectedCount.displayName = 'TableToolbar.SelectedCount';
SelectedCount.propTypes = {
  children: PropTypes.node,
  dataHook: PropTypes.string,
};

export const TableToolbar = Toolbar;

// Aliases for convenience
TableToolbar.ItemGroup = ItemGroup;
TableToolbar.Item = Item;
TableToolbar.Label = Label;
TableToolbar.SelectedCount = SelectedCount;
TableToolbar.Title = Title;
TableToolbar.Divider = Divider;
