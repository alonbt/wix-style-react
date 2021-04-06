import React from 'react';
import PropTypes from 'prop-types';
import { dataHooks } from './constants';
import PreviewWidget from '../PreviewWidget';
import { st, classes } from './BrowserPreviewWidget.st.css';

/** Browser preview widget */
class BrowserPreviewWidget extends React.PureComponent {
  static displayName = 'BrowserPreviewWidget';

  static propTypes = {
    /** Applied as data-hook HTML attribute that can be used in the tests*/
    dataHook: PropTypes.string,

    /** Background skin. To use `custom` skin, set it to `custom` and use the `backgroundColor` prop*/
    skin: PropTypes.oneOf(['neutral', 'gradient', 'custom']),

    /** Mobile preview widget background color. Can be set with `design system` colors*/
    backgroundColor: PropTypes.string,

    /** Sets the height of the component.*/
    height: PropTypes.string,

    /** Sets the width of the component */
    width: PropTypes.string,

    /** Browser bar height */
    browserBarSize: PropTypes.oneOf(['size9', 'size12', 'size18', 'size24']),

    /** Node to preview */
    children: PropTypes.node.isRequired,
  };

  static defaultProps = {
    skin: 'neutral',
    height: '100%',
    width: '100%',
    browserBarSize: 'size12',
  };

  render() {
    const {
      dataHook,
      skin,
      backgroundColor,
      height,
      width,
      browserBarSize,
      children,
    } = this.props;

    return (
      <PreviewWidget
        className={st(classes.root, {
          skin,
          backgroundColor,
          height,
          width,
          browserBarSize,
        })}
        dataHook={dataHook}
        skin={skin}
        backgroundColor={backgroundColor}
        height={height}
        width={width}
      >
        <div data-hook={dataHooks.browserBar} className={classes.browserBar}>
          <div className={classes.circlesContainer}>
            <div className={classes.circle} />
            <div className={classes.circle} />
            <div className={classes.circle} />
          </div>
        </div>
        <div data-hook={dataHooks.browserContent}>{children}</div>
      </PreviewWidget>
    );
  }
}

export default BrowserPreviewWidget;
