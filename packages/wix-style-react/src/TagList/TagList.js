import React from 'react';
import PropTypes from 'prop-types';
import { st, classes } from './TagList.st.css';
import Tag from '../Tag';
import TagListAction from './TagListAction';
import ToggleMoreButton from './ToggleMoreButton';
import dataHooks from './dataHooks';

const tagToActionButtonSize = {
  small: 'tiny',
  medium: 'small',
  large: 'medium',
};

/** TagList */
class TagList extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isExpanded: props.initiallyExpanded,
    };
  }

  _toggleExpanded = () =>
    this.setState(prevState => ({ isExpanded: !prevState.isExpanded }));

  _renderToggleMoreButton = () => {
    const { toggleMoreButton, tags, maxVisibleTags } = this.props;
    const { isExpanded } = this.state;

    const amountOfHiddenTags = tags.length - maxVisibleTags;

    if (toggleMoreButton && amountOfHiddenTags > 0) {
      return (
        <ToggleMoreButton
          {...{
            toggleMoreButton,
            amountOfHiddenTags,
            isExpanded,
          }}
          dataHook={dataHooks.toggleMoreButton}
          onClick={this._toggleExpanded}
        />
      );
    }

    return null;
  };

  render() {
    const {
      dataHook,
      tags,
      actionButton,
      size,
      onTagRemove,
      maxVisibleTags,
    } = this.props;
    const { isExpanded } = this.state;

    const visibleTags = isExpanded ? tags : tags.slice(0, maxVisibleTags);

    const actionButtonSize = tagToActionButtonSize[size];

    return (
      <div className={classes.root} data-hook={dataHook}>
        {visibleTags.map(({ className, ...tagProps }) => (
          <Tag
            {...tagProps}
            className={st(classes.item, className)}
            size={size}
            onRemove={onTagRemove}
            key={tagProps.id}
          />
        ))}
        {this._renderToggleMoreButton()}
        {actionButton && (
          <TagListAction
            dataHook={dataHooks.actionButton}
            size={actionButtonSize}
            onClick={actionButton.onClick}
          >
            {actionButton.label}
          </TagListAction>
        )}
      </div>
    );
  }
}

TagList.displayName = 'TagList';

TagList.propTypes = {
  /** Applied as data-hook HTML attribute that can be used in the tests */
  dataHook: PropTypes.string,

  /** List of tags props to be rendered */
  tags: PropTypes.arrayOf(PropTypes.object),

  /** Callback function that passes `id` property as parameter when removing a Tag  */
  onTagRemove: PropTypes.func,

  /** The size of each individual `<Tag />` */
  size: PropTypes.oneOf(['small', 'medium', 'large']),

  /** Whether list is initially expanded */
  initiallyExpanded: PropTypes.bool,

  /** The amount of tags to show before expanding */
  maxVisibleTags: PropTypes.number,

  /** Action button label and onClick handler */
  actionButton: PropTypes.shape({
    onClick: PropTypes.func,
    label: PropTypes.string,
  }),

  /** Function which provides props for the Toggle more `Button`
   * ##### toggleMoreButton signature:
   * function(amountOfHiddenTags: number, isExpanded: boolean) => ToggleMoreButtonProps
   * ##### ToggleMoreButtonProps: shape [
   * * label: string
   * * tooltipContent: node
   * * tooltipProps: TooltipCommonProps
   * ]
   */
  toggleMoreButton: PropTypes.func,
};

TagList.defaultProps = {
  size: 'small',
  initiallyExpanded: false,
  maxVisibleTags: 3,
};

export default TagList;
