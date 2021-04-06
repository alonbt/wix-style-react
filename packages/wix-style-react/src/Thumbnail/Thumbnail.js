import React from 'react';
import PropTypes from 'prop-types';
import { st, classes } from './Thumbnail.st.css';
import CheckboxChecked from 'wix-ui-icons-common/system/CheckboxChecked';
import Text from '../Text';
import { withFocusable } from 'wix-ui-core/dist/src/hocs/Focusable/FocusableHOC';
import { dataHooks } from './constants';
import Box from '../Box';
import { FontUpgradeContext } from '../FontUpgrade/context';

const isString = a => typeof a === 'string';

/**
 * # Thumbnail
 * Component for showing thumbnails
 *
 * It takes full space of parent component, works well together with `<Proportion/>`
 * */
class Thumbnail extends React.PureComponent {
  static displayName = 'Thumbnail';

  static propTypes = {
    /** Applied as data-hook HTML attribute that can be used to create driver in testing */
    dataHook: PropTypes.string,

    /** A css class to be applied to the component's root element */
    className: PropTypes.string,

    /** Children to render inside thumbnail. If children passed then title will be rendered below thumbnail */
    children: PropTypes.node,

    /** Title node */
    title: PropTypes.node,

    /** Description node */
    description: PropTypes.node,

    /** Image to display in thumbnail.
     * If given as string, it will be used within `<img/>`.
     * Otherwise can be given as React.Node
     */
    image: PropTypes.node,

    /** Thumbnail size */
    size: PropTypes.oneOf(['tiny', 'small', 'medium']),

    /** Set selected state of thumbnail */
    selected: PropTypes.bool,

    /** Set disabled state of thumbnail */
    disabled: PropTypes.bool,

    /** Hide icon when thumbnail is selected */
    hideSelectedIcon: PropTypes.bool,

    /** Overrides description and image properties. Title is rendered below image thumbnail */
    backgroundImage: PropTypes.node,

    /** Callback function for onClick event */
    onClick: PropTypes.func,

    /** Width of Thumbnail */
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /** Height of Thumbnail */
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /** Content vertical alignment */
    contentAlignment: PropTypes.oneOf(['top', 'center']),
  };

  static defaultProps = {
    size: 'medium',
    selected: false,
    disabled: false,
    contentAlignment: 'center',
  };

  _renderBottomTitle = () => {
    const { size, title, selected, disabled } = this.props;

    return (
      <Box align="center">
        <Text
          className={st(classes.bottomTitle, { selected, disabled })}
          dataHook={dataHooks.thumbnailBottomTitle}
          size={size}
          tagName="div"
          weight="thin"
          ellipsis
          children={title}
        />
      </Box>
    );
  };

  _renderBackgroundLayout = () => {
    const { disabled } = this.props;

    return isString(this.props.backgroundImage) ? (
      <div
        className={st(classes.backgroundImage, { disabled })}
        data-hook={dataHooks.thumbnailBackgroundImage}
        style={{ backgroundImage: `url(${this.props.backgroundImage})` }}
      />
    ) : (
      this.props.backgroundImage
    );
  };

  _renderNoBackgroundLayout = () => {
    const { title, description, image, size } = this.props;

    return (
      <div>
        {image && (
          <div
            className={classes.image}
            data-hook={dataHooks.thumbnailImage}
            children={isString(image) ? <img src={image} /> : image}
          />
        )}

        {title && (
          <FontUpgradeContext.Consumer>
            {({ active }) => (
              <Text
                className={classes.title}
                dataHook={dataHooks.thumbnailTitle}
                size={size}
                tagName="div"
                weight={active && size === 'tiny' ? 'bold' : 'normal'}
                children={title}
              />
            )}
          </FontUpgradeContext.Consumer>
        )}

        {description && (
          <Text
            className={classes.description}
            dataHook={dataHooks.thumbnailDescription}
            size={size}
            weight="thin"
            tagName="div"
            secondary
            children={description}
          />
        )}
      </div>
    );
  };

  _renderThumbnailContent = () => {
    const { backgroundImage, children, disabled } = this.props;
    const hasBackground = !!backgroundImage;
    const hasChildren = !!children;

    if (hasChildren) {
      return (
        <div className={st(classes.customChild, { disabled })}>{children}</div>
      );
    }

    if (hasBackground) {
      return this._renderBackgroundLayout();
    }

    return this._renderNoBackgroundLayout();
  };

  _renderSelectedIcon = () => (
    <div
      className={classes.selectedIcon}
      data-hook={dataHooks.thumbnailSelectedIcon}
    >
      <CheckboxChecked height="7.8" width="10" />
    </div>
  );

  _onKeyDown = event =>
    [13 /* enter */, 32 /* space */].some(key => event.keyCode === key) &&
    this.props.onClick(event);

  render() {
    const {
      children,
      dataHook,
      size,
      selected,
      disabled,
      title,
      backgroundImage,
      onClick,
      hideSelectedIcon,
      width,
      height,
      contentAlignment,
      focusableOnFocus,
      focusableOnBlur,
      className,
    } = this.props;

    const hasChildren = !!children;
    const hasBackground = !!backgroundImage;
    const showBottomTitle = (hasChildren || hasBackground) && title;

    return (
      <div
        style={{ width }}
        className={st(classes.root, { disabled })}
        onClick={disabled ? null : onClick}
        onKeyDown={disabled ? null : this._onKeyDown}
        data-hook={dataHook}
      >
        <div
          style={{ height }}
          className={st(
            classes.thumbnail,
            {
              selected,
              disabled,
              size,
              hasBackground,
              hasChildren,
              contentAlignment,
            },
            className,
          )}
          data-selected={selected}
          data-disabled={disabled}
          onFocus={focusableOnFocus}
          onBlur={focusableOnBlur}
          tabIndex={disabled ? null : 0}
          data-hook={dataHooks.thumbnailWrapper}
        >
          {!hideSelectedIcon && selected && this._renderSelectedIcon()}
          {this._renderThumbnailContent()}
        </div>
        {showBottomTitle ? this._renderBottomTitle() : null}
      </div>
    );
  }
}

export default withFocusable(Thumbnail);
