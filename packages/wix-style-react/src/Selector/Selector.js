import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from '../Checkbox';
import Radio from '../Radio';
import Text from '../Text';
import { st, classes } from './Selector.st.css';
import ExtraText from './ExtraText';
import ProgressBar from './ProgressBar';

class Selector extends React.PureComponent {
  static propTypes = {
    /** Applied as data-hook HTML attribute that can be used in the tests */
    dataHook: PropTypes.string,
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    image: PropTypes.node,
    imageSize: PropTypes.oneOf([
      'tiny',
      'small',
      'portrait',
      'large',
      'cinema',
    ]),
    imageShape: PropTypes.oneOf(['rectangular', 'circle']),
    title: PropTypes.node.isRequired,
    isSelected: PropTypes.bool,
    isDisabled: PropTypes.bool,
    subtitle: PropTypes.string,
    extraNode: PropTypes.node,
    onToggle: PropTypes.func,
    toggleType: PropTypes.oneOf(['checkbox', 'radio']),
    showBelowNodeOnSelect: PropTypes.bool,
    belowNode: PropTypes.node,
    subtitleNode: PropTypes.node,
    className: PropTypes.string,
  };

  static defaultProps = {
    isSelected: false,
    isDisabled: false,
    toggleType: 'radio',
    imageSize: 'large',
    imageShape: 'rectangular',
    onToggle: i => i,
    showBelowNodeOnSelect: false,
  };

  _onClick = () => !this.props.isDisabled && this.props.onToggle(this.props.id);

  render() {
    const {
      dataHook,
      imageSize,
      imageShape,
      image,
      title,
      subtitle,
      extraNode,
      isSelected,
      isDisabled,
      toggleType,
      showBelowNodeOnSelect,
      subtitleNode,
      belowNode,
      className,
    } = this.props;

    return (
      <li
        data-hook={dataHook}
        className={st(classes.root, className)}
        onClick={this._onClick}
        data-shape={imageShape}
        data-size={imageSize}
      >
        <div className={classes.mainPart}>
          {toggleType === 'checkbox' ? (
            <Checkbox
              dataHook="toggle"
              checked={isSelected}
              disabled={isDisabled}
            />
          ) : (
            <Radio
              dataHook="toggle"
              checked={isSelected}
              disabled={isDisabled}
            />
          )}

          {image && (
            <div
              data-hook="selector-image"
              className={st(classes.image, {
                size: imageSize,
                imageShape: imageShape,
              })}
              children={image}
            />
          )}

          <div className={classes.titles}>
            <Text dataHook="selector-title" ellipsis children={title} />

            {subtitle && (
              <Text
                size="small"
                secondary
                dataHook="selector-subtitle"
                ellipsis
                children={subtitle}
              />
            )}

            {subtitleNode && (
              <div data-hook="subtitle-node">{subtitleNode}</div>
            )}
          </div>

          {extraNode && (
            <div
              className={classes.extra}
              data-hook="selector-extra-node"
              children={extraNode}
            />
          )}
        </div>

        {showBelowNodeOnSelect && belowNode && isSelected && (
          <div data-hook="below-section" className={classes.belowSection}>
            {belowNode}
          </div>
        )}
      </li>
    );
  }
}

Selector.ExtraText = ExtraText;
Selector.ProgressBar = ProgressBar;

export default Selector;
