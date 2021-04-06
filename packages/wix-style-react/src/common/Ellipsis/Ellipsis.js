import React from 'react';
import PropTypes from 'prop-types';
import debounce from 'lodash/debounce';
import shallowEqual from 'shallowequal';
import { st, classes, vars } from './Ellipsis.st.css';
import Tooltip from '../../Tooltip';
import { ZIndex } from '../../ZIndex';
import { TooltipCommonProps } from '../PropTypes/TooltipCommon';

class TextComponent extends React.PureComponent {
  _getEllipsisClasses = () => {
    const { ellipsis, maxLines } = this.props;
    const ellipsisLines = maxLines > 1 ? 'multiline' : 'singleLine';

    return className =>
      ellipsis ? st(classes.text, { ellipsisLines }, className) : className;
  };

  componentDidMount() {
    if (!this.props.textRendered) {
      this.props.onTextRendered();
    }
  }

  componentDidUpdate() {
    if (!this.props.textRendered) {
      this.props.onTextRendered();
    }
  }

  render() {
    const { render, maxLines, textElementRef } = this.props;
    return render({
      ref: textElementRef,
      ellipsisClasses: this._getEllipsisClasses(),
      ellipsisInlineStyle: { [vars.maxLines]: maxLines },
    });
  }
}

class Ellipsis extends React.PureComponent {
  static propTypes = {
    /** When true, text that is longer than it's container will be truncated to a single line followed by ellipsis. Otherwise the text will break into several lines. */
    ellipsis: PropTypes.bool,

    /** True by default, set it to false in order to show ellipsis without a tooltip. */
    showTooltip: PropTypes.bool,

    /** A className to be applied to the Ellipsis wrapper. */
    wrapperClassName: PropTypes.string,

    /** The render function, use it to render a text you want to truncate with ellipsis. */
    render: PropTypes.func,

    /** maxLines truncates text at a specific number of lines. */
    maxLines: PropTypes.number,

    // Tooltip props
    ...TooltipCommonProps,
  };

  static defaultProps = {
    ellipsis: false,
    appendTo: 'window',
    flip: false,
    fixed: false,
    placement: 'top',
    zIndex: ZIndex('Tooltip'),
    enterDelay: 0,
    exitDelay: 0,
    showTooltip: true,
  };

  constructor(props) {
    super(props);

    this.state = {
      isActive: false,
      textContent: null,
      textRendered: false,
    };

    this.ref = React.createRef();
  }

  /**
   * Once text component has rendered,
   * Update text content and tooltip active state
   * @private
   */
  _onTextRendered = () => {
    const { isActive, textContent } = this.state;
    const newState = { textRendered: true };

    const newTextContent = this._getTextContent();
    if (newTextContent !== textContent) {
      newState.textContent = newTextContent;
    }

    const shouldBeActive = this._checkShouldBeActive();
    if (shouldBeActive !== isActive) {
      newState.isActive = shouldBeActive;
    }

    this.setState(newState);
  };

  /**
   * An ellipsis is considered active when either the text's scroll width/height is wider than it's container or itself.
   * @private
   */
  _updateIsActive = () => {
    const { isActive } = this.state;

    const shouldBeActive = this._checkShouldBeActive();
    if (shouldBeActive !== isActive) {
      this.setState({ isActive: shouldBeActive });
    }
  };

  _getTextContent = () => {
    const { current: textElement } = this.ref;
    return textElement && textElement.textContent;
  };

  _checkShouldBeActive = () =>
    this._isOverflowingHorizontally() || this._isOverflowingVertically();

  _isOverflowingHorizontally = () => {
    const { current: textElement } = this.ref;
    const { ellipsis } = this.props;

    return (
      ellipsis &&
      textElement &&
      (textElement.scrollWidth - textElement.parentNode.offsetWidth > 1 ||
        textElement.offsetWidth < textElement.scrollWidth)
    );
  };

  _isOverflowingVertically = () => {
    const { current: textElement } = this.ref;
    const { ellipsis, maxLines } = this.props;

    return (
      maxLines > 1 &&
      ellipsis &&
      textElement &&
      (textElement.scrollHeight - textElement.parentNode.offsetHeight > 1 ||
        textElement.offsetHeight < textElement.scrollHeight)
    );
  };

  /**
   * A callback for resizing the window, must be debounced in order to improve performance.
   * @private
   */
  _debouncedUpdate = debounce(this._updateIsActive, 100);

  componentDidMount() {
    window.addEventListener('resize', this._debouncedUpdate);
  }

  _renderText() {
    const { render, ellipsis, maxLines } = this.props;
    const { textRendered } = this.state;
    return (
      <TextComponent
        {...{ render, ellipsis, maxLines, textRendered }}
        onTextRendered={this._onTextRendered}
        textElementRef={this.ref}
      />
    );
  }

  render() {
    const {
      appendTo,
      wrapperClassName,
      disabled,
      enterDelay,
      exitDelay,
      fixed,
      flip,
      maxWidth,
      moveArrowTo,
      onHide,
      onShow,
      placement,
      showTooltip,
      textAlign,
      zIndex,
      size,
    } = this.props;
    const { isActive, textContent } = this.state;

    return showTooltip && isActive ? (
      <Tooltip
        className={st(classes.tooltip, wrapperClassName)}
        content={textContent}
        {...{
          appendTo,
          disabled,
          enterDelay,
          exitDelay,
          fixed,
          flip,
          maxWidth,
          moveArrowTo,
          onHide,
          onShow,
          placement,
          textAlign,
          zIndex,
          size,
        }}
      >
        {this._renderText()}
      </Tooltip>
    ) : (
      this._renderText()
    );
  }

  static getDerivedStateFromProps(props, state) {
    const { render, ellipsis, maxLines } = props;
    const textPropsChanged =
      state.prevRender !== render ||
      state.prevEllipsis !== ellipsis ||
      state.prevMaxLines !== maxLines;

    if (!textPropsChanged) {
      return null;
    }

    // Text changed, initialize textRendered state
    return {
      textRendered: false,
      prevRender: render,
      prevEllipsis: ellipsis,
      prevMaxLines: maxLines,
    };
  }

  componentDidUpdate(prevProps) {
    const { textRendered } = this.state;
    if (textRendered && !shallowEqual(prevProps, this.props)) {
      this._updateIsActive();
    }
  }

  componentWillUnmount() {
    this._debouncedUpdate.cancel();
    window.removeEventListener('resize', this._debouncedUpdate);
  }
}

export default Ellipsis;
