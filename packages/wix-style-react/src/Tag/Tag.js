import React from 'react';
import PropTypes from 'prop-types';
import { st, classes } from './Tag.st.css';
import CloseButton from '../CloseButton';
import Text from '../Text';
import { dataHooks } from './Tag.helpers';
import { FontUpgradeContext } from '../FontUpgrade/context';
import { generateDataAttr } from '../utils/generateDataAttr';

const tagToTextSize = {
  tiny: 'tiny',
  small: 'small',
  medium: 'small',
  large: 'medium',
};

const noop = () => ({});

/**
 * A Tag component
 */
class Tag extends React.PureComponent {
  static displayName = 'Tag';

  _renderThumb() {
    const { thumb } = this.props;
    return thumb ? (
      <span data-hook={dataHooks.thumb} className={classes.thumb}>
        {thumb}
      </span>
    ) : null;
  }

  _renderText({ isMadefor }) {
    const { size, children, disabled, theme } = this.props;

    return (
      <Text
        skin={disabled ? 'disabled' : 'standard'}
        light={theme === 'dark'}
        secondary={theme !== 'dark'}
        ellipsis
        size={tagToTextSize[size]}
        weight={isMadefor || size === 'tiny' ? 'thin' : 'normal'}
        className={classes.text}
        dataHook={dataHooks.text}
      >
        {children}
      </Text>
    );
  }

  _renderRemoveButton() {
    const { removable, disabled, size, theme } = this.props;
    if (removable) {
      return (
        <CloseButton
          size={size === 'large' ? 'medium' : 'small'}
          skin={theme === 'dark' ? 'light' : 'dark'}
          disabled={disabled}
          dataHook={dataHooks.removeButton}
          className={classes.removeButton}
          onClick={this._handleRemoveClick}
        />
      );
    } else {
      return null;
    }
  }

  _handleRemoveClick = event => {
    const { onRemove, id } = this.props;
    event.stopPropagation();
    onRemove(id);
  };

  _handleOnClick = event => {
    const { id, onClick } = this.props;
    return onClick && onClick(id, event);
  };

  render() {
    const {
      id,
      onClick,
      maxWidth,
      dataHook,
      size,
      disabled,
      theme,
      thumb,
      removable,
      className,
    } = this.props;
    const clickable = !!onClick;
    const hoverable = !disabled && !!onClick;
    return (
      <FontUpgradeContext.Consumer>
        {({ active: isMadefor }) => (
          <span
            className={st(
              classes.root,
              {
                withRemoveButton: removable,
                withThumb: !!thumb,
                disabled,
                clickable,
                hoverable,
                size,
                theme,
              },
              className,
            )}
            {...generateDataAttr({ ...this.props, hoverable, clickable }, [
              'size',
              'disabled',
              'theme',
              'hoverable',
              'clickable',
            ])}
            data-hook={dataHook}
            id={id}
            onClick={this._handleOnClick}
            style={{ maxWidth: `${maxWidth}px` }}
          >
            {this._renderThumb()}
            {this._renderText({ isMadefor })}
            {this._renderRemoveButton()}
          </span>
        )}
      </FontUpgradeContext.Consumer>
    );
  }
}

Tag.propTypes = {
  /** Applied as data-hook HTML attribute that can be used in the tests */
  dataHook: PropTypes.string,

  /** The text of the tag */
  children: PropTypes.node.isRequired,

  /** when set to true this component is disabled */
  disabled: PropTypes.bool,

  /** The id of the Tag  */
  id: PropTypes.string.isRequired,

  /** Callback function that pass `id` property as first parameter
   * and mouse event as second parameter when clicking on Tag */
  onClick: PropTypes.func,

  /** Callback function that pass `id` property as parameter when removing the Tag  */
  onRemove: PropTypes.func,

  /** If the Tag is removable then it will contain a small clickable X */
  removable: PropTypes.bool,

  /** The height of the Tag */
  size: PropTypes.oneOf(['tiny', 'small', 'medium', 'large']),

  /** theme of the Tag */
  theme: PropTypes.oneOf([
    'standard',
    'error',
    'warning',
    'dark',
    'neutral',
    'light',
    'lightOutlined',
  ]),

  /** An optional thumb to display as part of the Tag */
  thumb: PropTypes.element,

  /** An optional maximum tag width in `px` for cropping. */
  maxWidth: PropTypes.number,

  /** Standard className which has preference over any other intrinsic classes  */
  className: PropTypes.string,
};

Tag.defaultProps = {
  size: 'small',
  removable: true,
  theme: 'standard',
};

export default Tag;
