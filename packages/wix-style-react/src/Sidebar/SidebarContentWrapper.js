import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { st, classes } from './Sidebar.st.css';
import { dataHooks, sidebarSkins } from './constants';

/** A sidebar content children wrapper to add gradient  */
export class SidebarContentWrapper extends Component {
  static propTypes = {
    skin: PropTypes.oneOf(['dark', 'light']),
    containerDataHook: PropTypes.string,
    containerClasses: PropTypes.string,
    children: PropTypes.node,
  };

  static defaultProps = {
    skin: sidebarSkins.dark,
  };

  constructor(props) {
    super(props);

    this.childrenContainerRef = React.createRef();
    this.childrenContentRef = React.createRef();
    this.state = {
      isScrollbarDisplayed: false,
    };
    this.childrenResizeObserver =
      'ResizeObserver' in window &&
      new ResizeObserver(this._handleChildrenResize);
  }

  _handleChildrenResize = () => {
    this._shouldAddGradient();
  };

  componentDidMount() {
    this._shouldAddGradient();

    const {
      childrenResizeObserver,
      childrenContainerRef,
      childrenContentRef,
    } = this;

    if (childrenResizeObserver && childrenContainerRef.current) {
      childrenResizeObserver.observe(childrenContainerRef.current);
    }

    if (childrenResizeObserver && childrenContentRef.current) {
      childrenResizeObserver.observe(childrenContentRef.current);
    }
  }

  componentWillUnmount() {
    const {
      childrenResizeObserver,
      childrenContainerRef,
      childrenContentRef,
    } = this;

    if (childrenResizeObserver && childrenContainerRef.current) {
      childrenResizeObserver.unobserve(childrenContainerRef.current);
    }

    if (childrenResizeObserver && childrenContentRef.current) {
      childrenResizeObserver.unobserve(childrenContentRef.current);
    }
  }

  _shouldAddGradient() {
    const { scrollHeight, clientHeight } = this.childrenContainerRef.current;
    this.setState({ isScrollbarDisplayed: scrollHeight > clientHeight });
  }

  render() {
    const { skin, containerClasses, children, containerDataHook } = this.props;
    const css = { ...classes, containerClasses };

    const gradientClasses = st(classes.gradient, {
      skin,
    });

    return (
      <div
        className={css.containerClasses}
        ref={this.childrenContainerRef}
        data-hook={containerDataHook}
      >
        <div className={css.childrenContent} ref={this.childrenContentRef}>
          {children}
        </div>
        {this.state.isScrollbarDisplayed && (
          <div
            className={gradientClasses}
            data-hook={dataHooks.scrollBarGradient}
          />
        )}
      </div>
    );
  }
}
