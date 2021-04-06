import React from 'react';
import PropTypes from 'prop-types';
import InfoCircle from 'wix-ui-icons-common/InfoCircle';
import styles from './FieldLabelAttributes.scss';
import Tooltip from '../Tooltip';

class FieldLabelAttributes extends React.PureComponent {
  static tooltipDefaultProps = {
    moveBy: { x: 0, y: -1 },
    minWidth: '150px',
  };

  infoIcon = (
    <span data-hook="info" className={styles.icon}>
      <InfoCircle />
    </span>
  );

  getTooltip = () => {
    if (this.props.info) {
      return React.createElement(Tooltip, {
        ...this.tooltipDefaultProps,
        content: this.props.info,
        children: this.infoIcon,
      });
    } else if (this.props.tooltip) {
      return React.cloneElement(this.props.tooltip, {
        ...this.tooltipDefaultProps,
        children: this.props.tooltip.props.children || this.infoIcon,
      });
    } else {
      return null;
    }
  };

  render() {
    const { dataHook } = this.props;

    return (
      <div data-hook={dataHook} className={styles.root}>
        {this.props.required && (
          <span data-hook="required" className={styles.required}>
            *
          </span>
        )}

        {this.getTooltip()}
      </div>
    );
  }
}

FieldLabelAttributes.defaultProps = {
  required: false,
  info: '',
  appendToParent: true,
  tooltip: null,
};

FieldLabelAttributes.propTypes = {
  dataHook: PropTypes.string,
  required: PropTypes.bool,
  info: PropTypes.node,
  appendToParent: PropTypes.bool,
  tooltip: PropTypes.node,
};

export default FieldLabelAttributes;
