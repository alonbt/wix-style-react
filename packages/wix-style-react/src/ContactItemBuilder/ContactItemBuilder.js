import React from 'react';
import { classes } from './ContactItemBuilder.st.css';
import Avatar from '../Avatar/Avatar';
import Text from '../Text';
import { dataHooks } from './ContactItemBuilderDataHooks';
import PropTypes from 'prop-types';
import deprecationLog from '../utils/deprecationLog';

export const ContactItem = props => {
  deprecationLog(
    'This component is deprecated. Please use ListItemSelect instead',
  );

  return (
    <div className={classes.contactItemOption}>
      <div className={classes.avatar}>
        <Avatar
          name={props.title}
          size="size30"
          imgProps={{ src: props.imageUrl }}
          data-hook={dataHooks.pickerOptionAvatar}
        />
      </div>
      <div className={classes.contactItemTitles}>
        <Text
          ellipsis
          size="medium"
          weight="normal"
          secondary={!props.selected}
          light={props.selected}
          dataHook={dataHooks.pickerOptionTitle}
        >
          {props.title}
        </Text>
        {props.subtitle ? (
          <Text
            ellipsis
            size="small"
            weight="thin"
            secondary={!props.selected}
            light={props.selected}
            dataHook={dataHooks.pickerOptionSubtitle}
          >
            {props.subtitle}
          </Text>
        ) : null}
      </div>
    </div>
  );
};

ContactItem.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  imageUrl: PropTypes.string,
};

export const contactItemBuilder = ({
  id,
  title,
  subtitle,
  imageUrl,
  disabled,
}) => ({
  id,
  disabled,
  value: ({ selected }) => (
    <ContactItem
      title={title}
      subtitle={subtitle}
      imageUrl={imageUrl}
      selected={selected}
    />
  ),
});
